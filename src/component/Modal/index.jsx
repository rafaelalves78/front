import React, { useContext } from "react";
import { useHistory } from 'react-router';
import { PostContext } from '../../context/PostContext';
import { ModalOver, Photo, Details, Title, Price, Description, BtnClose } from './style'


export default function Modal({ product, index }) {
  let { postContent } = useContext(PostContext);

  const history = useHistory()
  return (
    <>
      <ModalOver key={index} onClick={() => {
        postContent(product)
        history.push('/view')
      }}>

        <Photo>
          <img src={postContent.url} alt="" />
        </Photo>

        <Details>

          <Title>{postContent.title}</Title>
          <Price> Troca</Price>
          <Description>
            Description: <span>{postContent.description}</span>
            Address: <span>{postContent.address}</span>
            CEP: <span>{postContent.cep}</span>
            <p>Postado por: {postContent.autor}</p>
          </Description>
          <BtnClose>Close</BtnClose>
        </Details>


      </ModalOver>
    </>
  );
}

