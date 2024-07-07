'use client'

import Image from "next/image"

export default function Error({ error, reset }) {
    console.log(error)
    return (
        <div className="flex flex-col mt-32 justify-center items-center">
            <Image src="/opps.jpg" width={200} height={200} alt="" />
            <h2 className="text-lg font-bold my-3">Something went wrong!</h2>
            <button className="bg-orange-500 hover:bg-orange-600 px-3 py-2 text-white rounded-md" onClick={() => reset()}>Try again</button>
        </div>
    )
}