import React from 'react'
import { Link } from 'react-router-dom'

function Footer({ trip }) {
    return (
            <div className='text-center text-gray-400 mt-7'>
                <h2>Check out my other projects below!</h2>
                <div className='flex gap-7 justify-center mt-2'>
                    <Link to="https://github.com/rcuthbertson25" target="_blank"><img className='h-8 w-8' src="/github_logo.png" /></Link>
                    <Link to="https://www.linkedin.com/in/ryan-cuthbertson-61a980281/" target="_blank"><img className='h-8 w-8' src="/circle-linkedin-512.webp" /></Link>
                </div>
            </div>
    )
}

export default Footer
