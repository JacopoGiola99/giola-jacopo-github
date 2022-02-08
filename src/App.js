//import './App.css';
//import Content from './pages/content/content'
import Title from './layout/title/title';
import { listRepos } from './api/Repos';
import Container from '@mui/material/Container';
import { Link, Outlet } from "react-router-dom";

function App() {
  listRepos();
  return (
    <div className="App">
      <Container  maxWidth='100%' sx={{background: 'rgb(150, 217, 219)', paddingTop: '2%', paddingBottom: '7.4%'}} >
        <Title />
        <Link to='/login'>Login -</Link>
        <Link to='/logout'> Logout -</Link>
        <Link to='/utenti'> Utenti -</Link>
        <Link to='/classi'> Classi -</Link>
        <Link to='/repositories'> Repos</Link>
        {/* <Content /> */}
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
