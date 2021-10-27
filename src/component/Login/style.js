import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  position: relative;
  left: 50%;
  margin-top: 15px;
  transform: translate(-50%);
  background-color: rgb(255, 255, 255);
  padding: 30px 56px;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(153, 153, 153, 0.2);
  
  >div{
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    height: 40%;
    >img{

      width: 15rem;
    }
    
    
  }
  >h2{
    text-align: center;
    margin-bottom: 30px;
    color: #4A4A4A;
  }
  
  
  >p{
    margin: 0px;
    line-height: 25px;
    color: #4A4A4A;
  }

  >form{
    width: 100%;

    input{
    width: 100%;
    padding: 10px 20px;
    outline: none;
    box-sizing: border-box;
    margin-top: 5px;
    position: relative;
    border-style: solid;
    border-radius: 10px;
    padding-top: 11px;
    padding-bottom: 12px;
    color:rgb(74, 74, 74);
    font-family:  sans-serif;
    border: 0.8px solid rgba(0, 0, 0, 0.438);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    }

    >button {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border: none;
    color: white;
    background-color: rgb(247, 131, 35);
    line-height: 24px;
    font-size: 16px;
    height: 35px;
    border-radius: 32px;
    margin-top: 0px;
    font-family:  sans-serif;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    padding: 0px 8px;
    cursor: pointer;
    }

    >button:last-child{
      margin-top: 20px;
    }
  }

`;