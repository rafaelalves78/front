import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  position: relative;
  left: 50%;
  margin-top: 25px;
  transform: translate(-50%);
  background-color: rgb(255, 255, 255);
  padding: 30px 56px;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(153, 153, 153, 0.2);

  >h2{
    text-align: center;
    margin-top: 30px;
  }

  >form{
    width: 400px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    input{
      width: 100%;
      padding: 10px 10px 10px 16px;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 16px;
      border: 0.8px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 15px;
      outline: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    textarea{
      width: 100%;
      height: 150px;
      padding: 10px 10px 10px 16px;
      box-sizing: border-box;
      border-radius: 10px;
      font-size: 16px;
      border: 0.8px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 15px;
      outline: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
   
    input[type="file"] {
      width: 100%;
      padding: 0px;
      border-radius: 0;
      border: none;
      margin-bottom: 15px;
      outline: none;
      box-shadow: none;
    }

    >img{
      width: 100px;
      height: 150px;
      margin-bottom: 15px;
    }

    >h4{
      font-weight: 500;
      margin: 0;
      margin-bottom: 20px;
    }

    >button{
      width: 100%;
      padding: 8px;
      border-radius: 30px;
      border: 0;
      text-align: center;
      color: white;
      background-color: rgb(247, 131, 35);
      line-height: 24px;
      font-size: 16px;
      height: 35px;
      margin-top: 0px;
      font-family: "";
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      padding: 0px 8px;
      cursor: pointer;
    }

  }

  
 
`;