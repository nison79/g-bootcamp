import React from 'react'
//v3 new import syntax
import { Helmet } from "react-helmet";

import myFont from '../assets/fonts/GFSDidot-Regular.ttf'

import Header from './Header'
import Footer from './Footer'


import '../styles/index.scss'
import { container , content } from './layout.module.scss'



const Layout = ( { children } ) => {
  return (
    
      <div className={container}>
          <Helmet>
          <link rel="preload" href={myFont} as="fonts/ttf" crossOrigin="anonymous" type="font/ttf"></link>
          </Helmet>
            <div className={content}>
            <Header />
              {children}
            </div>
          <Footer />
      </div>
    
  )
}

export default Layout
