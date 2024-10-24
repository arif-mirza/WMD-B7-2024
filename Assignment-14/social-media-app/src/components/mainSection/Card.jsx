

const  Card = ({name  , img, status} ) => {
  return (
    <>
    <div>
      <div className="relative">
      <img
          className="h-40 md:h-60 w-52 rounded-2xl hover:scale-105 duration-700 ease-in-out cursor-pointer shadow-lg"
          src={img}
          alt={name}
        />
        <p className="absolute bottom-4 left-1 text-sm font-medium text-white font-roboto no-underline leading-none">{name}</p>
        <p
          className={`${
            status === "Offline"
              ? "absolute bottom-4 right-1 text-sm font-medium text-red-600 font-roboto no-underline leading-none"
              : "absolute bottom-4 right-4 text-sm font-medium text-green-600 font-roboto no-underline leading-none"
          }`}
        >
          {status}
        </p>

      </div>
    </div>
    
    </>
  )
}

export default Card
