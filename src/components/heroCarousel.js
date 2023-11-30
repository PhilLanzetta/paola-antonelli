import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { GatsbyImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'

function NextArrow(props) {
  const { onClick } = props
  return (
    <div
      className={props.addClassName}
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
      aria-label='go to next'
    >
      <FaCircle></FaCircle>
    </div>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className={props.addClassName}
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
      aria-label='go to previous'
    >
      <FaCircle></FaCircle>
    </div>
  )
}

const HeroCarousel = ({ images }) => {
  const settings = {
    nextArrow: <NextArrow addClassName='image-next' />,
    prevArrow: <PrevArrow addClassName='image-prev' />,
  }
  return (
    <div>
      <Slider {...settings} className='work-slides'>
        {images?.map((image) => {
          return (
            <div className='work-slides-container' key={image.id}>
              <div className='work-slide-img-container'>
                <GatsbyImage
                  image={image?.gatsbyImageData}
                  alt={image?.description}
                  className='work-slide-img'
                  imgStyle={{ objectFit: 'contain' }}
                ></GatsbyImage>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default HeroCarousel
