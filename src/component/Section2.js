import React from 'react'
import styled from './Section2.module.css';

function Section2() {
  return (
    <div className={styled.section__container}>
     
        <div className={styled.top}>
            <div className={styled.title}>
                <h1>$9,449,688 <strong className={styled.color__text1}>Dividends</strong></h1>
                <h3 className={styled.color__txt2}>Paid out to Hatom Token Holders over 3 years</h3>
            </div>
            <button className={styled.btn}>Buy Hatom Tokens</button>
        </div>
        <div className={styled.header}>
            <h1><strong className={styled.color__text3}>Features</strong> of Hatom Token</h1>
        </div>

        <div className={styled.wrapper__container}>
            <div className={styled.wrapper}>
                <h1>Earn</h1>
                <h3 className={styled.txt}>Stake your Hatmo tokens to earn a share of protocol's revenue</h3>
            </div>
            <div  className={styled.wrapper}>
                <h1>Supply & Borrow</h1>
                <h3 className={styled.txt}>Stake your Hatmo tokens to earn a share of protocol's revenue</h3>
            </div>
            <div  className={styled.wrapper}>
                <h1>Vote</h1>
                <h3 className={styled.txt}>Stake your Hatmo tokens to earn a share of protocol's revenue</h3>
            </div>
        </div>
           
        {/* part2 */}
    
    </div>
  )
}

export default Section2