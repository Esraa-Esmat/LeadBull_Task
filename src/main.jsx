import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../public/bg-Dqr0jkUu.mp4';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app-container">
      <video autoPlay loop muted playsInline className="app-video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="app-content">
        <App />
      </div>
    </div>
  </StrictMode>,
);
