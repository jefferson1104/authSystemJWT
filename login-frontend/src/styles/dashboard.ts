import styled from 'styled-components';

import backgroundImg from '../../public/images/background-02.jpg';

export const DashboardPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(to right, rgba(0,0, 0, .75), rgba(0,0, 0, .75)), url(${backgroundImg});
  background-size: cover;
  height: 100vh;
  padding: 2rem;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to right, rgba(255,255, 255, .35), rgba(255,255, 255, .35));
    border-radius: .5rem;
    max-width: 960px;
    padding: 4rem;
    
    h1 {
      color: #FFFFFF;
      font-size: 4rem;
      font-weight: 900;

      border-bottom: 1px solid #FFF;
    }

    h2 {
      color: #FFFFFF;
      font-size: 2rem;
      margin-top: 2rem;
    }

    p {
      margin-top: 1.25rem;
      color: #FFFFFF;
      font-weight: 600;
    }

    button {
      margin-top: 2rem;
      height: 2.25rem;
      width: 100%;
      border: 0;
      border-radius: .5rem;

      background: #e74c3c;
      color: #FFFFFF;

      font-size: 1.25rem;
      font-weight: 700;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

`;