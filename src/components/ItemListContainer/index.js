import "./styles.css";
import { Spinner } from "reactstrap";
import { products } from "../../utils/products";
import { customFetch } from "../../utils/customFetch";
import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [load, setLoad] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoad(false);
    customFetch(products).then((res) => {
      if (category) {
        setProductsList(res.filter((p) => p.category === category));
        setLoad(true);
      } else {
        setProductsList(res);
        setLoad(true);
      }
    });
  }, [category]);

  return (
    <>
      <h1>Bienvenido!</h1>
      {load ? (
        <ItemList products={productsList} />
      ) : (
        <div>
          <Spinner color="light"></Spinner>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;