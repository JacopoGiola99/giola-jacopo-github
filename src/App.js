//import './App.css';
//import Content from './pages/content/content'
import Title from './layout/title/title';
import { listRepos } from './api/Repos';
import Container from '@mui/material/Container';
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "./context/userContext";
import { useState, useMemo, useEffect } from "react";

function App() {
  listRepos();

  const [user, setUser] = useState(false);

  const session = useMemo(() => ({ user, setUser }), [user, setUser]);

  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        if (!session) {
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    checkSession();
  })


  return (
    <UserContext.Provider value={session}>
      <div className="App">
        <Container maxWidth='100%' sx={{ background: 'rgb(150, 217, 219)', paddingTop: '2%', paddingBottom: '7.4%' }} >
          <Title />
          {/* <Content /> */}
          <Outlet />
        </Container>
      </div>
    </UserContext.Provider>
  );
}

export default App;
