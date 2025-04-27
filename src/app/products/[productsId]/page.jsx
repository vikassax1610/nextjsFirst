export default async function ProductList({ params }) {
  const productsId = await params.productsId;
  return (
    <div>
      <h1> details about product {productsId}</h1>
    </div>
  );
}
