import React from 'react'
import { OverlayTrigger, Popover, PopoverContent, Row, Container, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const popover = (
    <Popover id="popover-basic" style={{textAlign:"center"}}>
    <PopoverContent>
        <Container>
        <Row md={2}>
        <Col>
            <p>Place your order</p>
            <FontAwesomeIcon icon="clipboard-check" size="3x" style={{color:"skyblue"}}/>
            <p>Enter your address, find what you're looking for, and easily order from the best restaurants in the neighborhood.</p>
        </Col>
        <Col>
            <p>We handle the rest</p>
            <FontAwesomeIcon icon="store" size="3x" style={{color:"skyblue"}}/>
            <div style={{wordWrap:"break-word"}}>
            <p>We work with the merchant to make sure everything is ready for delivery or pickup, Then we'll send you a confirmation.</p>
            </div>
        </Col>
        </Row>
        </Container>
    </PopoverContent>
  </Popover>
)

function HowItWorksPopOver(){

    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <p>How It Works</p>
        </OverlayTrigger>
    )
}

export default HowItWorksPopOver