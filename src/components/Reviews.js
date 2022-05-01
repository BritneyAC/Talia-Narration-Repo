import reviewList from "../ReviewList"

export default function Reviews(){

  const reviewElements = reviewList.map(review => <div key={review.id}>
    <h4>{review.name}</h4>
    <p>{review.review}</p>
    <h3>{review.rating}</h3>
    <img src="" alt="Rating star" />
  </div>)

  return(
    <section>
      {reviewElements}
    </section>
  )
}