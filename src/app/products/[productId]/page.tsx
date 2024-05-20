import { Fragment } from "react";

interface ProductDetailsProps {
    params: { productId: number | string };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <Fragment>
        <h1>Details About Products {params.productId}</h1>
        <h3>This is demo</h3>
    </Fragment>
  )
}
