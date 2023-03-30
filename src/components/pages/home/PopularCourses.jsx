import React from 'react';
import courseImage1 from '../../../images/course-img-1.png';
import courseImage2 from '../../../images/course-image-2.png';
import courseImage3 from '../../../images/course-img-3.png';
import greenStar from '../../../images/green-star.png';
import grayStar from '../../../images/gray-star.png';
import greenCircle from '../../../images/green-circle.png';


function Course({ img, alt, title }) {
  return (
    <div className="course">
      <div className="course-image">
        <img src={img} alt={alt} />
      </div>
      <div className="course-info">
        <h4>{title}</h4>
        <div className="course-stars-reviews">
          <span className="stars">
            <img src={greenStar} alt="green star" />
            <img src={greenStar} alt="green star" />
            <img src={greenStar} alt="green star" />
            <img src={greenStar} alt="green star" />
            <img src={grayStar} alt="gray star" />
          </span>
          <p>(536 reviews)</p>
        </div>
        <div className='course-estimated-time'>
          <span>
            <p>Estimated time</p>
            <p>Track A 1-3 weeks at 6hrs/Day.</p>
          </span>
          <span>
            <img src={greenCircle} alt="circle" />
          </span>
        </div>
      </div>
    </div>
  );
}

function PopularCourses() {
  return (
    <div className="popular-courses">
      <h3>Our Popular Courses</h3>
      <div className='popular-courses-list'>
        <Course img={courseImage1} alt="Course Image 1" title="Forex Business" />
        <Course img={courseImage2} alt="Course Image 2" title="Finance" />
        <Course img={courseImage3} alt="Course Image 3" title="Bitcoin mining" />
      </div>
    </div>
  )
}

export default PopularCourses;