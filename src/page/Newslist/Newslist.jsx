import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "./../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Leftbar from "../LeftBar/Leftbar";

function Newslist() {
    const [pageData, setPageData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setPageData(data);
    }, []);

    if (!pageData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative flex overflow-hidden justify-between w-full">
            <Leftbar />

            <div
                className=" w-[30%] pl-16 bg-white border-r-2 border-gray-300"
                style={{ height: "100vh" }}>
                <div className="flex flex-col w-full h-full justify-center px-4">
                    <h1 className="font-abril text-1xl text-black cursor-pointer px-5">
                        {pageData.time}
                    </h1>

                    <h1 className="font-abril text-[50px] text-black px-5">
                        {pageData.title}
                    </h1>

                    <h1 className="text-[14px] text-gray-600 px-5">
                        {pageData.text}
                    </h1>
                </div>
            </div>




            <div className="flex-grow  w-[70%] ">
                <Swiper style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column' }}
                    spaceBetween={0}
                    slidesPerView="auto"
                >
                    {pageData.items.map((item, index) => (
                        <React.Fragment key={item.idx}>
                            <SwiperSlide className="w-[250px] flex-shrink-0 border-r-2 border-gray-300 text-black flex flex-col p-4">
                                <div className="text-[50px] font-bold mb-[100px] text-gray-300">{item.id}</div>
                                <div className="text-[10px] font-bold text-gray-500 mb-[15px]">{item.time}</div>
                                <div className="text-[16px] text-black font-bold leading-tight mb-[20px]">
                                    {item.text}
                                </div>
                                <img
                                    src={item.images}
                                    alt={`Image for item ${item.id}`}
                                    className="w-full h-auto object-cover mb-4"
                                />
                                <div className="text-[12px]">{item.detay}</div>


                                <button
                                    onClick={() => navigate("/newdetail")}
                                    className="text-[12px] border-2 mt-[10px] px-4 py-1 w-20 font-bold text-black "
                                >
                                    DETAY
                                </button>
                            </SwiperSlide>

                            {(index + 1) % 3 === 0 && index + 1 !== pageData.items.length && (
                                <SwiperSlide className="w-[250px] flex-shrink-0 p-4 border-r-2">
                                    <div className="text-[50px] font-bold mb-[150px] text-gray-300">REKLAM</div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div className="w-full h-full  flex justify-center items-center">
                                            <img
                                                src="/src/images/reklam.jpg"
                                                alt="Reklam"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )}
                        </React.Fragment>
                    ))}
                </Swiper>
            </div>
        </div>

    );
}

export default Newslist;
