/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"


import logo from  "../sections/ramy-keyframe.jpg" // Tell webpack this JS file uses this image


import logoTwo from "../sections/king-keyframe.jpeg" // Tell webpack this JS file uses this image
import logoThree from "../sections/minari-keyframe.jpeg" // Tell webpack this JS file uses this image

import mainLogo from "../sections/maglogo.png" // Tell webpack this JS file uses this image



import styles from '../components/hero.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

require('typeface-mukta')
require('typeface-bebas-neue')
require('typeface-rubik')




import React from "react";

// @ts-ignore
import Intro from "../sections/intro"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';




//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { Carousel, Image, Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap'







const newLocal = false
const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (


<Content sx={{ variant: `texts.bigger`, width:['100px','50px','150px','200px','300px' ] }} speed={0.4} offset={offset} factor={factor}  className={styles.preview}>


     <Carousel fade={true}  data-interval={false} indicators={false} className={styles.preview}>
  <Carousel.Item>
<a href="http://www.thefyzz.com/project/driven">    
    
  <Image src={logo} className={styles.newFill} alt="First slide"   />



    
    <Carousel.Caption className={styles.capp}>
      <h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.7em'}} >LAW OF DESIRE</h1>
      <p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em'}}>Fun that's as explosively bright and provocative as ever.</p>
    </Carousel.Caption></a>
  </Carousel.Item>
  
  
  <Carousel.Item>
<Image src={logoTwo} className={styles.newFill}  alt="First slide" />
    <Carousel.Caption className={styles.capp}>
    <h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.7em'}} >PENGUIN BLOOM</h1>

    <p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em'}}>Graceful, thought-provoking commentary on timely sociopolitical themes.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src={logoThree} className={styles.newFill}  alt="First slide"  />


    <Carousel.Caption className={styles.capp}>
    <h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.8em'}} >THE NEVERENDING STORY</h1>
    <p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em'}}>A magical journey about the power of a boy's imagination to save a dying land.</p>
  </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    
             
    </Content>
)





export default Hero


