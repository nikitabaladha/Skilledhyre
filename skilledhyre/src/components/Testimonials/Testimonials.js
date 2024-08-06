import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "./Testimonials.css"; // Ensure this path is correct

const Testimonials = () => {
  let carouselRef = React.useRef(null);

  return (
    <div className="container-fluid testimonial">
      <h6 className="testimonial-sub-heading">
        <span className="testimonial-dot">•</span>OUR CLIENTS
        <span className="testimonial-dot">•</span>
      </h6>
      <h2 className="heading">Testimonials</h2>
      <div className="carousel-container">
        <Carousel
          ref={(el) => (carouselRef = el)}
          interval={null}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <div>
              <p className="carousel-text">
                Skilledhyre team is efficient & even worked overtime to deliver
                what they said. I strongly recommend this company because a team
                of this company is highly accommodated & do only that what is
                exactly needed to keep your projects on track. I approached this
                company because their ongoing services are superb. The team is
                quick & responded well as per the needs of clients. I
                appreciated them for their good customer service & support in
                establishing your business worldwide.
              </p>
              <h6 className="testimonial-name">Emilia Clarke</h6>
              <p className="testimonial-profession">Developer</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <p className="carousel-text">
                Skilledhyre Company always performs valuable job so I recommend
                this company to my all clients. Proficient SEO Team always uses
                the advanced latest technology to rank clients' websites in top
                pages of google by using advanced SEO techniques. Their
                performance throughout the ongoing projects is amazing. The
                whole team of this company is technically savvy & walked clients
                through till they have completed their projects.
              </p>
              <h6 className="testimonial-name">Emilia Clarke</h6>
              <p className="testimonial-profession">Developer</p>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="carousel-controls">
          <IoIosArrowRoundBack
            onClick={() => carouselRef.prev()}
            className="carousel-arrow-icon carousel-learn-more-arrow-icon left-arrow"
          />

          <IoIosArrowRoundForward
            onClick={() => carouselRef.next()}
            className="carousel-arrow-icon carousel-learn-more-arrow-icon right-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
