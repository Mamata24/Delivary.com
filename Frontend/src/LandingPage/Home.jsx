import React from 'react'
import { Container, Row, Nav, NavLink, NavItem } from 'react-bootstrap'
import styled from './Home.module.css'
import styles from 'styled-components'
import logo from '../LandingPage/Icon/companyLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HowItWorksPopOver from './HowItWorksPopOver'
import LoginModal from './LoginModal'

const SearchBox = styles.div`
    height:318px;
    width:565px;
    background:#f4f5f5;
    margin-top:-70px;
    margin-left:400px;
`;

function Home(){

    return(
        <Container fluid>
            <Row className={styled.bgimage}>
                <Nav className={styled.nav}>
                 <NavItem>
                     <NavLink href=""><HowItWorksPopOver /></NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink href="/office">For Office</NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink><LoginModal /></NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink href="/home"><FontAwesomeIcon icon="tag" size="2x" rotation={90}/></NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink href="/home"><FontAwesomeIcon icon="shopping-bag" size="2x"></FontAwesomeIcon></NavLink>
                 </NavItem>
                </Nav>
                <Row>
                    <SearchBox>
                        <img className={styled.logoimg} src={logo} alt="delivery"/>
                       <div>
                            <FontAwesomeIcon icon="utensils" size="2x" className={styled.searcboxicon}/>
                            <FontAwesomeIcon icon="glass-martini" size="2x" className={styled.searcboxicon}/>
                            <FontAwesomeIcon icon="shopping-basket" size="2x" className={styled.searcboxicon}/>
                       </div>
                       <div className={styled.info}>
                           <p>See who delivers in your neighborhood</p>
                       </div>
                       <div className={styled.searchDiv}>
                            <div class={styled.inpDiv}>
                                <FontAwesomeIcon icon="location-arrow" className={styled.locationArrow}/>
                                <input class={styled.searchInput} type="text"/>
                            </div>
                            <button className={styled.btn}>Search</button>
                       </div>
                    </SearchBox>
                </Row>
            </Row>
        </Container>
    )
}

export default Home