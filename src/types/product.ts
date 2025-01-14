type ImageGaleryT ={
  [key: string]: string[]
}
export type ProductT ={
  id: number,
  name:string,
  image:string,
  variant_colors: string[],
  description:string,
  price:number,
  image_galery: ImageGaleryT[],
  stock:number
}

