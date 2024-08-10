import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Hidden from './Components/Hidden';
import Passageway from './Components/Passageway';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const secret = useSelector((state) => state.secret);
  useEffect(() => {
    console.log(secret);
  });

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="passageway" element={<Passageway></Passageway>}></Route>
        <Route path="hidden" element={<Hidden></Hidden>}></Route>
        <Route path="privacy" element={<>privacy</>}></Route>
        <Route path="*" element={<>NotFound</>}></Route>
      </Routes>
    </div>
  );
}

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Toys</h1>
      <a href="/toys">진짜 토이</a> <br />
      <div>
        <h2>이하 연습코드</h2>
        <a href="/temp-lotto">로또 a</a> <br />
      </div>
      <br />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        히든
      </button>
      <Link to="/passageway">통로</Link>
    </>
  );
};

export default App;
