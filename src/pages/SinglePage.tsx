import { useLocation, useNavigate } from "react-router-dom";
import { ProductType } from "./Dashboard"; 
import { SlArrowLeft } from "react-icons/sl";
const SinglePage = () => {
  const location = useLocation();
  const { product } = location.state as { product: ProductType };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#ac0303]">
      <div className="w-[900px] bg-white relative items-center px-[50px] object-cover flex h-[500px] rounded-[20px]">
      <img
              src={product.images}
              alt={product.brand}
              className="mx-auto object-contain  h-[400px] w-[400px] rounded-lg mb-4"
            />
            <div>
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        {product.title}
      </h1>
              <h3 className="text-justify w-[400px]">{product.description}</h3>
      <button onClick={() => navigate(-1)} className="absolute top-7 left-7 scale-150"><SlArrowLeft /></button>
            </div>
      </div>
    </div>
  );
};

export default SinglePage;