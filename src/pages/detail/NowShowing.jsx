import React from 'react'
import './nowshowing.scss'

import ozone from '../../assets/ozone.png';
import vue from '../../assets/vue.png';
import genesis from '../../assets/genesis.png';
import check from '../../assets/check.png';
import amc from '../../assets/amc.png';
import landmark from '../../assets/metro.png';
import cinemas from '../../assets/cinemas.png';

function NowShowing() {
  return (
    <div className='cinemas'>
      <img className='imagine' src={ozone} alt={'ozone'} />
      <img className='imagine' src={check} alt={'check'} />
      <img className='imagine' src={genesis} alt={'genesis'} />
      <img className='imagine' src={amc} alt={'amc'} />
      <img className='imagine' src={cinemas} alt={'galaxy'} />
      <img className='imagine' src={landmark} alt={'vox'} />
     
    </div>
  )
}

export default NowShowing