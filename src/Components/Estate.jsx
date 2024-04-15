import { Link } from "react-router-dom";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { IoResizeOutline } from "react-icons/io5";
import { ImPriceTags } from "react-icons/im";
const Estate = ({estate}) => {
    if (!estate) {
        return <div>.</div>;
    }
    const {estate_title, segment_name, description,price,status,area, location, facilities, image, id} = estate;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body flex flex-col gap-5">
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
                        <div className="flex gap-1 align-middle items-center text-lg font-semibold text-green-600">
                            <GrStatusGoodSmall />
                            <p>{status}</p>
                        </div>
                    </div>
                    <p>{segment_name}</p>
                </div>
                <hr />
                <div className="flex gap-5 justify-evenly">
                    <p className="flex gap-1 justify-center items-center border-2 border-[#ff6725] rounded-full"><IoResizeOutline /> {area}</p>
                    <p className="flex gap-1 justify-center items-center border-2 border-[#ff6725] rounded-full"><MdLocationOn /> {location}</p>
                </div>
                <div className="card-actions justify-between items-center pt-5">
                    <div className="flex gap-2 justify-center items-center text-3xl font-bold">
                        <h2>{price} <span className="text-sm font-normal">per night</span></h2>
                    </div>
                    <Link to={`/Estate/${id}`} className="btn bg-[#ff6725] text-bold text-white">View Property</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Estate;