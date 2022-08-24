import React from 'react'
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import { HomeIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div>
        <div className="flex">
        <HeaderIcon Icon={HeaderIcon} title="HOME"/>
        </div>
        <Image
          src= "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
          width={200}
          height={100}
        />
    </div>
  )
}
