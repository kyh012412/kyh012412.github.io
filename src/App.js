import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>app</h1>
      <a href="/temp-lotto">로또 a</a>
      <Link to={'/temp-lotto'}>로또 link</Link>
    </div>
  );
}

export default App;
