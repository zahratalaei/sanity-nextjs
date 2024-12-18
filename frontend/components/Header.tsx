'use client'

import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import Form from "next/form"
import {TrolleyIcon,PackageIcon} from '@sanity/icons'
const Header = () => {
    const { user } = useUser()
    const createClerckPassKey = async () => {
       try{ 
        const res = await user?.createPasskey()
        console.log(res)
       }catch(e){ console.error("Error:", JSON.stringify(e,null,2))}
    }
    return (
        <header className="flex flex-wrap justify-between item-center px-4 py-2">
            <div className="flex w-full flex-wrap justify-between items-center">
                {/* Top row */}
                <div>
                    <Link
                        className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
                        href="/">Shopr </Link>
                </div>
                <Form action="/search" className="w-full sm:auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0">
                    <input type="text" name="query" placeholder="Search for Products"
                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none           focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl" />
                </Form>
                <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 md:flex-none">
                    <Link href="/basket" className="flex-1 flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <TrolleyIcon className="w-6 h-6" />
                    {/*span item count once global state is implemented*/}
                    <span></span>
                    <span>My Basket</span>
                    </Link>
                    {/*User icon name and logout button*/}
                   <ClerkLoaded>
                   <SignedIn> 
                        <Link href="/orders" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                           <PackageIcon className = "w-6 h-6"/>
                           <span>My Orders</span>
                        </Link>
                    </SignedIn>  
                       
                
                    {user ? (
                        <div className="flex items-center space-x-2">
                            <UserButton/>
                            <div className="hidden sm:block text-xs">
                                <p className="text-gray-400">Welcome Back</p>
                                <p className="font-bold">{user.fullName}</p>
                            </div>
                        </div>
                        ):(
                            <SignInButton mode="modal"/>
                        )}
                        {user?.passkeys.length === 0 && (
                            <button onClick={createClerckPassKey} className="bg-white hover:text-white hover:bg-blue-700 animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border">Create Passkey</button>)}

                        
                   </ClerkLoaded>

                </div>
            </div>
        </header>
    )
}

export default Header