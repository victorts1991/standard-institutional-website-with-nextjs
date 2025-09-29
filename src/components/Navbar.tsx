"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '/'}, 
        { name: 'Produtos', href: '/produtos'},
        { name: 'Recursos', href: '/recursos'},
        { name: 'Sobre nós', href: '/sobre-nos'} 
    ]
    
    const logoWidth = 120;
    const logoHeight = 30;

    return (
        <nav className='p-6 max-w-7xl mx-auto'>
            
            <div className='flex items-center justify-between'> 
                
                <div className="flex-shrink-0">
                    <Link href="/" passHref onClick={() => setIsMenuOpen(false)}>
                        <Image 
                            src="/logo.svg"
                            alt="Optimus Tech Logo"
                            width={logoWidth}
                            height={logoHeight}
                            className='cursor-pointer'
                        />
                    </Link>
                </div>

                <div className='hidden md:flex space-x-8 items-center'>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.href}
                        >
                            <p className="text-lg text-gray-500 hover:text-gray-900 transition duration-150 cursor-pointer">
                                {link.name}
                            </p>
                        </Link>
                    ))}

                    <div className='flex items-center space-x-4'>
                        <button 
                            className='text-lg font-medium text-gray-900 hover:text-gray-700 transition duration-150 py-2 px-4 cursor-pointer'
                        >
                            Entrar
                        </button>

                        <button
                            className='text-lg font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg py-2 px-4 transition duration-150 shadow-md cursor-pointer'
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>

                <button
                    className='md:hidden cursor-pointer'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg 
                        className="w-6 h-6 text-gray-900" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                    </svg>
                </button>
                
            </div>

            <div 
                className={`
                    md:hidden 
                    fixed inset-0 bg-white z-50 
                    p-6 
                    transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className='flex justify-between items-center mb-10'>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                         <Image 
                            src="/logo.svg"
                            alt="Optimus Tech Logo"
                            width={logoWidth}
                            height={logoHeight}
                        />
                    </Link>
                    <button onClick={() => setIsMenuOpen(false)}>
                        
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div className='flex flex-col space-y-6'>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                            <p className="text-xl font-medium text-gray-800 hover:text-red-600">
                                {link.name}
                            </p>
                        </Link>
                    ))}
                    
                    <hr className="my-4 border-gray-200"/>
                    
                    <button className="text-xl font-medium text-gray-900 hover:text-gray-700 py-2 w-full text-left cursor-pointer">Entrar</button>
                    <button className="text-xl font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg py-3 shadow-md w-full cursor-pointer">Cadastrar</button>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;