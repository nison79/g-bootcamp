import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import { text } from './Footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  
  `)
  return (
    <footer>
      <p className={text}>Created by {data.site.siteMetadata.author}, © 2021</p>
    </footer>
  )
}

export default Footer
