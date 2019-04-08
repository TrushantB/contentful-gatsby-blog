import React from 'react'
// import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
// import ArticlePreview from '../components/article-preview'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const about = get(this, 'props.data.contentfulAboutUs')
    console.log(about);
    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.about}>
          <h2 style={{fontWeight:'bold', padding:"30px"}}>{about.title}</h2>
          <div className={styles.about1}>
               <p>{about.shortBio.shortBio}</p>
               <img className={styles.aboutimage} src={about.images[0].resize.src} />
          </div>
          <p>{about.content.content}</p>
        </div >
      </div>
    )
  }
}

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutUs{
        title
        slug
        images{
          resize{
            src
          }
        }
        content {
          id
          content
        }
        shortBio{
            shortBio
          }
      }
  }
`
