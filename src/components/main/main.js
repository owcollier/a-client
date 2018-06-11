import React from 'react';
import HeaderHero from '../header-hero/header-hero';
import ContentColumn from '../content-column/content-column';
import BigPhotoGrid from '../big-photo-grid/big-photo-grid';
import Footer from '../footer/footer';

export function Main(props) {
  return (
    <main className="app-main-content">
      <HeaderHero />
      <ContentColumn />
      <BigPhotoGrid />
      <Footer />
    </main>
  )
}

export default Main;