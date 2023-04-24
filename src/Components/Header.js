import '../App.css';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { useState } from 'react';

export default function Header() {
    const [state, setState] = useState(false);
    const ScrollAbout=()=>{
        window.scrollTo({top:700,left:0,behavior:"smooth"})
    }
    const ScrollHome=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
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
    const ScrollContact=()=>{
        window.scrollTo({top:10000,left:0,behavior:"smooth"})
    }
    return (
        <div>
            <Navbar expand="md">
                <NavbarToggler onClick={() => setState(!state)} className='bg-dark'>
                </NavbarToggler>
                <Collapse navbar isOpen={state}>
                    <Nav navbar className='m-auto'>
                        <NavItem className='nav' onClick={ScrollHome}>
                            Home
                        </NavItem>
                        <NavItem className='nav' onClick={ScrollAbout}>
                            About
                        </NavItem>
                        <NavItem className='nav' onClick={ScrollSkills}>
                            Skills
                        </NavItem>
                        <NavItem className='nav' onClick={ScrollCert}>
                            Certification
                        </NavItem>
                        <NavItem className='nav' onClick={ScrollPublic}>
                            Publication
                        </NavItem>
                        <NavItem className='nav' onClick={ScrollProject}>
                            Projects
                        </NavItem>
                        <NavItem className='nav' onClick={ScrollContact}>
                            Upcomming
                        </NavItem>
                        <NavItem className='nav' onClick={ScrollContact}>
                            Contact Me
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}