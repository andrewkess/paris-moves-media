import React from 'react'
//import styles from './navigation.module.css'



import MenuButton from './menu-button'
import Menu from './menu'
import { Container, Col, Row } from 'react-bootstrap'
import {Link} from 'gatsby'
import styles from './menu-button.module.css'
import { IconContext } from "react-icons";
import { TiWaves } from 'react-icons/ti'
import MenuContainer from './menu-container'


import base from '../components/base.css'




export default () => (
<Container className={styles.navigationBar} fluid>
<Row>
    <Col className={styles.navMenuContainer}>
    <MenuContainer />
</Col>

    <Col className={styles.navbarMenu} xs={6}>
<Link to="/">
<div className="sign">Paris <span className="flicker">M</span><span className="flicker">oves</span></div>
</Link>
</Col>
    
<Col className={styles.rightMenu}>
<IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
<span><Link to="#" className={styles.cartLink}><TiWaves /></Link></span>
</IconContext.Provider>
</Col></Row>
</Container>
)
