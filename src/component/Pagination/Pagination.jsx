import React, { useContext, useState } from "react";
import { AllPostContext } from '../../context/AllPostContext';
import { Container } from './styles';

export default function Pagination({ setCurrentPage }) {
  const { allPost } = useContext(AllPostContext);
  let [activeItem, setActiveItem] = useState("");
  let numberOfPages = [];
  let itemsPerPage = 8;
  for (let i = 1; i <= Math.ceil(allPost.length / itemsPerPage); i++) {
    numberOfPages.push(i);
  }
  const showNextPage = (e) => {
    let clickedPage = e.target.id;
    setCurrentPage(clickedPage);
    setActiveItem(Number(clickedPage));
  };
  let pagination = numberOfPages.map((pageNumber) => {
    return (
      <li
        key={pageNumber}
        id={pageNumber}
        className={activeItem === pageNumber ? "active" : ""}
        onClick={showNextPage}
      >
        {pageNumber}
      </li>
    );
  });
  return (
    <Container>
      {pagination}
    </Container>
  )
}
