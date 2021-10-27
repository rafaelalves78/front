import React, { useState } from 'react';
//import Navbar from '../Heading/Navbar';
import { Container } from './style';

export default function Create() {

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [CEP, setCep] = useState("");
  let [setImage] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <>


      <Container>
        <h2>Criar anuncio</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titulo do anuncio"
            name="Titulo do anuncio"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            name="Description"
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          >

          </textarea>
          <input
            type="text"
            placeholder="CEP"
            value={CEP}
            onChange={(e) => {
              setCep(e.target.value);
            }}
          />

          <h4>Adicionar fotos</h4>


          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />

          <button type="submit">Enviar anúncio</button>

        </form>

      </Container>
    </>
  )
}