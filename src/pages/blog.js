import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

import { title , list , titleBlog , date } from './blog.module.scss'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter{
              title
              date
            }
          }
        }
      }
    }
  
  `)

  return (
    <Layout>
      <p className={title}>Άρθρα</p>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className={list}>
                <p className={titleBlog}>{edge.node.frontmatter.title}</p>
                <p className={date}>{edge.node.frontmatter.date}</p>
              </li>
            )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
