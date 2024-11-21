import React from 'react'

const Banner: React.FC = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="owl-carousel header-carousel position-relative row">
        <div className="owl-carousel-item col-md-12">
          <img
            className="img-fluid rounded mb-4"
            src="assets/img/1.jpg"
            style={{ height: '400px' }}
            alt=""
          />
        </div>
        <div className="owl-carousel-item col-md-12">
          <img
            className="img-fluid rounded mb-4"
            style={{ height: '400px' }}
            src="assets/img/10.jpg"
            alt=""
          />
        </div>
        <div className="owl-carousel-item col-md-12 ">
          <img
            className="img-fluid rounded mb-4"
            style={{ height: '400px' }}
            src="assets/img/11.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
