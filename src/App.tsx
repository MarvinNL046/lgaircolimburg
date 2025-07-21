import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ServiceAreaPage from './pages/service-area';
import CityPage from './pages/city';
import WebhookTestPage from './pages/webhook-test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/werkgebied" element={<ServiceAreaPage />} />
      <Route path="/werkgebied/:city" element={<CityPage />} />
      <Route path="/webhook-test" element={<WebhookTestPage />} />
    </Routes>
  );
}

export default App;