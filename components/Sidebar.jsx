import Link from 'next/link'
import React from 'react'
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'

const Sidebar = () => {
  return (
    <div className='fixed h-screen  p-4 bg-white border-r-[1px] flex flex-col justify-between w-20'>
        <div className='flex flex-col items-center'>
            <Link href='/'>
                <div className='bg-purple-800 text-white rounded-lg inline-block p-3'>
                    <RxSketchLogo size={20}/>
                </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
            <Link href='/'>
                <div className='bg-gray-100 hover:bg-gray-200 cursour-pointer my-4 rounded-lg inline-block p-3'>
                    <RxDashboard size={20}/>
                </div>
            </Link>
            <Link href='/customers'>
                <div className='bg-gray-100 hover:bg-gray-200 cursour-pointer my-4 rounded-lg inline-block p-3'>
                    <RxPerson size={20}/>
                </div>
            </Link>
            <Link href='/orders'>
                <div className='bg-gray-100 hover:bg-gray-200 cursour-pointer my-4 rounded-lg inline-block p-3'>
                    <HiOutlineShoppingBag size={20}/>
                </div>
            </Link>
            <Link href='/'>
                <div className='bg-gray-100 hover:bg-gray-200 cursour-pointer my-4 rounded-lg inline-block p-3'>
                    <FiSettings size={20}/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar