import './App.css';
import Content from './components/content/content'
import Title from './components/title/title';
import {listRepos} from './Api/Repos';

function App() {
  listRepos();
  return (
    <div className="App">
      <Title />
      <Content />
    </div>
  );
}

export default App;
