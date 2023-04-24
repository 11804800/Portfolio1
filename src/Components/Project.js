import React, { useState } from 'react'
import { PROJECTS } from '../Shared/Projects'
import { ModalBody, Modal, ModalHeader, ModalFooter } from 'reactstrap';
export default function Project() {
  const [project, setProject] = useState(PROJECTS);
  const [id, setId] = useState(0);
  const [active, setActive] = useState(false);
  const toogle = (id) => {
    return (
      setId(id),
      setActive(!active)
    )
  }
  return (
    <div className='container-fluid pt-4'>
      <div className='row justify-content-center pt-3'>
        <div className='col-12 col-md-12 p-2 text-center'>
          <h3>Projects</h3>
        </div>
        {
          project.map((item) => {
            return (
              <div className='col-12 col-md-4 p-3 project-card'>
                <div onClick={() => toogle(item.id)}>
                  <img src={item.image} alt={item.name} className='cert-image' />
                  <h6 className='text-center above'>Veiw</h6>
                </div>
                <div className='pt-2 pl-2'>
                  <a className='btn1' href={item.git}>Github</a>
                  <a className='btn2' href={item.link}>Visit</a>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        {
          project.filter((item) => item.id === id).map((item) => {
            return (
              < Modal isOpen={active}>
                <ModalHeader toggle={toogle}>
                  <h5>{item.name}</h5>
                </ModalHeader>
                <ModalBody>
                  <img src={item.image} alt={item.name} className='cert-image' />
                </ModalBody>
                <ModalFooter>
                  <div className='row justify-content-center'>
                    <div className='col-12 col-md-12'>
                      <h7 style={{ fontWeight: "500" }}>{item.describe}</h7>
                    </div>
                    <div className='col-12 col-md-6 pt-4'>
                      <a className='link-btn1' href={item.git}>Github</a>
                      <a className='link-btn' href={item.link}>Visit</a>
                    </div>
                    <div className='pt-4 col-12 col-md-6'>
                      <p style={{ fontWeight: "500" }}>Date: {item.date}</p>
                    </div>
                  </div>
                </ModalFooter>
                <ModalFooter>
                  <div>
                    <h7 style={{fontWeight:"500"}}>Tools Used: {item.tools}</h7>
                  </div>
                </ModalFooter>
              </Modal>
            )
          })
        }
      </div>
    </div>
  )
}
