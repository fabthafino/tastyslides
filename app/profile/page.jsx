"use server"
import { auth } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const page = async () => {
    const session = await auth()

    if (!session) {
        redirect("/auth/signin")
    }
  return (
    <main className='min-h-dvh'>
      <div>
        <img src="/bg1.jpg" alt="logo" />
        <h1>John Doe</h1>
        <p>johndoe@example.com</p>

        <button>
            <IoIosLogOut/>
            Sign Out
        </button>
      </div>
    </main>
  )
}

export default page