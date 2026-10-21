import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import Home from './pages/Home.jsx';
import Puppies from './pages/Puppies.jsx';
import PuppyDetail from './pages/PuppyDetail.jsx';
import GoneHome from './pages/GoneHome.jsx';
import HappyFamilies from './pages/HappyFamilies.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Faq from './pages/Faq.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/puppies/:slug" element={<PuppyDetail />} />
          <Route path="/gone-home" element={<GoneHome />} />
          <Route path="/happy-families" element={<HappyFamilies />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
