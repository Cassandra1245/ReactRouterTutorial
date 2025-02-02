import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Layout.css';
import { Outlet } from 'react-router';

const LayoutCases = () => {
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="/Cases/Achievments" >Logros</a></li>
                    <li><a href="/Cases/Clients " >Clientes</a></li>
                    <li><a href="/Cases/Colaboration" >Colaboracion</a></li>
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
