import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LineChart from './LineChart';
import BarChart from './BarChart';
import InfoCard from './InfoCard'; // Reusable Card Component
import CustomTable from './CustomTable';
import Numbers from './Numbers';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboardContainer container mt-4">
      <Row className="d-flex">
        <Col lg={6} xs={12} className="mb-4 d-flex">
          <InfoCard title="New Sales (Last 12 Hours)" className="flex-fill">
            <LineChart />
          </InfoCard>
        </Col>
        <Col lg={6} xs={12} className="mb-4 d-flex">
          <InfoCard title="CAMPAIGN MONITOR - NEW ACTIVE LEADS (LAST 24 HOURS)" className="flex-fill">
            <div className='h-100 d-flex align-items-center justify-content-center'>
              <Numbers />
            </div>
          </InfoCard>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col lg={6} xs={12} className="mb-4 d-flex">
          <InfoCard title="EX: HVAC LIVE CAMPAIGN MONITOR STATS – December 2023" className="flex-fill d-flex align-items-center justify-content-center">
            <div className='h-100 d-flex align-items-center justify-content-center'>
              <CustomTable />
            </div>
          </InfoCard>
        </Col>
        <Col lg={6} xs={12} className="mb-4 d-flex">
          <InfoCard title="Campaign Monitor Leads Stats Graph" className="flex-fill">
            <BarChart />
          </InfoCard>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
