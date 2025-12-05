import React from 'react'

const Preloader = () => {
  return (
    
    <div className="w-full h-screen flex justify-center items-center">
            <div className="md:grid grid-cols-3">
            <div></div>
            <div className="flex justify-center items-center p-5 md:p-0">
                <img src="https://d2w9rnfcy7mm78.cloudfront.net/2598352/original_2ac3731e3656ba1afd0cbe43cfde977f.gif?1535144502" alt="page not found" />
                </div>
            <div></div>
        </div>
        </div>
  )
}

export default Preloader
