import React, { useContext} from 'react';
import Login from '../component/Login/Login';
//import Create from "../Components/Create/Create";

const CreateAd = () => {
  const {user} = useContext();
  
  return (
    <>
    {user ? (
      // <Create />
      <Login />
    ) : (
      <>
        {alert("Faça o login primeiro")} <Login />
        
      </>
    ) }
    </>
  )
}

export default CreateAd