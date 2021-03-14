import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {title , titleSub } from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <p className={title}>Γειά σας</p>

      <p className={titleSub}>Το όνομα μου είναι <Link to ="/about">Γιώργος Νίκογλου</Link> και ζώ στην όμορφη Δράμα.</p>

      <p>Έλα σε επαφή μαζί μου <Link to="/contact">Επικοινώνησε μαζί μου</Link> </p>
    </Layout>
  )
}

export default IndexPage