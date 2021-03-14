import * as  React from 'react'
import { Link ,graphql ,useStaticQuery } from 'gatsby'

//v3 of Gatsby import statement, imports className as named, and you pass it down in className. 
import { header, title, navList, navItem ,activeNavItem } from './Header.module.scss'



const Header = ( {children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  
  `)
  return (
    <header className={header}>
      <p><Link className={title}  to="/">{data.site.siteMetadata.title}</Link></p>
        <nav>
          <ul className={navList}>
            <li>
              <Link className={navItem} activeClassName={activeNavItem} to="/">Αρχική</Link> 
            </li>
            <li >
              <Link className={navItem} activeClassName={activeNavItem} to="/blog">Άρθρα</Link>
            </li>
            <li >
              <Link className={navItem} activeClassName={activeNavItem} to="/contact">Επικοινωνία</Link>
            </li>
            <li >
              <Link className={navItem} activeClassName={activeNavItem} to="/about">Σχετικά</Link>
            </li>
          </ul>
        </nav>        
    </header>
  )
}

export default Header
