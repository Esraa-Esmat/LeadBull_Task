import React from 'react'
import './Approach.css'


const Approach = () => {
    return (


        <section className="approach">

            <h2 className=' secondSectionTitle'>OUR SOLUTION APPROACH </h2>

            <div style={{ font: 'Roboto Flex', fontSize: '24px', fontWeight: '300', width: '45%' }} className=' m-auto '>
                <p className=' text-center'>By offering tailored telemarketing and digital marketing solutions that are designed to meet the unique needs of each client, Leadbull LLC</p>
                <p className=' text-center'>Technologies is able to provide unparalleled value pushing its clients to handle increased estimates.</p>
            </div>
            <div className="approach-container d-flex flex-column justify-content-around m-auto ">
                <div className="approach-item d-flex justify-content-between m-auto " style={{ width: '63%' }} >
                    <div className='bgDiamond '>
                        <div className='diamond'>
                            <div className='diamond-content'>
                                <p>Unlimited Data Centers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bgDiamond '>
                        <div className='diamond'>
                            <div className='diamond-content'>
                                <p>Consistent Sales</p>
                            </div>
                        </div>
                    </div>                </div>
                <div className="approach-item d-flex justify-content-between m-auto" style={{ width: '75%' }}>
                    <div className='bgDiamond '>
                        <div className='diamond'>
                            <div className='diamond-content'>
                                <p>Targeted Servers</p>

                            </div>
                        </div>
                    </div>
                    <div className='bgDiamond '>
                        <div className='diamond'>
                            <div className='diamond-content'>
                                <p>24/7 Support Channels
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="approach-item d-flex justify-content-between m-auto " style={{ width: '63%' }} >
                    <div className='bgDiamond '>
                        <div className='diamond'>
                            <div className='diamond-content'>
                                <p>Lead Handling</p>
                            </div>
                        </div>
                    </div>
                    <div className='bgDiamond '>
                        <div className='diamond'>
                            <div className='diamond-content'>
                                <p className='mb-0'>Compliance</p>
                                <p>(Privacy & Regulations)</p>
                            </div>                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Approach