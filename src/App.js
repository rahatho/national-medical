import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Container, Image, Nav, Navbar, Row, Col} from "react-bootstrap";
import banner from "./assets/banner_top.jpg";
import slide1 from "./assets/car1.jpg";
import slide2 from "./assets/car2.jpg";
import slide3 from "./assets/car3.jpg";
import slide4 from "./assets/car4.jpg";
import {MDBCarousel, MDBCarouselItem, MDBCol, MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBRow, MDBSwitch} from "mdb-react-ui-kit";

function App() {
  return (
   
   <>
     <img src={banner} className='img-fluid'/>
     
     <MDBNavbar expand='lg' light bgColor='success' sticky>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
           
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
        
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink className='text-light' aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-light' href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-light' href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-light' href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer>
        <MDBRow >
          <MDBCol md="2">
            <MDBRow className='bg-success'>
              

            </MDBRow>

          </MDBCol>
          <MDBCol md="7">
          <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={slide1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={slide2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={slide3}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={slide4}
        alt='...'
      />
    </MDBCarousel>
          </MDBCol>
          <MDBCol md="3">

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      

    
        
   </>
  );
}

export default App;
