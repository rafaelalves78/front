import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  margin: 50px 0;

  >li{
    color: #03080a;
    font-weight: bolder;
    width: 30px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 1px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 8px;
    transition: all ease 0.3s;
    border-radius: 50px;
  }

  >li:hover {
    background-color: rgb(220, 111, 32, 0.5);
    border-color: #ebeeef;
  }
  .active {
  background-color: rgb(247, 131, 35);
}
`;