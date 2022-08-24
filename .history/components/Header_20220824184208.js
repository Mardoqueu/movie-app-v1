import React from 'react'
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
        <div className="flex">
          <HeaderIcon Icon={HomeIcon} title="HOME" />       
          <HeaderIcon Icon={UserIcon} title="CONTACT" />       
          <HeaderIcon Icon={PhoneIcon} title="ACCOUNT" />       
          <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />       
        </div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
          width={100}
          height={100}
          className="cursor-pointer active:brightness-110"
        />
    </div>
  )
}
