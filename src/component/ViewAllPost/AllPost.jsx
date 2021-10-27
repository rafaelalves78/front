import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AllPostContext } from '../../context/AllPostContext';
import Pagination from '../Pagination/Pagination';
import PostCard from '../PostCard/PostCard';
import { Container } from './style'


export default function AllPost() {
  const { allPost } = useContext(AllPostContext);
  let length = allPost.length;
  const history = useHistory()

  let [currentPage, setCurrentPage] = useState(1)
  let itemsPerPage = 10
  let indexOfLastTodo = currentPage * itemsPerPage
  let indexOfFirstTodo = indexOfLastTodo - itemsPerPage
  let showPost = allPost.slice(indexOfFirstTodo, indexOfLastTodo)


  let displayPosts = showPost.map((product, index) => {
    return (
      <div className="container" key={index}>
        {''}
        <PostCard product={product} index={index} />{''}
      </div>
    )
  })
  return (
    <>
      {length !== 0 ? <Container>
        {displayPosts}
        <Pagination setCurrentPage={setCurrentPage} />
      </Container> : (
        history.push('/')
      )

      }
    </>
  )
}