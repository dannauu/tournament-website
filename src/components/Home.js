import React from "react";
import "./css/Home.css";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import Vanguard from "./img/vanguard.jfif";
import Warzone from "./img/warzzone.png";
import Overwatch from "./img/Overwatch.jfif";
import Halo from "./img/Halo-Infinite.jpg";
import HaloBanner from "./img/HaloInfiniteBanner.png";
import { Link } from "react-router-dom";
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <main className="games">
        <Container>
          <Row>
            <Col className="gameLink">
              <Link to="/vanguard">
                <img src={Vanguard} alt="Call of Duty Vanguard" />
              </Link>
              <p className="gameP">Click to Play</p>
            </Col>

            <Col className="gameLink">
              <Link to="/warzone">
                <img src={Warzone} alt="Call of Duty Warzone" />
              </Link>
              <p className="gameP">Click to Play</p>
            </Col>

            <Col className="gameLink">
              <Link to="overwatch">
                <img src={Overwatch} alt="Overwatch" />
              </Link>
              <p className="gameP">Click to Play</p>
            </Col>

            <Col className="gameLink">
              <Link to="haloinfinite">
                <img src={Halo} alt="Halo Infinite" />
              </Link>
              <p className="gameP">Click to Play</p>
            </Col>
          </Row>
        </Container>
      </main>
      <section>
        <Row>
          <Col className="haloBanner">
            <img src={HaloBanner} alt="Halo Infinite Banner" />
          </Col>
          <Col className="right">
            <h1 className="rightH1">Halo Infinite is out! Play now!</h1>
            <p className="rightP">
              Starting November, 15th there will be Halo Infinite live
              tournaments for ladder points and cash prizes. Make sure to sign
              up today and compete for cash and other prizes!
            </p>
            <h2 className="rightH2">
              Check out Halo Infinite Ladders{" "}
              <Link to="/haloinfinite">
                {" "}
                Here <i className="fas fa-crosshairs"></i>
              </Link>
            </h2>
            <Link to="/haloinfinite">
              <Button
                variant="outline-success"
                size="lg"
                className="playNowBtn"
              >
                PLAY NOW!
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="outline-success"
                size="lg"
                className="signUpNowBtn"
              >
                Sign up!
              </Button>
            </Link>
          </Col>
        </Row>
      </section>

      <section className="tournySection">
        <Row className="tournyHeader">
          <Col>
            <h1 className="tournyh1">Upcoming Tournaments</h1>
          </Col>
        </Row>

        <Row className="tournamentsRow">
          <Col>
            <div className="tournyCard">
                <Image src={Halo} alt="Halo" className="tournyImg" />
              <h1>$10,000 Free Entry 4v4</h1>
              <ul className="tournyUL">
                <li>Date: <span className='date'> November 29, 2021</span></li>
                <li>Start Time: <span className='time'>8:00pm CST</span></li>
                <li>Entry: FREE</li>
                <li>Team Size: 4v4</li>
                <li>Regions: North America/Europe</li>
              </ul>
              <Button variant="outline-success">View Tournament</Button>
            </div>
          </Col>
          <Col>
            <div className="tournyCard">
              <img src={Vanguard} alt="Vanguard" className="tournyImg" />
              <h1>$10,000 Free Entry 2v2</h1>
              <ul className="tournyUL">
                <li>Date: <span className='date'> November 28, 2021</span></li>
                <li>Start Time: <span className='time'>5:00pm CST</span></li>
                <li>Entry: FREE</li>
                <li>Team Size: 2v2</li>
                <li>Regions: North America/Europe</li>
              </ul>
              <Button variant="outline-success">View Tournament</Button>
            </div>
          </Col>
          <Col>
            <div className="tournyCard">
              <img src={Overwatch} alt="Halo" className="tournyImg" />
              <h1>NA Open Division 2021</h1>
              <ul className="tournyUL">
                <li>Date: <span className='date'> November 25, 2021</span></li>
                <li>Start Time: <span className='time'>6:00pm CST</span></li>
                <li>Entry: FREE</li>
                <li>Team Size: 6-9</li>
                <li>Regions: North America/Europe</li>
              </ul>
              <Button variant="outline-success">View Tournament</Button>
            </div>
          </Col>
          <Col>
            <div className="tournyCard">
              <img src={Warzone} alt="Halo" className="tournyImg" />
              <h1>$10,000 Kill Race 2v2</h1>
              <ul className="tournyUL">
                <li>Date: <span className='date'> November 23, 2021</span></li>
                <li>Start Time: <span className='time'>6:00pm CST</span></li>
                <li>Entry: FREE</li>
                <li>Team Size: 2v2</li>
                <li>Regions: North America/Europe</li>
              </ul>
              <Button variant="outline-success">View Tournament</Button>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
