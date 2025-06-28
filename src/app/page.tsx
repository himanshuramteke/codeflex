"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

const HomePage = () => {
  return (
    <>
     HomePage
     <SignedOut>
       <SignInButton />
     </SignedOut>
     <SignedIn>
      <SignOutButton />
     </SignedIn>
    </>
  )
}

export default HomePage;