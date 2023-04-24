import React from 'react'

export default function Home() {
  return (
    <div className='container pt-5 pb-5'>
      <div className='row justify-content-center pt-5 pb-5'>
        <div className='text-center col-12 col-md-6'>
          <img src={"https://eccomerce-tazon.onrender.com/images/Undrawport.png"} alt="Home" className='image-home' />
        </div>
        <div className='col-12 col-md-6 m-auto'>
          <h2 className='font'>Hi I'm</h2>
          <h1 className='name'>Nikhil Pathak</h1>
          <p className='introduction'>
            I'm a FullStack / Front-end / Backend Developer
            I've Expertise in React, Nextjs, Nodejs ,Html ,Css, JavaScript, Sass, Git, MongoDB,
            Figma, Java, Sql, Selenium.
          </p>
          <div style={{ display: "flex" }}>
            <div className='p-2'>
              <a className='social-btn' href="https://instagram.com/lucifer60_2">
                Instgram
              </a>
            </div>
            <div className='p-2'>
              <a className='social-btn' href='https://linkedin.com/nikhil-pathak-28760b17b/'>
                Linkedin
              </a>
            </div>
            <div className='p-2'>
              <a className='social-btn' href="https://github.com/11804800">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
