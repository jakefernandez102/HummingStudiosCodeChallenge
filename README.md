# Humming Studios Code Challenge

This repository contains my solution to the Humming Studios code challenge. The project is built using React.js with Vite, Typescript and React Router DOM v7.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)
- [State Management](#state-management)
- [Functions & Components](#detailed-explanation-of-functions)
  - [Router](#router)
  - [CartContext](#cartcontext)
  - [Header](#header)
  - [ProductView](#productview)
  - [Product](#product)
  - [ProductDetailView](#productdetailsview)
  - [ProductDetail](#productdetail)
  - [Utility](#utility)

## Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/jakefernandez102/HummingStudiosCodeChallenge.git
   
   cd HummingStudiosCodeChallenge
   
   npm install --legacy-peer-deps
   <!-- The above flag is necessary since there 
   are deps that indicates are not compatible
   with react v18 but are functional -->

   npm run dev
```

## Usage

 - Once the development server is running, you can:

    - View a list of products.```(2 products to demonstrate in stock and out of stock differences)```
    - Add products to the cart.
    - Navigate to product detail pages.
    - See product variants, availability, and prices.
    - Perform cart actions like adding, removing, and adjusting quantities.

## Features

  - ```Product Listing:``` Displays products with images, price, stock status, and options for variants.
  - ```Product Details:``` Detailed view of a product with image gallery and variant selection.
  - ```Shopping Cart:``` Add, remove, or adjust quantities of items in the cart.
  - ```State Management:``` Context API and custom hooks manage the cart state seamlessly.
  - ```Responsive Design:``` Optimized for various screen sizes.

## Folder Structure
The project's folder structure is organized as follows:


```  
HummingStudiosCodeChallenge/
  ├── public/
  │   ├── img/ (Static product images)
  ├── src/
  │   ├── components/ (Reusable UI components)
  │       ├── header/ (Header components)
  │       ├── product/ (Product-related components)
  │   ├── context/ (Cart context for state management)
  │   ├── data/ (Simulated database)
  │   ├── hooks/ (Custom hooks for state and logic abstraction)
  │   ├── router/ (Application routes setup)
  │   ├── types/ (TypeScript type definitions)
  │   ├── utils/ (Utility functions)
  │   ├── Views/ (Page-level components like ProductView and ProductDetailsView)
  │   ├── main.tsx (Entry point of the application)
  │   └── index.css (Global styles)
  ├── .gitignore
  ├── index.html
  ├── package.json
  ├── tsconfig.json
  ├── tsconfig.app.json
  ├── tsconfig.node.json
  ├── eslint.config.js
  ├── vite.config.ts
  └── README.md
  ```

## Components Overview
### Key Components:
- ```ProductView:``` Displays the list of products using the Product component.
- ```ProductDetailsView:``` Shows detailed information about a specific product, including image gallery, variants, and description.
- ```Header:``` Navigation bar for the application.
- ```Footer:``` Footer section displayed across the app.
- ```CartContext:``` Provides state and actions for managing the shopping cart.

## Reusable Components:
- ```Product:``` Represents a single product in the list.
- ```ProductImage:``` Handles product image and variant switching.
- ```VariantColors:``` Displays and manages color variants for products.
- ```StockIndicator:``` Indicates product stock availability.
- ```Button:``` Custom button for adding items to the cart.
- ```SubscriptionForm:``` Form for users to subscribe to updates.

## State Management

-  The application uses the Context API encapsulated in CartContext and accessed via the useCart hook. It provides:

  - ```addToCart:``` Adds an item to the cart.
  - ```removeFromCart:``` Removes an item from the cart.
  - ```increaseQuantity/decreaseQuantity:``` Adjusts the quantity of an item.
  - ```clearCart:``` Clears all items from the cart.
  - ```cartTotal:``` Calculates the total cost of items in the cart.
  - ```isEmpty:``` Checks if the cart is empty.
  
## Database Simulation

### The project simulates a database using a static db.ts file containing product data:

**id**, **name**, **image**, **variant_colors**, **image_gallery**, **description**, **price**, and **stock** properties define each product.
Products include multiple color variants and an image gallery for a dynamic shopping experience.

### Sample Product Data:
```ts
{
    id: 1,
    name: 'Nike Dunk Low Retro SE',
    image: 'NIKEDUNK_Black',
    variant_colors: ['NIKEDUNK_Black', 'NIKEDUNK_Light_(1)', 'NIKEDUNK_Brown_(1)'],
    image_gallery: [
        { black: ['NIKEDUNK_Black_(1)', 'NIKEDUNK_Black_(2)', 'NIKEDUNK_Black_(3)', 'NIKEDUNK_Black_(4)'] },
        { light: ['NIKEDUNK_Light_(1)', 'NIKEDUNK_Light_(2)', 'NIKEDUNK_Light_(3)', 'NIKEDUNK_Light_(4)'] },
        { brown: ['NIKEDUNK_Brown_(1)', 'NIKEDUNK_Brown_(2)', 'NIKEDUNK_Brown_(3)', 'NIKEDUNK_Brown_(4)'] }
    ],
    description: 'Classic style with premium materials...',
    price: 145,
    stock: 5,
}
```

## Detailed Explanation of Functions

## Router
 - The Router component handles the application's routing logic using React Router DOM v7.

### Routes:
```/``` Renders the ProductView component.
```/products/:id``` Renders the ProductDetailsView for a specific product.

```tsx
const Router = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
```

## CartContext
 - Manages the state of the shopping cart.

## Key Functions:
```addToCart:``` Adds a product to the cart and updates localStorage.
```removeFromCart:``` Removes a product from the cart.
```increaseQuantity/decreaseQuantity:``` Adjusts product quantity in the cart.
```clearCart:``` Empties the cart.
```isEmpty:``` Returns true if the cart is empty.
```cartTotal:``` Computes the total price of items in the cart.

```tsx
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartT) => {
    const itemExists = cart.findIndex((product: ProductT) => product.id === item.id);
    if(item.stock ===0){
      toast("We're sorry, the product you tried to add to the cart is currently out of stock",{
        position:'top-center',
        type:'error'
      })
      return
    }
    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS){
        toast('You can add only 5 products to the cart',{
          position:'top-center',
          type:'error'
        })
        return
      } 
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
    toast('Product added successfully',{
      position:'top-center',
      type:'success'
    })
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart:CartT[]) => prevCart.filter((product) => product.id !== id));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item:CartT) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item:CartT) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const clearCart = () => setCart([]);

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((total:number, item:CartT) => total + item.quantity * item.price, 0), [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        data,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
```

## Header
 - Serve as a layout throw the two different views ```ProductView``` and ```ProductDetailView```
```
export default function Header() {
  
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();
    
  return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    
                    <Title textWhite={'Humming'} textYellow={'Store Challenge'} />

                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-center">
                            <Cart
                              isEmpty={isEmpty}
                              cart={cart}
                              decreaseQuantity={decreaseQuantity}
                              increaseQuantity={increaseQuantity}
                              removeFromCart={removeFromCart}
                              clearCart={clearCart}
                              cartTotal={cartTotal}     
                            />
                    </nav>
                </div>
            </div>
        </header>
    )
}
```

## ProductView
 - The ProductView component displays a list of products fetched from the useCart hook.

## Key Functions:
 - Iterates over data from the CartContext to render each product using the Product component.
 - Includes a subscription form and footer for additional functionality.

```tsx
function ProductView() {
  const { data } = useCart();

  return (
    <>
      <main className="container-xl mt-5">
        <h2 className="text-center">Our Product</h2>
        <div className="row mt-5">
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
      <hr className="my-5" />
      <SubscriptionForm />
      <Footer />
      <ToastContainer />
    </>
  );
}
```

## Product
 - The Product component represents a single product card with its details and actions.

## Key Functions:
 - ```handleNextVariant:``` Switches to the next color variant.
 - ```handlePreviousVariant:``` Switches to the previous color variant.
 - Uses useCart to add products to the cart.
 - Uses some atomized components such as 
   - ```<Button/>```: Renders a button for product with add to cart  function.
   - ```<StockIndicator/>```: renders if there's stock of the product.
   - ```<VariantColors/>```: Renders the photos if variants.

```tsx
export default function Product({product}: ProductProps) {

  const [imageToShow, setImageToShow] = useState(`/img/${product?.variant_colors[0]}.png`)
  const [variantImages] = useState(product?.variant_colors)

  const { id, name, price,variant_colors } = product
  
  const {addToCart} = useCart();
  
  const handleNextVariant= ()=>{
    const imageIdx = variantImages.indexOf(imageToShow.split('/')[2].split('.')[0])

    if(imageIdx < variantImages.length-1){
      setImageToShow(`/img/${variantImages[imageIdx+1]}.png`)
    }else{
      setImageToShow(`/img/${variantImages[0]}.png`)
    }
  } 
  const handlePreviousVariant= ()=>{
    const imageIdx = variantImages.indexOf(imageToShow.split('/')[2].split('.')[0])

    if(imageIdx === 0){
      setImageToShow(`/img/${variantImages[variantImages.length-1]}.png`)
    }else{
      setImageToShow(`/img/${variantImages[imageIdx-1]}.png`)
    }
  }

  return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <ProductImage
              imageToShow={imageToShow}
              handleNextVariant={handleNextVariant}
              handlePreviousVariant={handlePreviousVariant}
            />

            <VariantColors
              variantColors={variant_colors}
              setImageToShow={setImageToShow}
            />

            <StockIndicator
              stock={product?.stock}
            />
            <Link to={`/products/${id}`}>
              <p className='text-primary fw-bold text-sub'>See details...</p>
            </Link>
            <div className="col-12">
              <h3 className="text-black fs-4 fw-bold text-uppercase text-center">{name}</h3>
              <p className="fw-black text-primary fs-3 text-center">{price.toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
              <Button
                product={product}
                addToCart={addToCart}
                text={'Add to Cart'}
              />
            </div>
        </div>
    )
}
```

## ProductDetailsView
 - Displays detailed information about a specific product, including:

 - Image gallery.
 - Variant switching.
 - Detailed product description and price.

```tsx
const ProductDetailsView = () => {
  const { data } = useCart();
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const selectedProduct = data.find((p) => p.id === parseInt(params.id));
    setProduct(selectedProduct);
  }, [data, params.id]);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};
```

## ProductDetail

 - Use ```<ReactImageMagnify/>``` component from react-image-magnify to implement the zooming of the selected picture.
 - Use useCart custom hook to destructure addToCart function.

```tsx
const ProductDetail = ({imageToShow, product, setImageToShow, imageGalery}:ProductDetailProps) => {
  const {addToCart} = useCart()
  return (
    <>
      <div className="col-8 col-lg-4">
          <div
            className="magnifier-image"
          >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Product Image',
                  isFluidWidth: true,
                  src: imageToShow,
                },
                largeImage: {
                  src: imageToShow,
                  width: 1200,
                  height: 1200,
                },
              }}
            />
          </div>
          <VariantColors
            variantColors={product?.variant_colors}
            setImageToShow={setImageToShow}
          />
      </div>
      <div className='col-4 col-lg-4'>
            {
              imageGalery.map((image:string) => (
                <img
                  key={image} 
                  className="variant_color row " 
                  src={`/img/${image}.png`} 
                  alt="product galery image"
                  onMouseOver={() => setImageToShow(`/img/${image}.png`)}
                  width={105}
                  height={105}
                />
              ))
            }
      </div>
      <div className=" col-lg-4">
          <h3 className="text-black fs-4 fw-bold text-uppercase text-center">{product?.name}</h3>
          <p className="fs-5 ">{product?.description}</p>
          <p className="fw-black text-primary fs-3 text-center">{product?.price.toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
          <Button
            product={product}
            addToCart={addToCart}
            text={'Add to Cart'}
          />
      </div>
      <ToastContainer/>
    </>
  )
}

export default ProductDetail
```

## Utility
 - There's a function that allows the ```onMoveOver``` event change the image that it's being showed. 

```
export const handleChangeImage= (e:React.SyntheticEvent<HTMLElement>,setImageToShow:React.Dispatch<string>)=>{
    const target = e.target as HTMLElement; 
    const value = target.getAttribute('src'); 
    if (value) {
      setImageToShow(value);
    }
  }
```
