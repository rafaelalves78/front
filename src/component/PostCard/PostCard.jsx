import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from '../../context/PostContext';

import { Anuncio, Title, Price, Details } from './style'

export default function PostCard({ product, index }) {

  let { setPostContent } = useContext(PostContext)

  const history = useHistory()
  return (
    <>
      <Anuncio onClick={() => {
        setPostContent(product)
        history.push("/view")
      }}>

        <img src={product.url} alt="" />

        <Title>{product.title}</Title>
        <Price>Troca</Price>
        <Details>Details</Details>

      </Anuncio>
    </>
  );
}

