import { useEffect, useState } from "react";
import ItemListView from "../ItemListView";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  // State
  const [data, setData] = useState([]);
  const result = useParams();
  console.log(result);

  // Effects
  useEffect(() => {
    if (result.id) {
      getProductsByCategory();
    } else {
      getAllProducts();
    }
  }, [result.id]);

  // Actions
  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  const getProductsByCategory = () => {
    fetch(`https://fakestoreapi.com/products/category/${result.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  // View
  return <ItemListView data={data} />;
};

export default ItemListContainer;
