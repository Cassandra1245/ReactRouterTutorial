import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Layout.css';
import { Outlet } from 'react-router';

const LayoutCases = () => {
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/SocialNet" >Redes sociales</a></li>
                    <li><a href="/Message " >Deja un mensaje</a></li>
                    <li><a href="/Call" >Llamame</a></li>
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
