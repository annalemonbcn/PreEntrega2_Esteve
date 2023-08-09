import Cart from "../Cart";

const ItemView = ({ imgSrc, imgAlt, name, camera, price, measures, path }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-6 box-border itemsContainer">
      <div className="bg-soft-grey w-full h-[400px] p-5 box-border">
        <a className="" href="/">
          <img className="max-h-full mx-auto relative top-1/2 transform -translate-y-1/2" src={imgSrc} alt={imgAlt} />
        </a>
      </div>

      <div className="pb-5 px-4 mt-5">
        <a href="/">
          <h5 className="text-gray-700 italic ">{name}</h5>
          <p className="text-sm text-gray-700">{camera}</p>
          <p className="text-sm text-gray-700">{measures}</p>
        </a>
        <div className="flex items-center justify-between mt-6">
          <span className="text-gray-500 font-bold text-lg">{price} €</span>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ItemView;