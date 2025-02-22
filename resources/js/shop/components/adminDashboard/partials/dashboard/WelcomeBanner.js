import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../../context/user/Context";

function WelcomeBanner() {
    const { user } = useContext(UserContext);
    const [greet, setGreet] = useState("Hello")


    useEffect(() => {
        var today = new Date()
        var curHr = today.getHours()

        if (curHr < 12) {
            setGreet('Good morning,')
        } else if (curHr < 18) {
            setGreet('Good afternoon,')
        } else {
            setGreet('Good evening,')
        }
    }, [])

    return (
        <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
            {/* Background illustration */}
            <div
                className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
                aria-hidden="true"
            >
                <svg
                    width="319"
                    height="198"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <defs>
                        <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
                        <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
                        <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
                        <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="welcome-b"
                        >
                            <stop stopColor="#A5B4FC" offset="0%" />
                            <stop stopColor="#818CF8" offset="100%" />
                        </linearGradient>
                        <linearGradient
                            x1="50%"
                            y1="24.537%"
                            x2="50%"
                            y2="100%"
                            id="welcome-c"
                        >
                            <stop stopColor="#4338CA" offset="0%" />
                            <stop
                                stopColor="#6366F1"
                                stopOpacity="0"
                                offset="100%"
                            />
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <g transform="rotate(64 36.592 105.604)">
                            <mask id="welcome-d" fill="#fff">
                                <use xlinkHref="#welcome-a" />
                            </mask>
                            <use
                                fill="url(#welcome-b)"
                                xlinkHref="#welcome-a"
                            />
                            <path
                                fill="url(#welcome-c)"
                                mask="url(#welcome-d)"
                                d="M64-24h80v152H64z"
                            />
                        </g>
                        <g transform="rotate(-51 91.324 -105.372)">
                            <mask id="welcome-f" fill="#fff">
                                <use xlinkHref="#welcome-e" />
                            </mask>
                            <use
                                fill="url(#welcome-b)"
                                xlinkHref="#welcome-e"
                            />
                            <path
                                fill="url(#welcome-c)"
                                mask="url(#welcome-f)"
                                d="M40.333-15.147h50v95h-50z"
                            />
                        </g>
                        <g transform="rotate(44 61.546 392.623)">
                            <mask id="welcome-h" fill="#fff">
                                <use xlinkHref="#welcome-g" />
                            </mask>
                            <use
                                fill="url(#welcome-b)"
                                xlinkHref="#welcome-g"
                            />
                            <path
                                fill="url(#welcome-c)"
                                mask="url(#welcome-h)"
                                d="M40.333-15.147h50v95h-50z"
                            />
                        </g>
                    </g>
                </svg>
            </div>

            {/* Content */}
            <div className="relative">
                <h1 className="flex flex-wrap text-2xl md:text-3xl text-gray-800 font-bold mb-1">
                    <span>{greet}</span> &nbsp; <span className="text-green-600 capitalize">
                        {user
                            ? (user.first_name && user.first_name) ||
                              (user.last_name && user.last_name) ||
                              user.email
                            : "..."}
                        . 👋
                    </span>
                </h1>
                <p>Here is what’s happening on this website:</p>
            </div>
        </div>
    );
}

export default WelcomeBanner;
