import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styled from './Home.module.css'

function Home(){

    return(
        <Container fluid>
            <Row className={styled.bgimage}>
             <h1>Working!</h1>
            </Row>
        </Container>
    )
}

export default Home