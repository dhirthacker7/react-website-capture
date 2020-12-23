import React from 'react';
// Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
// Styled
import styled from 'styled-components';
// Styles 
import {
  StyledAbout,
  StyledDescription,
  StyledImage
} from '../styles';

const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>High <span>quality</span> services</h2>
        <StyledCards>
          <StyledCard>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>lorem ipsem dolor sit amet</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </div>
            <p>lorem ipsem dolor sit amet</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={diaphragm} alt='icon' />
              <h3>Diapraghm</h3>
            </div>
            <p>lorem ipsem dolor sit amet</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={money} alt='icon' />
              <h3>Affordable</h3>
            </div>
            <p>lorem ipsem dolor sit amet</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt='camera' />
      </StyledImage>
    </StyledServices>
  )
}

const StyledServices = styled(StyledAbout)`
  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 5rem 10rem;
  h2 {
    padding-bottom: 5rem;
  }

  p {
    /* width: 70%; */
    padding: 2rem 0rem 4rem 0rem;
  }
`

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledCard = styled.div`
  flex-basis: 17rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`



export default ServicesSection;