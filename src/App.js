//import './App.css';
import Content from './pages/content/content'
import Title from './layout/title/title';
import { listRepos } from './api/Repos';
import Container from '@mui/material/Container';

function App() {
  listRepos();
  return (
    <div className="App">
      <Container  maxWidth='100%' sx={{background: 'rgb(150, 217, 219)', paddingTop: '2%'}} >
        <Title />
        <Content />
      </Container>
    </div>
  );
}

export default App;
