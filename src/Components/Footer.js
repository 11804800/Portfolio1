import React from 'react';
import '../App.css'
import { Form, Input, Row, Col, Label, Button } from 'reactstrap';
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    const ScrollHome = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    const ScrollAbout=()=>{
        window.scrollTo({top:700,left:0,behavior:"smooth"})
    }
    const ScrollSkills=()=>{
        window.scrollTo({top:1500,left:0,behavior:"smooth"})
    }
    const ScrollPublic=()=>{
        window.scrollTo({top:2900,left:0,behavior:"smooth"})
    }
    const ScrollCert=()=>{
        window.scrollTo({top:2300,left:0,behavior:"smooth"})
    }
    const ScrollProject=()=>{
        window.scrollTo({top:3500,left:0,behavior:"smooth"})
    }
    return (
        <React.Fragment>
            <div className=" footer font">
                <div className="container-fluid p-4">
                    <div className="row justify-content-center p-2">
                        <div className="col-12 col-md-4 pt-3 text-center">
                            <img src={"https://eccomerce-tazon.onrender.com/images/last.png"} alt="footer" width="230" />
                            <h3>Portfolio</h3>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className='p-3'>
                                    <a href='https://linkedin.com/nikhilpathak' className='on'>Linkedin</a>
                                </div>
                                <div className='p-3'>
                                    <a href="https://github.com/11804800" className='on'>Github</a>
                                </div>
                                <div className='p-3'>
                                    <a href="https://instagram.com/lucifer60_2" className='on'>Instagram</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-2 pt-4'>
                            <h3>Quick Links</h3>
                            <ul className='list-unstyled' style={{ fontWeight: "500" }}>
                                <li onClick={ScrollHome}>
                                    Home</li>
                                <li onClick={ScrollAbout}>About</li>
                                <li onClick={ScrollSkills}>Skill</li>
                                <li onClick={ScrollCert}>Certification</li>
                                <li onClick={ScrollPublic}>Publication</li>
                                <li onClick={ScrollProject}>Project</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-2 border-right pt-4 border-left">
                            <div className="pl-4">
                                <h2 className="skill-heading">Address</h2>
                                <ul className="list-unstyled" style={{ fontWeight: '500' }}>
                                    <li className="pt-2">
                                        <span className="fa fa-phone fa-lg pt-3 pr-1"></span> +91-8417814745, 7024560733
                                    </li>
                                    <li className="pt-2">
                                        <span className="fa fa-envelope fa-lg pt-3 pr-2"></span> Nikhilpathak2602@gmail.com
                                    </li>
                                    <li className="pt-2">
                                        <span className="fa fa-map-marker fa-lg pt-3 pr-3"></span> Shahdol, Madhya-Pradesh
                                    </li>
                                    <li>
                                        <div className="pt-4">
                                            <a href="#sanjaypathak2707@gmail.com" className="fa fa-google-plus fa-lg pr-3" id="gamil"></a>
                                            <a href="https://www.instagram.com/lucifer60_2/" className="fa fa-instagram fa-lg pr-3" id="2"></a>

                                            <a href="https://www.linkedin.com/in/nikhil-pathak-28760b17b/" className="fa fa-linkedin fa-lg pr-3" id="3"></a>

                                            <a href="#" className="fa fa-twitter fa-lg" id="4"></a>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 pt-3  pl-5 font">
                            <h2 className="skill-heading">Contact Me</h2>
                            <Form action="https://formspree.io/f/xnqypnnv" method="POST">
                                <Row className="form-group">
                                    <Label htmlFor="name" md={3}>Your Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="username" name="username"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={3}>Your Email</Label>
                                    <Col md={10}>
                                        <Input type="text" id="username" name="username"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="Name" md={3}>Message</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="username" name="username"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group pt-3">
                                    <Col md={{ size: 10 }}>
                                        <Button type="submit" value="submit" style={{ background: "rgb(13, 153, 255)", fontWeight: "500" }}>SEND</Button>
                                    </Col>
                                </Row>

                            </Form>
                        </div>
                    </div>
                    <div className="row justify-content-center p-2">
                        <div className="col-auto">
                            <h6 className='font'>Copyright @{year} <span>Nikhil Pathak</span>. All right reserved</h6>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}
