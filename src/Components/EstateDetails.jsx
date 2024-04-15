import { Link, useLoaderData, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
const EstateDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Propery Details";
    }, []);

    useEffect(() => {
        if (estates) {
            setLoading(false);
        }
    }, [estates]);

    const estate = estates.find(estate => estate.id === intId);
    return (
        <div className="my-8">
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="w-[50%] h-cover">
                <img 
                    src={estate.image} 
                    className=" object-cover object-center h-full rounded-l-2xl" 
                />
            </div>

            <div className="card-body w-[50%] gap-4">
                <div className="flex gap-3 text-lg justify-center items-center text-gray-500">
                    <MdLocationOn />
                    <p>{estate.location}</p>
                </div>
                <h2 className="card-title font-bold text-4xl">{estate.estate_title}</h2>
                <p className="text-gray-500 text-xl text-semibold">{estate.segment_name}</p>
                <hr />
                <div className="flex justify-between">
                    <h2 className="font-bold text-4xl text-red-600">{estate.price} <span className="text-base text-gray-600 text-normal">per night</span></h2>
                    <h2 className="font-bold text-2xl text-white bg-emerald-400 p-2 px-8 rounded-lg">{estate.status}</h2>
                </div>
                <p className="text-gray-500 text-lg text-semibold">{estate.area}</p>
                <p className="text-xl font-black">Facilities</p>
                <div className="flex justify-evenly gap-10">
                    {
                        estate.facilities.map(facilitie => <p className="bg-[#fbebd6] p-3 rounded-lg text-center text-lg font-semibold text-gray-800">{facilitie}</p>)
                    }
                </div>
                <p className="text-gray-800 font-bold text-xl">Description:</p>
                <p className="text-gray-600 text-lg break-words flex-wrap ">{estate.description}</p>
                <div className="card-actions justify-end">
                <Link to="../" className="btn bg-[#ff6725] text-white">Go Back</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EstateDetails;