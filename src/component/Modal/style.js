import styled from 'styled-components';

export const ModalOver = styled.div`
 background-color: rgba(187, 187, 187, 0.356);
    width: 650px;
    min-height: 350px;


    /* alinha o grig no meio*/
    margin: 45px auto;

    /* grid dividindo no meio*/
    display: grid;
    grid-template-columns:  40%  60% ;

    /*sombra*/
    box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.973);

    /* animation
    animation-name: up 200ms ease-out; */

    /* @media (max-width: 450px) {
      width: 80%;
      font-size: 15px;
    } */
    
`;

export const Photo = styled.section`

  > img {
      width: 100%;
      height: 100%;
    
    }
`;

export const Details = styled.section`
  padding: 20px;
`;

export const Title = styled.h4`
  font-family: 'nunito', sans-serif;
  font-size: 18px;
  color: #4a4a4a;
  font-weight: 400;
  line-height: 20px;
  padding: 10px;
`;

export const Price = styled.h5`
  font-family: 'nunito', sans-serif;
  font-size: 20px;
  color: #000;
  font-weight: 700;
  line-height: 5px;
  padding: 10px;

`;

export const Description = styled.h3`
  padding: 10px;
  font-family: 'nunito', sans-serif;
  font-size: 14px;
  color: #777;
  line-height: 20px;
  letter-spacing: 1px;
  font-weight: normal;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  >span {
    padding: 8px 16px;
    background-color: #F7DF1E;
    border-radius: 16px;
    color: #777;
    margin-right: 4px;
    margin-top: 8px;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
  }

  >p{
    opacity: 0.8;
    font-size: 0.9em;
  }

`;

export const BtnClose = styled.button`
  padding: 8px 32px;
  background-color:  rgba(76, 224, 250, 0.685);;
  color: white;
  border-radius: 10px;
  margin-top: 18px;
  width: 50%;
  font-size: 16px;
  float: right;
`;