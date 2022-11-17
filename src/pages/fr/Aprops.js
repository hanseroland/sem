import React from 'react'
import {motion } from 'framer-motion';
import BannerBread from '../../components/banner/BannerBread';

function Aprops() {

  const pageMotion = {
    initial:{opacity:0,x:0},
    animate:{opacity:1,x:100,transition:{duration:2}},
    exit:{opacity:0,x:0,transition:{duration:2}}
  }

  return (
    <>
      <BannerBread title="À propos" />
      <h1>Apropos</h1>
    </>
  )
}

export default Aprops