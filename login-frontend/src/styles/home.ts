import styled from 'styled-components';

import backgroundImg from '../../public/images/background-01.jpg';

export const SignInPage = styled.section`
  background-image: linear-gradient(to right, rgba(0,0, 0, .35), rgba(0,0, 0, .35)), url(${backgroundImg});
  background-size: cover;
  height: 100vh;

  display: flex;
  justify-content: end;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(to left, rgba(255,255, 255, .20), rgba(255,255, 255, .20));
  background-size: cover;

  width: 40%;
  height: 100vh;
  padding: 4rem; 

  border-left: 1px solid #FFFFFF;

  h1 {
      font-weight: 700;
      font-size: 4rem;
      color: #FFFFFF;
      margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div + div {
      margin-top: 2rem;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: #FFFFFF;
        font-size: 2.25rem;
        margin-right: .5rem;
      }

      input {
        background: transparent;
        color: #FFFFFF;

        height: 2.25rem;
        border: 0;
        padding: 1rem;

        border-bottom: 1px solid #FFFFFF;
      }
    }
  
    button {
      margin-top: 2rem;
      height: 2.25rem;
      width: 100%;
      border: 0;
      border-radius: .5rem;

      background: #3498db;
      color: #FFFFFF;

      font-size: 1.25rem;
      font-weight: 700;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }


    span {
      p {
        margin-top: 2rem;
        padding: 0.2rem 1rem;

        font-weight: 500;
        font-size: 1.25rem;

        color: #e74c3c;
        background: linear-gradient(to left, rgba(255,255, 255, .65), rgba(255,255, 255, .65));
        border-radius: .5rem;
      }
    }

  }

  @media (max-width: 768px) {
    width: 100%;
    border: 0;
    padding: 0;
  }
`;