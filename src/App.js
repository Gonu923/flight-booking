import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import SearchPanel from './components/SearchPanel';
import HotDealsGallery from './components/HotDealsGallery';
import SpecialOfferGallery from './components/SpecialOfferGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopNavigationBar />
      <div>
        <SearchPanel />
        <HotDealsGallery />
        <SpecialOfferGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
