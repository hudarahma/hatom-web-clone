import { Button } from '@mui/material';
import React from 'react'
import styled from './Section3.module.css';


function Section3() {
  return (
    <div className={styled.section__container}>
    
        <div className={styled.header}>
            <h1>Understanding Hatom</h1>
        </div>
        <div className={styled.wrapper}>
            <div className={styled.wrapper__box}>
                <div className={styled.box}></div>
                <h3 className={styled.title}>Get Hatom</h3>
                <h3 className={styled.content}>Buy Hatom tokens and take part of a growing ecosystem.</h3>
                <Button href="#text-buttons">Learn more</Button>
            </div>
            <div className={styled.wrapper__box}>
                <div className={styled.box}></div>
                <h3 className={styled.title}>Get Hatom</h3>
                <h3 className={styled.content}>Buy Hatom tokens and take part of a growing ecosystem.</h3>
                <Button href="#text-buttons">Learn more</Button>
            </div>
            <div className={styled.wrapper__box}>
                <div className={styled.box}></div>
                <h3 className={styled.title}>Get Hatom</h3>
                <h3 className={styled.content}>Buy Hatom tokens and take part of a growing ecosystem.</h3>
                <Button href="#text-buttons">Learn more</Button>
            </div>


        </div>
        
    </div>
  )
}

export default Section3