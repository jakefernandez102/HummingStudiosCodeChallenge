import {ProductT} from "../types/product";

export const db:ProductT[] = [
    {
        id: 1,
        name: 'Nike Dunk Low Retro SE',
        image: 'NIKEDUNK_Black',
        variant_colors:[
          'NIKEDUNK_Black',
          'NIKEDUNK_Light_(1)',
          'NIKEDUNK_Brown_(1)',
        ],
        image_galery:[
          {
            black:[
              'NIKEDUNK_Black_(1)',
              'NIKEDUNK_Black_(2)',
              'NIKEDUNK_Black_(3)',
              'NIKEDUNK_Black_(4)'
            ],
          },
          {
            light:[
              'NIKEDUNK_Light_(1)',
              'NIKEDUNK_Light_(2)',
              'NIKEDUNK_Light_(3)',
              'NIKEDUNK_Light_(4)'
            ],
          },
          {
            brown:[
              'NIKEDUNK_Brown_(1)',
              'NIKEDUNK_Brown_(2)',
              'NIKEDUNK_Brown_(3)',
              'NIKEDUNK_Brown_(4)'
            ],
          }
        ],
        description: 'You can always count on a classic. The Dunk Low Retro pairs a monochromatic look with premium materials and plush padding for game-changing comfort that lasts. The possibilities are endless—how will you wear your Dunks?Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 145,
        stock:5,
    },
    {
        id: 2,
        name: 'Nike Dunk Low Retro SE',
        image: 'NIKEDUNK_Black',
        variant_colors:[
          'NIKEDUNK_Light_(1)',
          'NIKEDUNK_Black',
          'NIKEDUNK_Brown_(1)',
        ],
        image_galery:[
          {
            black:[
              'NIKEDUNK_Black_(1)',
              'NIKEDUNK_Black_(2)',
              'NIKEDUNK_Black_(3)',
              'NIKEDUNK_Black_(4)'
            ],
          },
          {
            light:[
              'NIKEDUNK_Light_(1)',
              'NIKEDUNK_Light_(2)',
              'NIKEDUNK_Light_(3)',
              'NIKEDUNK_Light_(4)'
            ],
          },
          {
            brown:[
              'NIKEDUNK_Brown_(1)',
              'NIKEDUNK_Brown_(2)',
              'NIKEDUNK_Brown_(3)',
              'NIKEDUNK_Brown_(4)'
            ],
          }
        ],
        description: 'You can always count on a classic. The Dunk Low Retro pairs a monochromatic look with premium materials and plush padding for game-changing comfort that lasts. The possibilities are endless—how will you wear your Dunks?Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 140,
        stock:0,
    },
  ]