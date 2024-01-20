import React from 'react'
import img1 from '../../assets/images/1.webp'
import img2 from '../../assets/images/2.webp'
import img3 from '../../assets/images/3.webp'
import img4 from '../../assets/images/4.webp'
import img5 from '../../assets/images/5.webp'
import img6 from '../../assets/images/6.webp'
import img7 from '../../assets/images/7.webp'

const roadmapData = {}

roadmapData.first = [
  {
    id: 1,
    img: img1,
    name: 'Creation',
    text: (
      <p>
        Liquid Invest created LQINV and has put it on{' '}
        <a href='https://etherscan.io/address/0xfcC16F9CAb16ec0D0586E5c0DC96AfdE9f7814b'>
          Uniswap V3
        </a>
        .
      </p>
    ),
  },
  {
    id: 2,
    img: img2,
    name: 'Build',
    text: (
      <p>
        As LQINV sells, a Staking protocol will be built. 10% of Eth/LQINV will
        be put in Uniswap V2 to ensure liquidity.
      </p>
    ),
  },
  {
    id: 3,
    img: img3,
    name: 'Formation',
    text: (
      <p>
        Using the proceeds staked, a LLP company will be formed, with holders as
        Limited Partners, and the LI team as the Managing partner
      </p>
    ),
  },
  {
    id: 4,
    img: img4,
    name: 'Growth',
    text: (
      <p>
        The LLP will retain enough of the revenues to ensure liquidity and
        growth
      </p>
    ),
  },
]

roadmapData.sec = [
  {
    id: 5,
    img: img5,
    name: 'Stability',
    text: (
      <p>
        Once the LLP has enough in savings for proper functioning and growth,
        Distributions will begin to Limited Partners. LiquidInvest will
        distribute profits unless conditions require additional capitalization.
      </p>
    ),
  },
  {
    id: 6,
    img: img6,
    name: 'Repurchase',
    text: (
      <p>
        Anytime after step 3, the distributions of the Managing partners may be
        used to repurchase LQINV and burn the tokens.
      </p>
    ),
  },
  {
    id: 7,
    img: img7,
    name: 'Formation',
    text: (
      <p>
        Two exit paths exist- either the LQINV ecosystem sells as a whole,
        distributing 75% to the holders and 25% to the Managing team, or the
        Managing team buys all of the tokens and owns the LLP entirely
      </p>
    ),
  },
]

export default roadmapData
