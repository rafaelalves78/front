import './App.css';
import ContextAllPost from './context/AllPostContext';
import ContextPost from './context/PostContext';
import Routes from './Routes/Routes';

function App() {
  return (
    <>
      <ContextAllPost>
        <ContextPost>
          <Routes />
        </ContextPost>
      </ContextAllPost>
    
    </>
  );
}

export default App;
