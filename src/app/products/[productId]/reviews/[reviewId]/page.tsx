import { Fragment } from "react";

interface ProductDetailsProps {
    params: { 
        productId: number | string
        reviewId: number | string};
};

export default function ProductReview({params}: ProductDetailsProps) { 
  return (
    <Fragment>
        <h1>Reviews {params.reviewId} About Products {params.productId}</h1>
        <h3>This is Review number {params.reviewId}</h3>
    </Fragment>
  )
}
