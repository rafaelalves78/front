import styled from 'styled-components';
export const Anuncio = styled.div`
  width: 280px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  border: 0.4px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 40px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const Title = styled.h4`
  font-family:  sans-serif;
  font-size: 18px;
  color: #4a4a4a;
  font-weight: 400;
  line-height: 20px;
`;

export const Price = styled.h5`
  font-family:  sans-serif;
  font-size: 20px;
  color: #000;
  font-weight: 700;
  line-height: 24px;

`;

export const Details = styled.p`
  opacity: 0.7;
  font-size: 0.8rem;
`;
