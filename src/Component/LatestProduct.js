import React from 'react'
import Image from 'next/image'
import Chair from '../Asset/Chair.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const LatestProduct = ({ product }) => {
  const { name, images, price } = product;
  return (
    <>

      <div >
        <div className=' border-primary border-4 p-4 hover:border hover:bg-primary     '>
          {/* <Image src={Chair} className='w-full aspect-square object-cover' /> */}
          <Image src={images[0]}
            width={1000} height={1000} style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }} className='hover:border-primary hover:border-4' />

          < div className='  flex justify-between mx-2 my-2 ' >
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div >
        </div >




      </div >
    </>
  )
}


export default LatestProduct