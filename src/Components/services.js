import React from 'react'

const services = () => {
  return (
    <div>
      <div className='our-services'>
        <h1 className='heading'>Our Services</h1>
        <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        <div className='cards4'>
          <div className='os-1'>
            <img  alt="os-1" />
            <h4>Digital Marketing</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
            <button className='learn-more2'>Learn More</button>
          </div>
          <div className='os-2'>
            <img  alt="os-2" />
            <h4>Janelle Brandon</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
            <button className='learn-more2'>Learn More</button>
          </div>
          <div className='os-3'>
            <img  alt="os-3" />
            <h4>Eric Kelly</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
            <button className='learn-more2'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
