import React from 'react';
import HeaderHero from '../header-hero/header-hero';
import ContentColumn from '../content-column/content-column';
import BigPhotoGrid from '../big-photo-grid/big-photo-grid';

export function Main(props) {
  return (
    <main className="app-main-content">
      <HeaderHero />
      <ContentColumn />
      <BigPhotoGrid />
    </main>
  )
}

export default Main;