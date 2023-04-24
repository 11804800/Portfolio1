import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardText } from 'reactstrap'

export default function Upcoming() {
  return (
    <div className='container-fluid pt-4 pb-5 font'>
      <div className='row justify-content-center pt-3'>
        <div className='col-12 col-md-12 p-2 text-center'>
          <h3>Upcoming</h3>
        </div>
        <div className='col-12 col-md-4'>
          <div className='row justify-content-center'>
            <Card className='p-2'>
              <CardHeader>
                <h6>Movie Recomendation React App</h6>
              </CardHeader>
              <CardBody>
                <h6>Summary</h6>
                <CardText style={{ fontWeight: "500" }}>
                  This Project will be developed on React and Bootstrap5
                  .it will be a full-stack project where user will be able to
                  add movies to favourite , Watchlist and reveiw them.
                </CardText>
              </CardBody>
              <CardFooter>
                <CardText>Expected Date: 26 May 2023</CardText>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
