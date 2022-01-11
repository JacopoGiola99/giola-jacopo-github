//import './App.css';
import Content from './components/content/content'
import Title from './components/title/title';
import { listRepos } from './Api/Repos';
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
