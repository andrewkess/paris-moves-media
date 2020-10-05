import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import { graphql } from 'gatsby';


import 'bootstrap/dist/css/bootstrap.min.css';

import base from '../components/base.css'


const Cara = () => (
  <Layout>
    <Parallax pages={4}>


      <Hero offset={0} factor={1}/>
      <About offset={1} factor={1} />

      <Projects offset={2} factor={1} />

      <Contact offset={3} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "ramy-keyframe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;