import React from "react";

const ItemDetailView = ({ data }) => {
  return (
    <div>
      {data.length === 0 ? (
        <p>Cargando</p>
      ) : (
        <div>
          <h2>{data.title}</h2>
          <div>
            <img src={data.image} alt={data.title} />
            <div id="productInfo">
              <p>{data.category}</p>
              <p>{data.description}</p>
              {/* <p>{data.rating.rate}</p> */}
              <p>{data.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailView;
