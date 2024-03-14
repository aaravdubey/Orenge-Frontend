import { useNavigate } from "react-router-dom";

const HomeCard = ({ imgSrc, name, loc }) => {
  const navigate = useNavigate();

  return <div className=" bg-transparent rounded-lg border-0 cursor-pointer hover:scale-95 transition-all" onClick={() => navigate('/')}>
    <img className="rounded-lg" src={imgSrc} alt="" />
    <div className="">
      <h5 className="my-2 text-l font-bold tracking-tight text-gray-700">{name}</h5>
      <p className="mb-3 font-normal text-sm text-gray-500 font-semibold flex gap-0.5">{loc}</p>
    </div>
  </div>
}

export default HomeCard;