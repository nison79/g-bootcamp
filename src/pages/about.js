import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

import { titleText , title } from './about.module.scss'

const AboutPage = () => {
  return (
    <Layout>
      <p className={title}>Πληροφορίες για μένα.</p>
      <p className={titleText}>Είμαι απόφοιτος της Παντείου απο το τμήμα Διεθνών και Ευρωπαικών Σπουδών, έχω ασχοληθεί με τις πωλήσεις τα τελευταία 10 χρόνια και τώρα είμαι ένας developer σε τεχνολογία της  React και πιο συγκεκριμένα στο Gatsby framework που για μένα αποτελεί το μέλλον στο μοντέρνο web-development. </p>
      <p><Link to="/contact">Έπικοινώνησε μαζί μου</Link></p>

    </Layout>
  )
}

export default AboutPage
