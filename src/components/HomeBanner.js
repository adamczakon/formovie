import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import starIcon from "../image/starIcon.svg";

class HomeBanner extends Component {
  render() {
    const config = this.props.config;
    const sliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 7000
    };
    console.log(this.props.items);
    return (
      <div className='slide-wrapper'>
        <Slider {...sliderSettings}>
          {this.props.items.map((item, i) => {
            if (i < 5) {
              return (
                <Link to={`/movie-details/${item.id}`} key={item.id}>
                  <div
                    id={item.id}
                    to='/'
                    className='slide-background'
                    style={{
                      background: `linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 1)
                      ), url(${
                        config.images ? config.images.secure_base_url : ""
                      }${config.images ? config.images.backdrop_sizes[2] : ""}${
                        item.backdrop_path
                      })`
                    }}
                  >
                    <div className='slide-description'>
                      <h3 className='slide-description-header'>
                        Popular movies
                      </h3>
                      <h2 className='slide-description-title'>{item.title}</h2>

                      <div className='slide-description-score'>
                        <img
                          className='slide-description-score-icon'
                          src={starIcon}
                          alt='Rating:'
                        />
                        <div className='slide-description-score-numbers'>
                          <h3 className='slide-description-score-number'>
                            {item.vote_average}
                          </h3>
                          <h4 className='slide-description-score-votes'>
                            {item.vote_count} VOTES
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </Slider>
      </div>
    );
  }
}

export default HomeBanner;
