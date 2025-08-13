import React from 'react'

const RateLimitedUI = () => {
  return (
    <div className='max-w-6xl mx-auto p-4'>
        <div className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4' role='alert'>
            <p className='font-bold'>Rate Limit Exceeded</p>
            <p>You have exceeded the rate limit for this action. Please try again later.</p>
        </div>
    </div>
  )
}

export default RateLimitedUI