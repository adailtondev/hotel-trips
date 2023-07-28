import React from 'react';
import Trips from './components/Trips';


export const metadata = {
    title: "About",
}

const Page = () => {
    return (
        <div>
            <Trips></Trips>
            <h1>página about</h1>
        </div>
    )
}

export default Page