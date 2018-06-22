import React from 'react';
import HeaderHero from '../header-hero/header-hero';
import ContentColumn from '../content-column/content-column';

export function Main(props) {
  return (
    <main className="app-main-content">
      <HeaderHero />
      <ContentColumn />
    </main>
  )
}

export default Main;