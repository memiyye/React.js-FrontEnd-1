import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import data from "./../../data.json";
import Leftbar from "../LeftBar/Leftbar";

function Newdetail() {
    const { id } = useParams(); // URL'deki id parametresini al
    const navigate = useNavigate(); // Sayfalar arası yönlendirme için kullan
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (id) {
            // ID'ye göre öğeyi bul
            const item = data.items.find((item) => item.id === id);
            setSelectedItem(item || data.items[0]); // Eğer id bulunamazsa ilk öğeyi seç
        } else {
            // Eğer id yoksa ilk öğeye yönlendir
            navigate(`/Newdetail/${data.items[0].id}`);
        }
    }, [id, navigate]);

    if (!selectedItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex h-screen">
            <Leftbar />

            <div className="w-[30%] bg-white h-full pl-16">
                <Swiper
                    direction="vertical"
                    spaceBetween={10}
                    slidesPerView={5}
                    className="h-full"
                >
                    {data.items.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className={`flex items-center justify-start p-4 cursor-pointer ${selectedItem?.id === item.id ? "bg-yellow-100" : "bg-transparent"
                                }`}
                        >
                            <button
                                className="flex flex-col mb-5"
                                onClick={() => navigate(`/Newdetail/${item.id}`)} // ID'ye göre URL oluştur
                            >
                                <div className="text-[40px] font-bold text-gray-300">{item.id}</div>
                                <div className="flex">
                                    <img
                                        className="w-1/3 h-auto object-cover mr-4 mt-[-17px]"
                                        src={item.images}
                                        alt={`Image for item ${item.id}`}
                                    />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-black font-bold text-[14px]">{item.title}</p>
                                        <p className="text-gray-600 text-[12px] mt-2">{item.date.updated}</p>
                                    </div>
                                </div>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-[70%] bg-yellow-100 h-full p-6 overflow-y-auto">
                <div className="text-black space-y-6 max-h-full">
                    <div className="w-3/5 ml-20 border-b-2 border-gray-300 pb-5">
                        <p className="text-[30px] w-2/3 font-bold">{selectedItem.title}</p>
                        <p className="text-[14px] text-black mt-2 overflow-hidden overflow-ellipsis line-clamp-2">
                            {selectedItem.detay}
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            className="w-[95%] h-auto object-cover mt-5 mx-auto mb-5"
                            src={selectedItem.images}
                            alt={`Image for item ${selectedItem.id}`}
                        />

                        <div className="text-[14px] pl-[70px] w-[90%] transform pt-2 text-black bg-yellow-100 space-y-4">
                            {Array.isArray(selectedItem.content) &&
                                selectedItem.content.map((item, index) => (
                                    <p key={index} style={{ marginTop: 20 }}>
                                        {item.value}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newdetail;
