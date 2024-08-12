import React from 'react';
import Services from '../Components/Services/Services';
import Testimonials from '../Components/Testimonials/Testimonials';
import MainSection from '../Components/MainSection/MainSection';
import SecondSection from '../Components/SecondSection/SecondSection';
import Profile from '../Components/Profile/Profile';
import Approach from '../Components/Approach/Approach';
import SalesKeyMetrics from '../Components/SalesKeyMetrics/SalesKeyMetrics';
import Dashboard from '../Components/Dashboard/Dashboard';
import RevenueSection from '../Components/RevenueSection/RevenueSection';
import UpdatesSection from '../Components/UpdatesSection/UpdatesSection';


function Home() {
  return (
    <div>
      <MainSection />
      <SecondSection />
      <Profile />
      <Approach />
      <SalesKeyMetrics/>
      <Dashboard/>
      <RevenueSection/> 
      <UpdatesSection/>
      {/* <Services /> */}
      <Testimonials />
    </div>
  );
}

export default Home;
