import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Layout.css';
import { Outlet } from 'react-router';

const LayoutCases = () => {
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/Contact/Call" >Llamame</a></li>
                    <li><a href="/Contact/Message" >Deja un mensaje</a></li>
                    <li><a href="/Contact/SocialNet" >Redes sociales</a></li>
                </ul>
            </header>

            <section className="hero">
                <Container>
                    <Row>
                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </section>

            <footer>
                {/* Información de contacto y enlaces */}
            </footer>
        </div>
    );
};
export default LayoutCases;
