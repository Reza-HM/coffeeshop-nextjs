import Comments from "@/components/templates/product/Comments";
import ProductsDetails from "@/components/templates/product/ProductDetails";
import React from "react";

const Product = ({ product, comments }) => {
  return (
    <div>
      <ProductsDetails data={product} /> <Comments data={comments} />
    </div>
  );
};

export async function getStaticPaths(context) {
  const res = await fetch(`http://localhost:8000/menu`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const productRes = await fetch(`http://localhost:8000/menu/${params.id}`);
  const productData = await productRes.json();

  const commentsRes = await fetch(`http://localhost:8000/comments`);
  const commentsData = await commentsRes.json();

  const productComments = commentsData.filter(
    (comment) => comment.productID === +params.id
  );

  return {
    props: {
      product: productData,
      comments: productComments,
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Product;
