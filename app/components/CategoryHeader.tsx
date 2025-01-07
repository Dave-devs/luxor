import React from 'react'

export default function CategoryHeader() {
  return (
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mx-auto max-w-7xl px-4 md:px-0'>
        <div className='md:space-y-4 sm:space-y-2 md:w-[400px]'>
            <p className='text-primary font-semibold'>CATEGORIES</p>
            <h3 className='text-4xl font-bold'>Architecture Interior.</h3>
        </div>
          <div className='md:max-w-[500px] mt-4 md:mt-0 text-base md:text-sm font-normal text-gray-500 text-wrap'>
            <p>Designing an architectural interior involves integrating functionality, aesthetics, and user experience to create spaces that are both visually appealing and practical. Here&apos;s a step-by-step guide to designing an architectural interior.</p>
        </div>
    </div>
  )
}
