import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../assets/images/logo.png'

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted m-auto'>


      <section className=' pt-4 text-white'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="5" className='mx-auto text-start mb-4'>
              <div className='logoDiv'>

                <img src={logo} alt="logo" />

                <p className='mt-4'>
                  Leadbull stays current with the market trends aiming not only to thrive But also to enhance in such a rapidly evolving digital age, and to keep up its telemarketing services with the client’s expectations worldwide.
                </p>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="4" xl="3" className='mx-auto text-start mb-4'>
              <h5 className='mb-4 mb-3text-uppercase fw-bold mb-4'>Quick Links</h5>
              <p>
                Home
              </p>
              <p>
                About Us
              </p>
              <p>
                Services
              </p>
              <p>
                Support
              </p>
              <p>Contact Us</p>
            </MDBCol>

            <MDBCol md="4" lg="4" xl="3" className='mx-auto text-start mb-md-0 mb-4'>
              <h5 className='mb-4 mb-3text-uppercase fw-bold mb-4'>Contact Info</h5>
              <p>
                <MDBIcon icon="location-dot" className="me-3" />
                131 Continental Dr, Suite 305, Newark, DE 19713              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Sales@Leadbull.net              </p>
              <p>
                <MDBIcon icon="phone" className="me-2" /> +1 484 857 2782
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white container d-flex justify-content-between'>
        <p>
        <MDBIcon icon="skype" className="me-2" />
          live:.cid.b503d7750b5e4c7b
        </p>
        <p>
          ©
          <a className='text-reset fw-bold mx-1' href='https://www.leadbull.net/'>
            Lead Bull
          </a>
          – All Rights Reserved
        </p>
      </div>
    </MDBFooter>
  );
}

