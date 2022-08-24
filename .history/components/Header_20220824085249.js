import React from 'react'
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div>
        <div className="flex">
          <HeaderIcon Icon={HomeIcon} title="HOME" />       
          <HeaderIcon Icon={UserIcon} title="CONTACT" />       
          <HeaderIcon Icon={HomeIcon} title="ACCOUNT" />       
          <HeaderIcon Icon={HomeIcon} title="ABOUT" />       
        </div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
          width={100}
          height={100}
        />
    </div>
  )
}
