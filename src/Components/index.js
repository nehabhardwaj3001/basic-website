import React from 'react'

const index = () => {
  return (
    <div className='index'>

      <div className='trusted-brands'>
        <h1 className='heading'>Trusted Brands</h1>
        <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
        <div className='cards5'>
          <div className='tb-1'>
            <h1>Start Growing Today</h1>
            <p>Sed fermentum, feils ut cursus varius, purus velit.</p>
          </div>
          <div className='tb-2'>
            <p>Want to learn more?</p>
            <button className='download-now'>Download Now→</button>
          </div>
        </div>
      </div>

      <div className='latest-news'>
        <h1 className='heading'>Latest News</h1>
        <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
        <div className='cards6'>
          <div className='ln-1'>
            <img  alt="ln-1" />
            <p className='blue'>ADVICE</p>
            <p>Prepping For Client Work And Meetings</p>
          </div>
          <div className='ln-2'>
            <img  alt="ln-2" />
            <p className='blue'>OPINION</p>            
            <p>Just Some Light Reading Material</p>
          </div>
          <div className='ln-3'>
            <img  alt="ln-3" />
            <p className='blue'>NEWS</p>            
            <p>Becoming An Expert In Your Field</p>
          </div>
        </div>
        <button className='blog-btn'>Read the blog</button>
      </div>

      <div className='subscribe'>
        <div className='s-1'><h1 className='heading'>Subscribe</h1></div>
          <div className='s-2'>
          <p className='light'>Semoer lacus cursus porta, feyght primi uttrice risus auctor. </p>
          </div>
          <div className='s-3'>
          <input className='input-mail' placeholder='Enter your mail'/>
          <button className='signup-btn'>Signup</button>
          </div>
      </div>

    </div>
  )
}

export default index
