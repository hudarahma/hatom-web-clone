import React from 'react'
import styled from './Section1.module.css'

function Section1() {
  return (
    <div className={styled.section__container}>
    
        {/* background */}
        <img className={styled.bg} src='/assets-per-section/section 1/bg.svg' alt='bg-img'/>
        {/* coin */}
            {/* <img className={styled.coin} src='/assets-per-section/section 1/coin-hatom.jpg' alt='coin-img' /> */}
        {/* Studio animation ( */}
        {/* machine */}
        {/* people */}
        <img className={styled.people} src='/assets-per-section/section 1/people.svg' alt='people-img' />
    
    </div>
  )
}

export default Section1