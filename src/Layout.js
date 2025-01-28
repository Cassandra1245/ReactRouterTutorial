import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Layout.css';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/Formulario " >Formulario</a></li>
                    <li><a href="/Perfil" >Perfil</a></li>
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
export default Layout;
