import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,title, img , price} = service|| {};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-8 pt-10">
                <img src={img} alt="" className="rounded-xl h-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-[#FF3811]">Price: ${price}</p>
                <div className="card-actions">
                <Link to={`/checkout/${_id}`} >
                    <button className="btn btn-primary">Book Now</button>
                </Link>

            </div>
                
            </div>
            
        </div>
    );
};

export default ServiceCard;