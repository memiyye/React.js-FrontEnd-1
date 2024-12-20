import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Leftbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [selectedText, setSelectedText] = useState(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClick2 = () => {
        navigate('/');
    };



    return (
        <div
            className={`fixed top-0 left-0 h-full transition-all duration-300 ${isOpen ? 'w-[30%] bg-red-600' : 'w-16 bg-white border-r-2'}`}
            style={{ zIndex: 10 }}>

            <button className='bg-red-600 w-16 h-1/5'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }} onClick={handleClick2}>
                <img
                    src="/src/images/whiteHT.jpg"

                    className="object-cover w-10 h-auto ml-2"
                />
            </button>
            <div
                style={{
                    position: "absolute",
                    width: '12px',
                    height: '12px',
                    left: 25,
                    bottom: 25,
                    backgroundColor: isOpen ? 'white' : 'red',
                    borderRadius: '50%',
                }}
            />

            <div
                onClick={handleClick}
                className="w-full h-full flex items-center justify-center cursor-pointer">
                {!isOpen && (
                    <h1 className="text-white  flex items-center justify-center">
                        <span className="w-0.5 h-6 bg-black mx-1"></span>
                        <span className="w-0.5 h-6 bg-black mx-1.1"></span>
                    </h1>
                )}


                {isOpen && (
                    <div>
                        <div className="relative flex items-center justify-center"
                            style={{
                                position: "absolute",
                                left: 10,
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "30px",
                                height: "30px",
                            }}>
                            <span
                                className="absolute w-full h-0.5  rotate-45"
                                style={{ backgroundColor: "white" }} />
                            <span
                                className="absolute w-full h-0.5 -rotate-45"
                                style={{ backgroundColor: "white" }} />
                        </div>
                        <div className="w-full h-full flex items-center justify-center text-white text-[30px]">
                            <div className="flex flex-col items-center">
                                {['Anasayfa', 'Gündem', 'Ekonomi', 'Spor', 'Magazin', 'Dünya', 'Teknoloji', 'Sağlık'].map((text) => (
                                    <div key={text}
                                        className={`cursor-pointer mb-1   rounded transition-colors duration-200 font-bold
                            ${selectedText === text ? 'text-red-700' : 'text-white'} 
                            hover:text-red-500`}
                                        onClick={() => handleClick2(text)}>
                                        {text}
                                    </div>
                                ))}
                                <div className="absolute left-20 bottom-10 flex flex-col ">
                                    <div className="flex mb-2 ">
                                        <img
                                            src="/src/images/facebook.jpg"
                                            className="w-2 object-contain mr-2"
                                        />
                                        <img
                                            src="/src/images/twitter.jpg"
                                            className="w-4 object-contain mr-2"
                                        />
                                        <img
                                            src="/src/images/linkedin.jpg"
                                            className="w-4 object-contain"
                                        />
                                    </div>
                                    <div className="text-white text-[10px] w-2/3">Copyright © 2017 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Leftbar;
