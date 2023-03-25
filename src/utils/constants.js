import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'Our Team',
    url: '/ourteam',
  },

]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'The customer himself, the customer will be able to pursue the adipiscing of the company. Pleasures, those By tolerating the corrupt, by rejecting them, they do not know the will of things, but where they never come from',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'The customer himself, the customer will be able to pursue the adipiscing of the company. Pleasures, those By tolerating the corrupt, by rejecting them, they do not know the will of things, but where they never come from',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'The customer himself, the customer will be able to pursue the adipiscing of the company. Pleasures, those By tolerating the corrupt, by rejecting them, they do not know the will of things, but where they never come from',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
