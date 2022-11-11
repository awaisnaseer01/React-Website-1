import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { BsFillPhoneFill} from "react-icons/bs";

 function Footer() {
  return (
    <MDBFooter bgColor='primary' className='text-center text-lg-start text-muted ft'>
      <section className='foo'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Useful links
              </h6>
              <p>
                <a href='#!' className='text-light'>
                  Contact us
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Help & About us
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Shipping & Returns
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Refund Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Customer service</h6>
              <p>
                <a href='#!' className='text-light'>
                  Oders
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Downloads
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Addresses
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Account Details
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                 Logout
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                 Lost password 
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Delivery</h6>
              <p>
                <a href='#!' className='text-light'>
                  How it Works
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Free Delivery
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Payment methods
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                  Delivery areas
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Contact Us</h6>
              <p className='text-light'>
                <MDBIcon color='secondary' icon='phone' className='me-3 ' /><BsFillPhoneFill/>  +61 (0) 383 766 284
              </p>
              <p className='text-light'>
                <MDBIcon color='secondary' icon='print' className='me-3 ' /> noreply@envato.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 last text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Betheme by Muffin group | All Rights Reserved | Powered by Wordpress
        <a className='text-reset fw-bold text-light' href='https://mdbootstrap.com/'>
          Terms and Conditions | Privacy policy | Cookies
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;