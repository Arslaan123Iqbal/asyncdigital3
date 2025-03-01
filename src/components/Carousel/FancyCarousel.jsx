import Image from 'next/image'
import React, { useState } from 'react'
import Center from '../../images/center.png'
export const FancyCarousel = ({
    images, 
    setFocusElement = () => {},
    offsetAngle = 0,
    carouselRadius = 400, 
    centralImageRadius = 125, 
    centralImageBoxShadow = '5px 10px 18px #888888',
    peripheralImageRadius = 75, 
    peripheralImageBoxShadow = '',
    focusElementStyling = {},
    border = true, 
    borderWidth = 5, 
    borderHexColor  = 'CB786C', 
    autoRotateTime = 0,
    transitionTime = 1.5,
    navigationTextSize = 2,
    navigationButtonRadius = 32.5, 
    navigationButtonBgColor = 'CB786C', 
    navigationButtonColor = 'FFFFFF',
    navigationButtonStyling = {}
}) => {

  const [carousel, setCarousel] = useState({
    carouselOrietation: 0,
    elementOrientation: 0,
    focusElement: 0
  })

  setFocusElement(carousel.focusElement)

  if(autoRotateTime) {
    setTimeout(() => {
      rotateRight()
    }, autoRotateTime*1000)
  }
  
  const noOfImages = images.length
  const theta = 360/noOfImages

  const borderElement = (border) ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${carouselRadius*2}' ry='${carouselRadius*2}' stroke='%23${borderHexColor}FF' stroke-width='${borderWidth}' stroke-dasharray='6%2c 24' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")` : ''

  const rotateRight = () => {
      setCarousel({
          carouselOrietation: carousel.carouselOrietation + theta,
          elementOrientation: carousel.elementOrientation - theta,
          focusElement: (carousel.focusElement < (noOfImages-1)) ? carousel.focusElement + 1 : 0
      })
  }

  const rotateLeft = () => {
      setCarousel({
          carouselOrietation: carousel.carouselOrietation - theta,
          elementOrientation: carousel.elementOrientation + theta,
          focusElement: (carousel.focusElement > 0) ? carousel.focusElement - 1 : noOfImages-1
      })
  }

  var newCoordinates = []
  images.forEach((item, index) => {
    newCoordinates.push([carouselRadius - peripheralImageRadius + carouselRadius*Math.cos(2*Math.PI * index/noOfImages), carouselRadius - peripheralImageRadius + carouselRadius*Math.sin(2*Math.PI * index/noOfImages)])
  })

  const totalDeviation = offsetAngle*Math.PI/180 + Math.PI/2

  var rotatedCoordinates = []
  const centerCoordinate = carouselRadius - peripheralImageRadius
  newCoordinates.forEach((item, index) => {
    rotatedCoordinates.push([centerCoordinate + (item[0] - centerCoordinate)*Math.cos(totalDeviation) - (item[1] - centerCoordinate)*Math.sin(totalDeviation), centerCoordinate + (item[0] - centerCoordinate)*Math.sin(totalDeviation) + (item[1] - centerCoordinate)*Math.cos(totalDeviation)])
  })

  return (
      <div className="fancy-carousel-wrapper-element">
        <div className="fancy-carousel-border" 
             style={{backgroundImage: borderElement, height: `${carouselRadius*2}px`, width: `${carouselRadius*2}px`, transition: `${transitionTime}`}}
        >
          <div
            className="fancy-carousel"
            style={{ 
                     transform: `rotate(${carousel.carouselOrietation}deg)`, 
                     height: `${carouselRadius*2}px`, width: `${carouselRadius*2}px` 
                   }}
          >
            {images.map((item, index) => (
              (index !== carousel.focusElement) ?
                <div
                  className="fancy-carousel-element"
                  key={index}
                  style={{ 
                            transform: `rotate(${carousel.elementOrientation}deg)`, width: `${peripheralImageRadius*2}px`, height: `${peripheralImageRadius*2}px`,
                            left:      `${rotatedCoordinates[index][0]}px`, 
                            bottom:    `${rotatedCoordinates[index][1]}px`,
                            boxShadow: `${peripheralImageBoxShadow}`,
                            transition: `${transitionTime}`
                        }}
                >
                  <Image className="fancy-carousel-image cursor-pointer hover:scale-150" src={item}
                    style={{width: `${peripheralImageRadius*2}px`, height: `${peripheralImageRadius*2}px`}} />
                </div>:
                <div
                  className="fancy-carousel-element"
                  key={index}
                  style={{...{ 
                            transform: `rotate(${carousel.elementOrientation}deg)`, width: `${peripheralImageRadius*2}px`, height: `${peripheralImageRadius*2}px`,
                            left:      `${rotatedCoordinates[index][0]}px`, 
                            bottom:    `${rotatedCoordinates[index][1]}px`,
                            boxShadow: `${peripheralImageBoxShadow}`,
                            transition: `${transitionTime}`
                        }, ...focusElementStyling}}
                >
                  <Image className="fancy-carousel-image cursor-pointer hover:scale-150" src={item}

                       style={{width: `${peripheralImageRadius*2}px`, height: `${peripheralImageRadius*2}px`, transition: `${transitionTime}`}} />
                </div>
            ))}

            <div
                className="fancy-carousel-element central-img"
                key={noOfImages}
                style={{ 
                          transform: `rotate(${carousel.elementOrientation}deg)`, width: `${centralImageRadius*2}px`, height: `${centralImageRadius*2}px`,
                          left: `${carouselRadius - centralImageRadius - 10}px`, bottom: `${carouselRadius - centralImageRadius - 10}px`,
                        //   boxShadow: `${centralImageBoxShadow}`,
                          transition: `${transitionTime}`
                      }}
                > 
                <Image className="fancy-carousel-central-image" src={Center}
                  style={{width: `${centralImageRadius*2}px`, height: `${centralImageRadius*2}px`, transition: `${transitionTime}`}} 
                />
            </div>
          </div>
        </div>

        {/* <div className={"fancy-carousel-navigators " + ((autoRotateTime) ? "invisible" : "")}
             style={{gap: `${carouselRadius*2}px`, marginLeft: `-${navigationButtonRadius*1.8}px`}}>
              <button className="fancy-carousel-navigation-button" onClick={rotateLeft}
                      style={{...{ 
                              width: `${navigationButtonRadius*2}px`, height: `${navigationButtonRadius*2}px`,
                              backgroundColor: `#${navigationButtonBgColor}`, color: `#${navigationButtonColor}`,
                              fontSize: `${navigationTextSize}rem`
                            }, ...navigationButtonStyling}}
              >
                ↓
              </button>
              <button className="fancy-carousel-navigation-button" onClick={rotateRight}
                      style={{...{ 
                              width: `${navigationButtonRadius*2}px`, height: `${navigationButtonRadius*2}px`,
                              backgroundColor: `#${navigationButtonBgColor}`, color: `#${navigationButtonColor}`,
                              fontSize: `${navigationTextSize}rem`
                            }, ...navigationButtonStyling}}
              >   
                ↓
              </button>
          </div> */}
      </div>
  )
}