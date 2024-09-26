import React, { useRef } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "./Testimonials.css";

const Testimonials = () => {
  const carouselRef = useRef(null);

  // Array to store testimonial data
  const testimonialsData = [
    {
      text: "Skilledhyre team is efficient & even worked overtime to deliver what they said. I strongly recommend this company because the team is highly accommodating & only does what is exactly needed to keep your projects on track. Their ongoing services are superb, and the team is quick & responsive to client needs. I appreciated their good customer service & support in establishing your business worldwide.",
      name: "Emilia Clarke",
      profession: "Developer",
    },
    {
      text: "Skilledhyre Company always performs valuable jobs, so I recommend this company to all my clients. Their proficient SEO team uses advanced technology to rank client websites on top of Google pages. Their performance throughout the ongoing projects is amazing. The whole team is technically savvy and walks clients through until project completion.",
      name: "Emilia Clarke",
      profession: "Developer",
    },
  ];

  return (
    <div className="container-fluid testimonial">
      <h6 className="testimonial-sub-heading">
        <span className="testimonial-dot">•</span>OUR CLIENTS
        <span className="testimonial-dot">•</span>
      </h6>
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="carousel-container">
        <Carousel
          ref={carouselRef}
          interval={null}
          controls={false}
          indicators={false}
        >
          {testimonialsData.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div>
                <p className="carousel-text">{testimonial.text}</p>
                <h6 className="testimonial-name">{testimonial.name}</h6>
                <p className="testimonial-profession">
                  {testimonial.profession}
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="carousel-controls">
          <IoIosArrowRoundBack
            onClick={() => carouselRef.current.prev()}
            className="carousel-arrow-icon left-arrow"
          />
          <IoIosArrowRoundForward
            onClick={() => carouselRef.current.next()}
            className="carousel-arrow-icon right-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
