import React from 'react'
import Img from 'gatsby-image'
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import styles from './hero.module.css'
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true
}
export default ({ data }) => (
  <div className={styles.hero}>
  <Slide {...properties}>
{  data.images.length > 0 &&
  data.images.map((image,index) => {
    console.log(image);
    
    return (
      <div>
        <div className="each-slide" key={index}>
        <div >
            <Img className={styles.heroImage} alt={data.name} sizes={image.sizes} />
            <h3 className={styles.headline}>{image.title}</h3>
          </div>
       </div>
      </div>
        
    )
  })
}
      </Slide>
      
   
  </div>
)

// {
//   data.images.length > 0 &&
//   data.images.map((item,index) => {
//     return (
//       <div>
//       <h3 className={styles.heroHeadline}>{item.title}</h3>
//      <p className={styles.heroTitle}>Web Developer</p>
//      <p>{item.description}</p>
//      </div>
//     )
//   })
// }