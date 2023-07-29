'use client'

import { signIn, useSession } from 'next-auth/react'
import TripSearch from './components/TripSearch';
import QuickSearch from './components/QuickSearch';

export default function Home() {
  const {data} = useSession()

  

  return (
    <div>
      <TripSearch />
      <QuickSearch />
    </div>
  );
}
