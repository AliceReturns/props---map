interface ProductItemProps {
  name: string;
  price: number;
}

function Products(props: ProductItemProps) {
  return (
    <div className="product">
      <div>{props.name}</div>
      <div>
        <br />
      </div>
      <div>$ {props.price}</div>
    </div>
  );
}

export default Products;
