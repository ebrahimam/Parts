import React from 'react'
import Link from 'next/link'
export default function Main() {
  return (
    <>
    <div className="w-full bg-green-400 flex justify-center poppins">
            <div className="button-box py-4 ">
                <ul className='flex flex-row gap-2'>
                    <li className='py-2 px-3 bg-indigo-600 rounded-md hover:text-white text-lg hover:bg-transparent inline transition duration-150 ease-in-out hover:border-solid hover:border-zink-100 hover:border'>
                        <Link href={'/Signin'}>Sign in</Link>
                    </li>
                    <li className='py-2 px-3 bg-indigo-600 rounded-md hover:text-white text-lg hover:bg-transparent inline transition duration-150 ease-in-out hover:border-solid hover:border-zink-100 hover:border'>
                        <Link href={'/plans'}>Plans</Link>
                    </li>
                    <li className='py-2 px-3 bg-indigo-600 rounded-md hover:text-white text-lg hover:bg-transparent inline transition duration-150 ease-in-out hover:border-solid hover:border-zink-100 hover:border'>
                        <Link href={'/Footer'}>Footer</Link>
                    </li>
                </ul>
            </div>
    </div>
    </>
  )
}
