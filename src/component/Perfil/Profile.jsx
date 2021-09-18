import React from "react";
import { Perfil } from './style'

const Profile = props => {
  return (
    <>
      <Perfil>
        <h2>Perfil</h2>
        <h3>Nome: <span>Rafael fernandes</span></h3>
        <h3>Tel: <span>9995487</span></h3>
        <h3>Cidade: <span>Maripa de Minas</span></h3>
      </Perfil>
    </>
  );
}

export default Profile;