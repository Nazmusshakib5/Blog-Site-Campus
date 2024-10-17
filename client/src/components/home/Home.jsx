import React from 'react';

const Home = () => {
    return (
        <>
            <div className='text-black mt-24 bg-neutral-950 py-20' id='home'>
                <div className='w-full grid grid-cols-12 justify-between  px-16 gap-16'>
                    <div className=' col-span-8 shadow-sm shadow-neutral-500'>
                        <img src='https://c.wallhere.com/photos/fe/ec/africa_light_portrait_black_men_smile_night_laughing-941444.jpg!d'
                        className='rounded-lg'
                        />
                    </div>
                    <div className=' col-span-4 flex flex-col justify-between '>
                        <div className='shadow-sm shadow-neutral-500'>
                            <img src='https://wallpaperaccess.com/full/241896.jpg' className='rounded-lg '/>
                        </div>
                        <div className='shadow-sm shadow-neutral-500'>
                            <img src='https://tse3.mm.bing.net/th?id=OIP.Wza4T4ZaTzu_GB5RVCz1AQHaEo&pid=Api&P=0&h=220'
                                 className='w-full rounded-lg'/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;