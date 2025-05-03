import React from 'react'
import img1 from"../assets/Collage/img-1.jpeg"
import img2 from"../assets/Collage/img-2.jpg"
import img3 from"../assets/Collage/img-3.jpg"
import img4 from"../assets/Collage/img-4.jpg"
import img5 from"../assets/Collage/img-5.jpeg"
import img6 from"../assets/Collage/img-6.jpg"
import one from"../assets/Collage/one.JPG"
import two from"../assets/Collage/two.JPG"
import three from"../assets/Collage/three.JPG"
import four from"../assets/Collage/four.JPG"
import five from"../assets/Collage/fice.JPG"
import hey from"../assets/Collage/hey.JPG"
import comp1 from"../assets/Collage/comp-1.jpg"
import comp2 from"../assets/Collage/comp-2.jpg"
import comp3 from"../assets/Collage/comp-3.jpg"
import comp4 from"../assets/Collage/comp-4.jpg"
import comp5 from"../assets/Collage/comp-5.jpg"
import n1 from"../assets/Collage/n1.jpg"
import n2 from"../assets/Collage/n2.jpg"
import n3 from"../assets/Collage/n3.jpg"
import n4 from"../assets/Collage/n4.jpg"
const Collage = () => {
  return (

<>
<div className="grid grid-cols-1 xl:grid-cols-5 ">
  <div className="">
    <img src={one} className="w-full h-full object-cover mx-auto" alt="img1" />
  </div>
  <div className="">
    <img src={three} className="w-full h-full object-cover" alt="img3" />
  </div>
  <div className="">
    <img src={comp1} className="w-full h-full object-cover" alt="img2" />
  </div>

  
  <div className="">
    <img src={n1} className="w-full h-full object-cover mx-auto" alt="img1" />
  </div>

  <div className="">
    <img src={comp2} className="w-full h-full object-cover" alt="img2" />
  </div>


</div>
<div className="grid grid-cols-1 xl:grid-cols-5 ">
<div className="">
    <img src={n3} className="w-full h-full object-cover" alt="img2" />
  </div>
  <div className="">
    <img src={img4} className="w-full h-full object-cover mx-auto" alt="img1" />
  </div>
  <div className="">
    <img src={n4} className="w-full h-full object-cover" alt="img3" />
  </div>
  <div className="">
    <img src={comp4} className="w-full h-full object-cover" alt="img2" />
  </div>

  <div className="">
    <img src={n2} className="w-full h-full object-cover mx-auto" alt="img1" />
  </div>

 






</div>

</>

  )
}

export default Collage