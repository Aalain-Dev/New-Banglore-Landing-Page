import React from 'react'
import img1 from"../assets/Collage/img-1.png"
import img2 from"../assets/Collage/img-2.png"
import img3 from"../assets/Collage/img-3.png"
import img4 from"../assets/Collage/img-4.png"
import img5 from"../assets/Collage/img-5.png"
import img6 from"../assets/Collage/img-6.png"
const Collage = () => {
  return (

<>
<div className="grid grid-cols-1 xl:grid-cols-5 ">
  <div className="">
    <img src={img1} className="w-full h-full object-cover mx-auto" alt="img1" />
  </div>

  <div className="">
    <img src={img2} className="w-full h-full object-cover" alt="img2" />
  </div>

  <div className="">
    <img src={img3} className="w-full h-full object-cover" alt="img3" />
  </div>
  <div className="">
    <img src={img4} className="w-full h-full object-cover mx-auto" alt="img1" />
  </div>

  <div className="">
    <img src={img5} className="w-full h-full object-cover" alt="img2" />
  </div>


</div>
<div className="grid grid-cols-1 xl:grid-cols-5 ">
<div className="">
    <img src={img5} className="w-full h-full object-cover" alt="img2" />
  </div>
  <div className="">
    <img src={img4} className="w-full h-full object-cover mx-auto" alt="img1" />
  </div>
  <div className="">
    <img src={img3} className="w-full h-full object-cover" alt="img3" />
  </div>
  <div className="">
    <img src={img2} className="w-full h-full object-cover" alt="img2" />
  </div>

  <div className="">
    <img src={img1} className="w-full h-full object-cover mx-auto" alt="img1" />
  </div>

 






</div>

</>

  )
}

export default Collage