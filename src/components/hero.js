import React from 'react'
import Img from 'gatsby-image'
import { Slide } from 'react-slideshow-image';
import styles from './hero.module.css'
import { Card } from 'antd';

const { Meta } = Card;
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
export default ({ data }) => (
  <div className={styles.hero}>
  <Slide {...properties}>
{  data.images.length > 0 &&
  data.images.map((image,index) => {
    console.log(image);
    return (
      <div key={index}>
        <div className="each-slide" key={index}>
        <div >
            <Img className={styles.heroImage} alt={data.name} sizes={image.sizes} />
            <div className={styles.headlinebox} >
            <Card>
              <Meta 
                  title={<span style={{fontSize:'30px', fontWeight:'bold' }}>{image.title}</span> }
                  description={<span style={{fontSize:'20px', fontWeight:'bold' }}>{image.description}</span> }
                />
            </Card>
            </div>
          </div>
       </div>
      </div>
        
    )
  })
}
      </Slide>
  </div>
 
)