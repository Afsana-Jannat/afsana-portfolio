

const Banner = () => {
    return (
        <div className="mt-4">
            <div className="hero">
                <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
                    <div>
                        <img src="https://i.ibb.co/D4Cr2DD/Whats-App-Image-2023-11-03-at-20-06-21-06e39302.jpg"
                            className="max-w-sm rounded-full
                         w-80 h-96" />
                    </div>
                    <div>
                        <p className=" text-slate-800 font-bold">Hi, I'm Afsana Jannat</p>
                        <h1 className="text-3xl mt-2 text-slate-700 font-bold">I'm Full Stack <br />
                            <span className="text-[#895eb6]">Mern</span> Developer</h1>
                        <p className="py-6"></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;