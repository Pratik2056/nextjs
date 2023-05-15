import { AiOutlineMail, AiOutlineMobile, AiOutlineSearch } from "react-icons/ai"
import Link from "next/link"
import Image from "next/image"
import Promotional from "../Asset/promotional.png"
import LatestProduct from "../Component/LatestProduct"
import axios from "axios"
import { useEffect, useState } from "react"




const index = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://ecommerce-sagartmg2.vercel.app/api/products")
      .then(res => {
        console.log(res.data.data[0].data)
        setProducts(res.data.data[0].data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    < >
      <header>
        <nav className="flex justify-between  bg-primary text-white  p-4 ">
          <ul className="flex justify-between gap-3">
            <li> <Link href="mailto:pratykmanandahr99@gmail.com"><AiOutlineMail className="inline" />pratykmanandahr99@gmail.com</Link></li>
            <li><Link href="tel:9843126432"><AiOutlineMobile className="inline" />9843126432</Link>
            </li>
          </ul>
          <ul className="flex gap-2 mr-2">
            <li><Link href={"Cart"}>Cart</Link></li>
            <li><Link href={"/Login"}>Login</Link></li>
          </ul>
        </nav>
        <nav className="container md:flex md:gap-3 items-center justify-center p-4">

          <Link href={"/"} className="text-4xl">Hekto</Link>

          <div className="md:flex justify-between container gap-3 ">
            <ul className=" flex gap-3 mt-2">
              <Link href={"/"}>Home</Link>
              <Link href={"/Products"}>Products</Link>
            </ul>
            <form className="border ">
              <input type="text" className="outline-none rounded-full" /><AiOutlineSearch size={30} className="inline bg-pink-600 text-white " />
            </form>
          </div>

        </nav>
      </header>



      <div>
        <Image src={Promotional} className=" h-[230px] md:h-auto" />
      </div>

      <div>
        <p className='text-center text-2xl'>Latest Product</p>
        <div className="grid grid-cols-3 gap-3">
          {
            products.map(product => {
              return <LatestProduct product={product} key={product.id} />
            })
          }

        </div>
      </div>




    </>
  )
}






export default index