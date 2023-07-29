'use client'

import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const {data} = useSession()

  

  return (
    <div className='bg-primaryDarker'>
      <h1 className='text-4xl'></h1>
    </div>
  );
}
