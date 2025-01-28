import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Layout.css';
import { Outlet } from 'react-router';

const LayoutCases = () => {
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/Clients" >Clientes</a></li>
                    <li><a href="/Achievments " >Logros</a></li>
                    <li><a href="/Colaboration" >Como colaborar</a></li>
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
