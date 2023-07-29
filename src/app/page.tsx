'use client'

import { signIn, useSession } from 'next-auth/react'
import TripSearch from './components/TripSearch';

export default function Home() {
  const {data} = useSession()

  

  return (
    <div>
      <TripSearch />
    </div>
  );
}
