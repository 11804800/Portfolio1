import React, { useState } from 'react'
import { CERTIFICATE } from '../Shared/certification';
import { Collapse, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



export default function Certificate() {


  const [certificate, setCert] = useState(CERTIFICATE);
  const [id, setId] = useState(0);
  const [active, setActive] = useState(false);
  const toogle = (id) => {
    return (
      setId(id),
      setActive(!active)
    )
  }

  return (
    <div className='container p-2'>
      <div className='row justify-content'>
        <div className='col-12 col-md-12 p-2 text-center'>
          <h3>Certificates</h3>
        </div>
        {
          certificate.map((item) => {
            return (
              <div className='col-12 col-md-4 p-3'>
                <div onClick={() => toogle(item.id)}>
                  <img src={item.image} alt={item.name} className='cert-image' />
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        {
          certificate.filter((item) => item.id === id).map((item) => {
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
                    <div className='col-12 col-md-10'>
                      <h7 style={{fontWeight:"500"}}>{item.describe}</h7>
                    </div>
                    <div className='col-12 col-md-2' style={{fontWeight:"600"}}>
                      <h7>{item.tutor}</h7>
                    </div>
                    <div className='pt-4 col-12 col-md-6'>
                      <p style={{fontWeight:"500"}}>Date: {item.date}</p>
                    </div>
                    <div className='pt-4 col-12 col-md-6'>
                      {
                        item.teacher ? <p>Teacher : {item.teacher}</p>:""
                      }
                    </div>
                  </div>
                </ModalFooter>
              </Modal>
            )
          })
        }
      </div>
    </div >
  )
}
