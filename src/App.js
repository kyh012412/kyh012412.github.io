import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Link to="/privacy">privacy</Link>}></Route>
        <Route
          path="main"
          element={
            <>
              <>
                <h1>Toys</h1>
                <a href="/toys">진짜 토이</a> <br />
                <div>
                  <h2>이하 연습코드</h2>
                  <a href="/temp-lotto">로또 a</a> <br />
                  <a href="/myshop">샵</a> <br />
                  <a href="/iotest1">iotest1</a> <br />
                </div>
                <br />
                <button>히든</button>
              </>
            </>
          }
        ></Route>
        <Route path="privacy" element={<>privacy</>}></Route>
        <Route path="*" element={<>NotFound</>}></Route>
      </Routes>
    </div>
  );
}

export default App;
