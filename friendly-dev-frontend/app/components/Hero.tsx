import React from 'react'
import { Link } from 'react-router'

type HeroProps={
    name?:string;
    text?:string;
}

function Hero({name='', text='I build friendly web experiences and help others become confident, modern developers.'}:HeroProps) {
    return (
        <div>
            <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
                <h2 className="text-4xl font-bold mb-4">
                    Friendly Dev
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                    {text}
                </p>
                <div className="flex justify-center gap-4">
                    <Link to='/projects' className='bg-blue-400 px-4 py-2 rounded-sm font-bold hover:bg-blue-700 transition'>View Projects</Link>
                    <Link to='/contact' className='border border-blue-500 text-blue-400 font-bold rounded-sm px-4 py-2 hover:bg-blue-500 hover:text-white transition'>Contact Me</Link>
                </div>
            </header>

        </div>
    )
}

export default Hero
