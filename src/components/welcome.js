
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap"; 
import Logo1 from "../assets/imgs/png/welcome/Component 2 – 1.png";
import Logo2 from "../assets/imgs/png/welcome/Page-1.png";
import Logo3 from "../assets/imgs/png/welcome/steering-wheel.png";
import Boy from "../assets/imgs/png/welcome/boy.JPG";
class Welcome extends Component {
    render() {
        return (
            <div className="welcome-section">
                <Container>
                    <Row>
                        <Col className="welcome-text-container" lg={6} md={12} sm={12}>
                            <h6>Helps you to find your next car easily </h6>
                            <h1>Welcome to <span className="d-inline trader-sell-text">Trader Sell</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                             scrambled  s</p>
                            <div className="welcome-footer-container">
                                <span className="welcome-footer-box">
                                    <img src={Logo3} className="" alt="logo2" />
                                    <h2>we offers lower cars price</h2>
                                </span>
                                <span className="welcome-footer-box">
                                    <img src={Logo2} className="" alt="logo3" />
                                    <h2>largest cars  dealership</h2>
                                </span>
                                <span className="welcome-footer-box">
                                    <img src={Logo1} className="" alt="logo4" />
                                    <h2>multipoint safety checks offers</h2>
                                </span>
                            </div>
                        </Col>
                        <Col className="welcome-image-container" lg={6} md={12} sm={12}>
                            <img className="welcome-img-boy" src={Boy} alt="boy" />
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        vouched: state.app.vouched
    };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);