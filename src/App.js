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

  const [user, setUser] = useState(true);

  const session = useMemo(() => ({ user, setUser }), [user, setUser]);
  console.log(session);

  const navigate = useNavigate();

  useEffect(() => {
    if (!session.user) {
      navigate('/login');
    }
  }, [session, navigate])


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
