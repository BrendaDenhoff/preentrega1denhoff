import "./styles.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => <div className="item">
    <Card>
      <img alt={product.name} src={product.image} className="product-img" />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardSubtitle tag="h6">
          ${product.price}
        </CardSubtitle>
        <Button>
          <NavLink to={`product/${product.id}`}>
            Ver detalle
          </NavLink>
        </Button>
      </CardBody>
    </Card>
  </div>;

export default Item;