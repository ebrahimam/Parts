import React, { useState } from 'react'
import '/src/style/output.css'
import { BsFillEyeFill} from "react-icons/bs";
import { BsFillEyeSlashFill} from "react-icons/bs";

 const Sign = () => {
    const [pos,setpos]=useState(true)
  return (
    <>
                <div className=" w-full  h-full poppins  ">
                    <div className="box  w-3/4 h-full flex  flex-row gap-2 relative mx-auto my-4 shadow-sign ">
                            <div className="left flex w-1/2 h-full  justify-center  inner-color rounded-md py-4 ">
                               
                                            <div className="forms w-2/3 flex flex-col gap-2  pt-3 ">
                                            <div className="title text-center">
                                    <span className='text-4xl text-bold'>
                                        Create an Account
                                    </span>
                                    <br />
                                    <span className='text-title text-zinc-500  '>
                                        Sign up now and unlock exclusive access!
                                    </span>
                                </div>
                                                <label htmlFor="name" className='flex flex-col gap-1 mt-5 '> Your Name
                                                    <input type="text" placeholder='Enter name' id='name' />
                                                </label>
                                                <label htmlFor="name" className='flex flex-col gap-1'> Email
                                                    <input type="email" placeholder='Email : Example@gmail.com' id='name' />
                                                </label>
                                                <label htmlFor="name" className='flex flex-col gap-1 relative'> Password

                                                    <input type={pos ? 'password' : "text"} placeholder='password' id='name' />
                                                    {
                                                        pos ?
                                                        <BsFillEyeSlashFill className='absolute top-11 right-4' onClick={()=>setpos(!pos)}/> 
                                                        : 
                                                        <BsFillEyeFill className='absolute top-11 right-4' onClick={()=>setpos(!pos)}/>

                                                    }
                                                </label>
                                                <button className='bg-pink-400 py-4 px-0 rounded-lg mt-10 hover:text-white'>Create Account</button>
                                                <button className='bg-slate-200 py-4 px-0 rounded-lg'>Sign in</button>
                                                <span  className='text-zinc-500'>
                                                    Email@gmil.com
                                                </span>
                                            </div>

                            </div>
                            <div className="right bg-yellow-400 w-1/2 rounded-md">
                                
                            </div>
                    </div>

                </div>

    </>
  )
}
export default Sign