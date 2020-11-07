import React from 'react'
import {Col,Row,Container} from 'react-bootstrap'

function Footer(){

    return(
        <>
        <Container style={{backgroundColor:"lightGray"}} fluid>
            <Row>
                <Container style={{margin:20}}>
                    <Row>
                        <Col><i>Merchants</i></Col>
                        <Col><i>Drivers</i></Col>
                        <Col><i>About us</i></Col>
                        <Col><i>Contact</i></Col>
                        <Col><i>FAQ</i></Col>
                        <Col><i>Careers</i></Col>
                        <Col><i>Office</i></Col>
                        <Col><i>Blog</i></Col>
                        <Col><i>Terms of Use</i></Col>
                        <Col><i>Privacy Policy</i></Col>
                    </Row>
                </Container>
            </Row>
        </Container>
        </>
    )
}

export default Footer