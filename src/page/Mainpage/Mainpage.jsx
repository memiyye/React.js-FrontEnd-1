import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "./../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

function Mainpage() {
    const [pageData, setPageData] = useState(null);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Newslist");
    };

    useEffect(() => {
        setPageData(data);
    }, []);

    if (!pageData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex h-screen">
            <div
                className="absolute w-[150px] h-[150px]"
                style={{
                    backgroundImage: `url("/src/images/whiteHT.jpg")`,
                    backgroundSize: "60%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 1,
                    // opacity: 0.95,
                }}
            />

            <div className="absolute w-[3.5%] h-[80%] bg-white"
                style={{
                    bottom: 0,
                    zIndex: 1,
                }} >
                <div
                    style={{
                        position: "absolute",
                        width: '12px',
                        height: '12px',
                        left: 20,
                        bottom: 25,
                        backgroundColor: 'red',
                        borderRadius: '50%',
                    }}
                />
            </div>

            <div className="relative flex flex-col justify-center items-center w-2/3 h-screen">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("/src/images/1.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: -1,
                    }} />

                <div className="relative flex flex-col bg-red-600 bg-opacity-95 w-full h-full">
                    <div className="relative flex flex-col w-full h-full" style={{ marginTop: '150px', marginLeft: '200px' }}>
                        <h1 className="font-abril text-2xl text-white cursor-pointer">
                            {pageData.time}
                        </h1>

                        <h1 className="font-abril text-[8rem] text-white cursor-pointer">
                            <span className="block mt-[-40px]">{pageData.title.split(" ")[0]}</span>
                            <span className="block mt-[-90px]">{pageData.title.split(" ").slice(1).join(" ")}</span>
                        </h1>

                        <h1
                            className="text-1xl text-white mt-[-30px] mb-[20px] w-[40%] line-clamp-2 overflow-hidden text-ellipsis"
                        >
                            {pageData.text}
                        </h1>

                        <div className="flex items-center gap-[10px]">
                            <div className="w-[40px] h-[40px] flex flex-col justify-between">
                                {[...Array(7)].map((_, index) => (
                                    <div key={index} className="w-full h-[1px] bg-white" />
                                ))}
                            </div>

                            <h1 onClick={handleClick}
                                className="text-1xl font-bold text-red-600 cursor-pointer transition-colors duration-300 hover:text-green-500 bg-white
                                pt-2 pb-2 w-[130px] text-center">
                                GÖRÜNTÜLE
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-1/3 h-screen flex flex-col items-center space-y-4 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1/3 before:bg-gradient-to-t before:from-white/30 before:to-white before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/3 after:bg-gradient-to-b after:from-white/30 after:to-white after:z-10">
                <Swiper
                    direction="vertical"
                    spaceBetween={0}
                    slidesPerView="6"
                >
                    {pageData.items.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            style={{ alignSelf: "center" }}
                            className=" text-[14px] flex items-center pt-6 pb-5 py-3 justify-center w-2/3 text-center border-b border-gray-400"
                        >
                            <div className="flex flex-col items-center">
                                <div className="text-center text-[50px] font-bold text-gray-200 ">{item.id}</div>
                                <div className="text-left text-[16px] w-full text-black mt-[-30px] bg-white ">{item.title}</div>
                            </div>


                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}

export default Mainpage;
