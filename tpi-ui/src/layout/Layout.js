import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/Navbar';
import './style.css';
import logoIn from "../pages/HomePage/logoIn.jpeg";
export default function Layout({ children }) {

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-dark"  >
          <div className="d-flex flex-column p-3 text-white bg-dark" style={{ height: '100vh'}}>
          <img src={logoIn} alt="logo domus" />
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            </a>
            <hr />
            <Dropdown  >
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <img src="https://i.blogs.es/802389/steve-jobs-1/1366_2000.jpg" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>SUPER USER</strong>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">New project..</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <hr />
            <Navbar />
          </div>
        </Col>
          <Col md={10}>
            { children }
          </Col>
      </Row>
    </Container>
  );
}