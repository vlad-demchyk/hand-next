'use client'


import Image from 'next/image';

export default function Login(){
    return (
        <button className="login" aria-label="login">
        <Image width={20} height={20} src="/icons/login.svg" alt="login" />
        Login
      </button>
    )
}