import React, { useContext, useState } from 'react';
import { AllPostContext } from '../../context/AllPostContext';
import PostCard from '../PostCard/PostCard';
import { Container } from './style';

export default function Posts() {
  const { setAllPost } = useContext(AllPostContext);
  let [posts, setPosts] = useState([]);

  let quickModal = posts.map((product, index) => {
    return (
      <div className="quickModal" key={index}>
        <PostCard product={product} index={index} />
      </div>
    )
  })
  return (
    <Container>
      <h2>Anuncios</h2>



    </Container>
  )
}