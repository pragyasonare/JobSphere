import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import TextInput from "./TextInput";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";


const Footer = () => {
  return (
    <footer className="text-black mt-[11%] z-50 overflow-hidden">
      <div className="overflow-x-hidden  mt-0.5">
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: "#1d4ed8",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>

      <div className="bg-[#1d4ed8]">
        <div className="container px-5 py-20 mx-auto">
          <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4">
            {footerLinks.map(({id, title,links})=>(
              <div className="w-auto px-4" key={id + title}>
                <h2 className="font-medu=ium text-white tracking-widest text-sm mb-3">{title}

                </h2>
                <div className="mb-10 flex flex-col gap-3">
                  {links.map((link , indexedDB)=>(

                    <Link 
                    key ={link}
                    to ='/' className="text-gray-300 text-sm hover:text-white"
                    >
                      {link}
                      </Link>
                  ))}

                </div>

              </div>
            ))}

          </div>
        </div>
        <div className="">
          <p className="container px-5 mx-auto text-white mt-2 ">
          </p>
          <div className="container mx-auto px-5 pt-6  pb-8 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start">

            </div>

            <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
              <a className='text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaFacebookF />
              </a>
              <a className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaTwitter />
              </a>
              <a className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FiInstagram />
              </a>

              <a className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>

        <div className='bg-[#001a36]'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-300 text-sm text-center sm:text-left'>

            </p>

            <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
              Designed by Pragya Sonare
            </span>
          </div>
        </div>


      </div>
      </footer>
  )
}

export default Footer