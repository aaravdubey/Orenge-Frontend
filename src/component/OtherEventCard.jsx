import { useNavigate } from "react-router-dom";

const OtherEventCard = ({ imgSrc, name }) => {
  const navigate = useNavigate();

  return <div className=" bg-transparent rounded-lg border-0 cursor-pointer hover:scale-95 transition-all" onClick={() => navigate('/')}>
    <img className="rounded-lg" src={imgSrc} alt="" />
    <div className="">
      <p className="my-2 text-sm font-semibold tracking-tight text-gray-700">{name}</p>
    </div>
  </div>
}

export default OtherEventCard;