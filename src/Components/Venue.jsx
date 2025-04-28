import React from 'react'
import back_img from "../assets/Venue/bg.jpg"
const Venue = () => {
  return (
  <div className="w-full bg-amber-600">
    {/* Vidhana Soudha */}
      <div className="mt-10 h-[450px] w-full mx-auto relative  z-1
" style={{backgroundImage: `url(${back_img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[-2]"></div>
<div className="container " style={{zIndex: '100000'}}>
<div className="flex flex-col justify-center items-center h-full pt-30">
<h1 className='text-center text-white xl:text-[2.5rem] text-[2.5rem] font-bold'>THE VENUE
</h1>
<p className='text-center text-white xl:text-[2.5rem] text-[1.2rem] font-bold'>

ICB INDIAN CRAFT BREWERY

</p>
<a href="https://www.google.com/maps?sca_esv=3470b58f8723632d&rlz=1C1RXMK_enIN997IN997&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHUlDQiBJTkRJQU4gQ1JBRlQgQlJFV0VSWSBtYXBzMgsQLhiABBjHARivATIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSLcJUABY2AhwAHgAkAEAmAGHAqABkQeqAQUwLjEuM7gBA8gBAPgBAvgBAZgCBKACowfCAhAQLhiABBhDGMcBGIoFGK8BwgIFEAAYgATCAh8QLhiABBhDGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AEBmAMA4gMFEgExIEC6BgYIARABGBSSBwUwLjEuM6AH6iGyBwUwLjEuM7gHowc&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVfFE5vbF647MRgqfJGU7rWH&daddr=Sy+no+90/3,+K,+572/90,+Outer+Ring+Rd,+beside+Manhpo+Convention+Center,+DadaMastan+Layout,+Manayata+Tech+Park,+Nagawara,+Bengaluru,+Karnataka+560045" target="_blank" className='text-white mt-10 underline pb-2'>View In Maps</a>
</div>
</div>
    </div>
  </div>
  )
}

export default Venue