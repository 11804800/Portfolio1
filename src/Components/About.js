import React, { useState } from 'react'
import '../App.css';
import { SKILLS } from '../Shared/Skills';
export default function About() {
  const [skill, setSKill] = useState(SKILLS);
  return (
    <div className='container-fluid pt-5 pb-5 about font'>
      <div className='row justify-content-center pb-5 pt-5'>
        <div className='col-10 col-md-10 text-center'>
          <h1 className='font head'>About</h1>
        </div>
        <div className='text-center col-12 col-md-6 pt-5'>
          <img src={"https://eccomerce-tazon.onrender.com/images/Profilebg.png"} alt="profile" className='image-about' />
        </div>
        <div className='col-12 col-md-6 pt-5 p-2 m-auto'>
          <h4>Hello I'm</h4>
          <h1>Nikhil Pathak</h1>
          <p className='paragraph'>
            I've Completed My B.tech in Computer Science Engineering from
            <span className='bold'> Lovely Professional Univeristy</span> Phagwara Punjab in 2022.
          </p>
        </div>
        <div className='col-12 col-md-12 pt-4 text-center'>
          <h5>Qualifications</h5>
        </div>
        <div style={{ display: "flex" }} className='pt-5 pb-5 block'>
          <div className='col-11 col-md-4 p-2'>
            <div className='card p-3'>
              <h6>2015-2016</h6>
              <h5>10th Board MpBSE</h5>
              <h6>Spring Dale's Higher Secondry School</h6>
              <h7 style={{ fontWeight: "500" }}>Shahdol, Madhya Pradesh</h7>
            </div>
          </div>
          <div className='col-11 col-md-4 p-2'>
            <div className='card p-3'>
              <h6>2017-2018</h6>
              <h5>12th Board MpBSE</h5>
              <h6>Science</h6>
              <h6>Spring Dale's Higher Secondry School</h6>
              <h7 style={{ fontWeight: "500" }}>Shahdol, Madhya Pradesh</h7>
            </div>
          </div>
          <div className='col-11 col-md-4 p-2'>
            <div className='card p-3'>
              <h6>2018-2022</h6>
              <h5>Bachelors of Technology</h5>
              <h6>Computer Science Engineering</h6>
              <h6>Lovely Professional University</h6>
              <h7 style={{ fontWeight: "500" }}>Phagwara, Punjab</h7>
            </div>
          </div>
        </div>
        <div className='col-11 col-md-11 pt-5 p-2 text-center'>
          <h3 className=' headline'>Skills</h3>
        </div>
        <div className='row justify-content-center'>
          {
            skill.filter((item) => item.category === "Technical").map((item) => {
              return (
                <div className='col-12 col-md-3 p-2 center'>
                  <div style={{ display: "flex" }} className='card p-3'>
                    <div style={{ display: "flex" }}>
                      <img src={item.image} alt={item.name} className='about-skill' />
                      <div className='text-left'>
                        <h5>{item.name}</h5>
                        <h6>{item.level}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* <div className='col-11 col-md-10 p-2 pt-5 pb-5'>
          <div style={{ display: "flex" }} className="block1">
          <h4 className='m-auto'>Soft-Skill :</h4>
            {
              skill.filter((item) => item.category === "professional").map((item) => {
                return (
                  <div className='m-auto skill-card'>
                    <div>
                      <h5>{item.name}</h5>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div> */}
      </div>
    </div>
  )
}
