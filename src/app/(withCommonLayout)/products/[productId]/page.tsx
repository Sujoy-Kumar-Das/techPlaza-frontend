export default async function productDetailPage({ params }) {
  const { productId } = params;
  const url = `https://dummyjson.com/products/${productId}`;

  const res = await fetch(url, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  console.log(data);

  return <div></div>;
}
