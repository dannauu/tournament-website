import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Home from "./components/Home";
import Faq from './components/Faq'
import StatsTracker from './components/StatsTracker'
import Vanguard from './components/Vanguard'
import HaloInfinite from './components/HaloInfinite'
import SignUp from './components/SignUp'
import Support from './components/Support'

function App() {
  return (
    <Router>
      <Navbar sticky="top">
        <Container>
          <Nav.Link href="/" className='logo'>
            Danbattles
          </Nav.Link>
          <NavDropdown title="Games" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fortnite</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Call of Duty Vanguard
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Apex Legends</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Rocket League
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Leaderboards" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fortnite</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Call of Duty Vanguard
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Apex Legends</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Rocket League
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/stats-tracker">Stats Tracker</Nav.Link>
          <Nav.Link href="/support">Support</Nav.Link>
        </Container>
        <Container className='userInfo'>
          <Nav.Link to="/">My Profile</Nav.Link>
          <Nav.Link to="/">Sign In</Nav.Link>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/stats-tracker" component={StatsTracker} />
        <Route path="/vanguard" component={Vanguard}/>
        <Route path="/haloinfinite" component={HaloInfinite}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/support" component={Support}/>
      </Switch>
    </Router>
  );
}

export default App;
