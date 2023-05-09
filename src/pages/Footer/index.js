import React from 'react'
import '/src/style/output.css'
import { BsInstagram,BsTelegram,BsGithub ,BsDribbble,BsTwitch} from "react-icons/bs";
export default function foot() {
  return (
    <>
   <div className="footer absolute bottom-0 left-0  w-full  poppins py-3  flex justify-center">
        <div className="footer-main py-5  flex flex-col flex-wrap items-center  rounded-md">
            <div className="news-letter  flex flex-row justify-between">
                <div className="sign p-2">
                    <h2 className='text-bold text-2xl'>Sign up to our newsletter</h2>
          <span className='tet-light'>Stay up to data with the lattest news,announcement,and article.</span> 
                </div>
            
            <div className="email">
                <input type="email" className='border-solid  bg-white border-1 border-stone-400 ' placeholder='Enter Email...' />
                <button className='bg-slate-800 text-white py-1 px-3 uppercase font-bold rounded-md ml-3'>subscribe</button>
            </div>
            </div>
            <div className="footer-item flex flex-row gap-5 flex-wrap w-full   justify-center my-10 px-9">
                    <div className="untitledui py-3 px-2 text-center  ">
                      <h1 className='text-bold text-2xl'>Unlimited UI</h1>
                      <span className='text-zinc-600'>
                        Design mazing digital exprerience <br /> that create more happy into the world.
                      </span>
                    </div>
                    <div className="product ml-20">
                      <span className='text-bold text-zinc-500 text-lg'>Products</span>
                      <ul className='flex flex-col gap-1 mt-2'>
                        <li><a href="#">overview</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Release</a></li>
                      </ul>
                    </div>
                    <div className="company ml-9">
                    <span className='text-bold text-zinc-500 text-lg'>Company</span>
                      <ul className='flex flex-col gap-1 mt-2'>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Media kit</a></li>
                        <li><a href="#">Contents</a></li>
                      </ul>
                    </div>
                    <div className="Resources ml-9 ">
                    <span className='text-bold text-zinc-500 text-lg'>Resources</span>
                      <ul className='flex flex-col gap-1 mt-2'>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Support</a></li>
                      </ul>
                    </div>
                    <div className="Socials ml-9 ">
                    <span className='text-bold text-zinc-500 text-lg'>Social</span>
                      <ul className='flex flex-col gap-1 mt-2'>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">linkedin</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">angelList</a></li>
                        <li><a href="#">dribbble</a></li>
                      </ul>
                    </div>
                    <div className="legal ml-9 ">
                    <span className='text-bold text-zinc-500 text-lg'>Legal</span>
                      <ul className='flex flex-col gap-1 mt-2'>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Licenses</a></li>
                        <li><a href="#">Setting</a></li>
                        <li><a href="#">Contract</a></li>
                      </ul>
                    </div>

            </div>
            <div className="socials w-full flex justify-evenly mt-6">
              <span>2077 Unlimited UI.All rights reserved.</span>
              <div className="icons flex flex-row gap-4 ">
                <BsDribbble size={20}/>
                <BsGithub size={20}/>
                <BsInstagram size={20}/>
                <BsTelegram size={20}/>
              <BsTwitch size={20}/>
            
                
              </div>

            </div>
        </div>
       
   </div>
    
    
    </>
  )
}
