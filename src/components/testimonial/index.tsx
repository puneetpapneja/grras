import axios from 'axios'
import React, { FC, useEffect } from 'react'

const Testimonial: FC = () => {
  const apiKey = ''
  const placeId = ''
  useEffect(() => {
    const fetchReviews = async () => {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`

      try {
        const response = await axios.get(url, {
          headers: { 'Access-Control-Allow-Origin': '*' },
        })
        const reviews = response.data.result.reviews
        console.log(reviews)
        // return reviews.map(review => ({
        //   author: review.author_name,
        //   rating: review.rating,
        //   text: review.text,
        //   time: review.relative_time_description,
        // }));
      } catch (error) {
        console.error('Error fetching Google reviews:', error)
        return []
      }
    }
    fetchReviews()
  }, [apiKey, placeId])

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="assets/img/testimonial-1.jpg"
              style={{ width: '80px', height: '80px' }}
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="assets/img/testimonial-2.jpg"
              style={{ width: '80px', height: '80px' }}
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="assets/img/testimonial-3.jpg"
              style={{ width: '80px', height: '80px' }}
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="assets/img/testimonial-4.jpg"
              style={{ width: '80px', height: '80px' }}
            />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
