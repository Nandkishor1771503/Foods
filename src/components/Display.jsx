import React from 'react'

function Display() {
  return (
    <>
    <div className='my-12 bg-orange-200 rounded-xl w-[93%] h-96 flex items-center justify-center gap-5 shadow-2xl md:ml-4 lg:ml-8'>

      <h2 className='hidden md:block md:ml-4 md:text-3xl'>Fast, Fresh, and Delicious! Your Favorite Meals Delivered to Your Doorstep</h2>
      <img src="http://3.bp.blogspot.com/-IdbvEefSCX0/YC2ETUymJfI/AAAAAAAAZhk/IFYzVcpW6SI11GPak5aFMTXU3wq20p1IwCK4BGAYYCw/s1600/paneer%2Bbutter%2Bmasala%2B15.JPG" alt="" className='w-[65%] md:w-[40%] mx-auto h-80 rounded-full ' />
    </div>
    <h2 className=' md:hidden mr-4 text-2xl text-wrap font-semibold'>Fast, Fresh, and Delicious! Your Favorite Meals Delivered to Your Doorstep</h2>
    </>
  )
}

export default Display
