import axios from 'axios'
import importScript from 'hooks'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'
import { IReviews, setReviews } from 'store/testimonialSlice'
const Testimonial: FC = () => {
  importScript()
  const reviews = useSelector<RootState>(
    (state) => state?.testimonial?.reviews
  ) as Array<IReviews>
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (reviews?.length === 0) {
      const fetchReviews = async () => {
        const url = `${process.env.REACT_API_URL}portal/auth/fetchGoogleReviews`

        try {
          const response = await axios.get(url, {
            headers: { 'Access-Control-Allow-Origin': '*' },
          })
          const reviews = response.data.result.reviews?.map(
            (review: {
              author_name: string
              profile_photo_url: string
              rating: number
              text: string
              relative_time_description: string
            }) => {
              const {
                author_name,
                profile_photo_url,
                rating,
                text,
                relative_time_description,
              } = review
              return {
                name: author_name,
                photo: profile_photo_url,
                rating,
                text,
                time: relative_time_description,
              }
            }
          )

          dispatch(setReviews(reviews))
        } catch (error) {
          console.error('Error fetching Google reviews:', error)
          return []
        }
      }
      fetchReviews()
    }
  }, [])

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 className="mb-5">Our Students Say!</h1>
      </div>

      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="testimonial-item text-center">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <h5 className="mb-0">{review.name}</h5>
                <p className="testimonial-text">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Testimonial
