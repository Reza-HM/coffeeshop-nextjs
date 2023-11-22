import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const ProductsDetails = ({ data }) => {
  return (
    <div className="flex items-center justify-center mb-5 text-white py-20">
      <img src={data.img} alt="" className="mb-3 mr-10 h-48 w-48 rounded-lg" />

      <div className="max-w-md">
        <h4 className="mb-3 text-xl font-bold text-black">{data.title}</h4>

        <hr className="border-black border" />

        <div className="flex mb-2 pt-4">
          {new Array(Math.trunc(data.score)).fill().map(() => (
            <FaStar className="w-5 h-5 text-yellow-400" />
          ))}
          {new Array(5 - Math.trunc(data.score)).fill().map(() => (
            <FaStar className="w-5 h-5 text-gray-300" />
          ))}
        </div>

        <div className="flex mb-2">
          {data.off ? (
            <>
              <p className="text-sm line-through text-black">${data.price}</p>
              <p className="ml-2 text-xl font-bold text-black">
                ${data.price - (data.price * data.off) / 100}
              </p>
            </>
          ) : (
            <p className="text-xl font-bold text-black">${data.price}</p>
          )}
        </div>

        <p className="text-gray-600">{data.desc}</p>

        <button className="bg-black rounded-lg px-3 py-2 flex items-center text-white hover:bg-black/70 mt-4">
          <FaShoppingBag className="w-5 h-5 mr-2" />
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
