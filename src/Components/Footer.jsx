import { FaHotel } from "react-icons/fa6"
const Footer = () => {
    return (
        <div>
            <div className="relative mt-28 bg-white">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                fill="white"
                d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <a
                    href="/"
                    aria-label="Go home"
                    title="Company"
                    className="inline-flex items-center"
                    >
                    <FaHotel className="text-2xl"/>
                    <span className="ml-2 text-xl font-bold tracking-wide text-black-100 uppercase">
                        Stay Nest
                    </span>
                    </a>
                    <div className="mt-4 lg:max-w-sm">
                    <p className="text-sm text-deep-purple-50">
                         Stay Nest Real Estate specializes in hotels and motels, offering exceptional properties for discerning travelers.
                    </p>
                    <p className="mt-4 text-sm text-deep-purple-50">
                         Discover unparalleled comfort and luxury at Stay Nest, where every detail is meticulously curated to ensure an unforgettable experience for guests of our hotels and motels.
                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                        Category
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Hotels
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Motels
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Resorts
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Guest House
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                        Business
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Rent
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Buy
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                        Availabe States
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Dhaka
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Barishal
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Chottogram
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Shylhet
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Rajshahi
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                        Services
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Infopreneur
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Personal
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Forum
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                <p className="text-sm text-black-100">
                    © Copyright 2024 Stay Nest Inc. All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-black">
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;