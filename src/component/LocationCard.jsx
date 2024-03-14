const LocationCard = ({ imgSrc, name }) => {
  return <div className=" bg-transparent w-20 rounded-lg border-0 flex flex-col items-center justify-start gap-2">
    <img className="rounded-lg h-20 w-20 object-contain" src={imgSrc} alt="" />
    <div className="">
      <p className="mb-3 text-sm text-gray-700 text-center">{name}</p>
    </div>
  </div>
}

export default LocationCard;