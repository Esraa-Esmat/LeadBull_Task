import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../assets/images/logo.png';
import './Footer.css'

export default function Footer() {
  return (
    <MDBFooter className=' text-lg-start text-sm-center text-muted m-auto'>
      <section className='pt-4 text-white'>
        <MDBContainer className=' text-md-start text-sm-center mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol xs="12"  md="5" xl="5" className='mx-auto text-lg-start text-sm-center mb-4'>
              <div className='logoDiv '>
                <img src={logo} alt="logo" className="img-fluid" />
                <p className='mt-4'>
                  Leadbull stays current with the market trends aiming not only to thrive but also to enhance in such a rapidly evolving digital age, and to keep up its telemarketing services with the client’s expectations worldwide.
                </p>
              </div>
            </MDBCol>

            <MDBCol xs="12"  md="3" xl="3" className='mx-auto text-lg-start text-sm-center mb-4'>
              <h5 className='mb-4 text-uppercase fw-bold'>Quick Links</h5>
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Support</p>
              <p>Contact Us</p>
            </MDBCol>

            <MDBCol xs="12"  md="3" xl="3" className='mx-auto text-lg-start text-sm-center mb-md-0 mb-4'>
              <h5 className='mb-4 text-uppercase fw-bold'>Contact Info</h5>
              <p>
                <MDBIcon icon="location-dot" className="me-xl-3 me-md-2" />
                131 Continental Dr, Suite 305, Newark, DE 19713
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-xl-3 me-md-0" />
                Sales@Leadbull.net
              </p>
              <p>
                <MDBIcon icon="phone" className="me-xl-2 me-md-1" /> +1 484 857 2782
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center copyRightsFooter p-md-0 p-xl-4 text-white container d-flex  flex-wrap'>
        <p>
          <MDBIcon icon="skype" className="me-2" />
          live:.cid.b503d7750b5e4c7b
        </p>
        <p className="mt-2 mt-md-0">
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
