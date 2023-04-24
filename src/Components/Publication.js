import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

export default function Publication() {
  return (
    <div className='container-fluid pt-4 font'>
      <div className='row justify-content-center pt-3'>
        <div className='col-12 col-md-12 p-2 text-center'>
          <h3>Publications</h3>
        </div>
        <div className='col-12 col-md-6'>
          <div className='row justify-content-center'>
            <Card>
              <CardHeader>
                <h5>Customizable Auto Key Generated Modified (CAGM-RSA)</h5>
                <p style={{ fontWeight: "500" }}>CAGM-RSA is a Message Encyption Algorithm</p>
              </CardHeader>
              <CardBody>
                <p style={{ fontWeight: "500" }}>
                  This was our Engineering minor/final year project. It was a Group Project with
                  two more memebers.It is Published Under <span className='fw-bold'>UGC- Care Group -2 Certified Journal</span>
                </p>
                <h5>ISSN NO: 1548-7741/ web:www.joics.org</h5>
                <h6>
                  <span className='fw-bold'>Published In : </span> JOURNAL OF INFORMATION AND COMPUATTIONAL SCIENCE, VOLUME 12 ISSUE 5.
                </h6>
                <h6><span className='fw-bold'>Date : </span> May 2022</h6>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
