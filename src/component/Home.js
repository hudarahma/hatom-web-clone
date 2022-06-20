import React from 'react'
import styled from './Home.module.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

function Home() {
  return (
    <div className={styled.home__container}>
        <div className={styled.title}>
            <h1 className={styled.title__1}>Hatom Token</h1>
            <h3 className={styled.title__2}>Deep dive into the heart of Hatom Protocol</h3>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
    
    </div>
    
  )
}

export default Home