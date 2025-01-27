import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Layout.css';
import { Outlet } from 'react-router';

const LayoutAbout = () => {
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/Bio" >Bio</a></li>
                    <li><a href="/Job " >Trabajo</a></li>
                    <li><a href="/ProfesionalTips" >Tips de profesional</a></li>
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
export default LayoutAbout;
