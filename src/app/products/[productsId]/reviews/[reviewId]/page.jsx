export default async function ReviewsDetails({ params }) {
  const { productsId, reviewId } = await params; // reviewId = params.reviewId;
  return (
    <h1>
      Reviews {reviewId} for products {productsId}{" "}
    </h1>
  );
}
