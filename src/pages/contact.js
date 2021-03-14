import React from 'react'
import Layout from "../components/layout"

import { title , titleText } from './contact.module.scss'

const ContactPage = () => {
  return (
    <Layout>
      <p className={title}>Επικοινωνία.</p>
      <p className={titleText}>Ο καλύτερος τρόπος να έρθεις σε επαφή μαζί μου είναι μέσω <a href="https://twitter.com/gnikoglou79">@gnikoglou</a> στο Twitter.</p>
    </Layout>
  )
}

export default ContactPage
