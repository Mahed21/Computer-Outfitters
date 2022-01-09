import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import Particles from "react-tsparticles";

const Header = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
       // console.log(container);
      }
    return (
        <div className='background'>
          {/* particle */}
          <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    <div className='first-head'>
    <div className='container '>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-6'>
                    <p className='text pt-2'><i class="fas fa-clock"></i> Its Friday, 3:00pm & We are Open Till 6.00pm</p>

                </div>
                <div className='col-lg-3 col-md-3 col-3'>
                    <p className='text pt-2'><i class="fas fa-calendar-alt"></i> Schedule a Service</p>

                </div>
                <div className='col-lg-3 col-md-3 col-3'>
                    <p className='text pt-2'><i class="fas fa-align-justify"></i> Request a Quote</p>

                </div>

                

            </div>
       
    </div>
    </div>
          {/* particle end */}
     
           <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="HOME" id="collasible-nav-dropdown" className='ankor'>
                        <NavDropdown.Item   href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item   href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="SERVICES" id="collasible-nav-dropdown" className='ankor'>
                        <NavDropdown.Item   href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item   href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="NEWS" id="collasible-nav-dropdown" className='ankor'>
                        <NavDropdown.Item   href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item   href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="PAGES" id="collasible-nav-dropdown" className='ankor'>
                        <NavDropdown.Item   href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item   href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link" className='ankor'>CONTACT</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#features" className='ankor'>Login</Nav.Link>
                    <Nav.Link href="#pricing" className='ankor'>Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;