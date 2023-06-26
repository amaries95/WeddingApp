import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import Login from './Login/Login';
import Main from './Main/Main';
import Admin from './Admin/Admin';

function App() {
  const isLoggedIn = false;
  return (
    <>
    <Router>
      <Row className="vh-100 vw-100 gx-0">
        <Col>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<Login /> } />
            <Route path="/admin" element={<Admin /> } />
          </Routes>
        </Col>
      </Row>
    </Router>
    </>
  );
}

export default App;
