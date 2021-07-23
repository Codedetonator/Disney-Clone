/*eslint-disable*/
import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src='/images/home/slide1.jpg' alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/images/home/slide2.jpg' alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/images/home/slide3.jpg' alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/images/home/slide4.jpg' alt=""/>
                </a>
            </Wrap>
        </Carousel>
    )
}




const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 365px;

    }
    @media (max-width: 768px) {
      img {
        width: 100%;
        height: 230px;
  
      }
    }

    @media (max-width: 468px) {
      img {
        width: 100%;
        height: 180px;
  
      }
    }

    &:hover {
      padding: 0;
     border: 3px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
export default ImgSlider
