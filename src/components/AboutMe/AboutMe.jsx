

const AboutMe = () => {
    return (
        <div className="hero mt-14 glass">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/RDhsz9V/Whats-App-Image-2023-10-15-at-15-10-03-8005dcec.jpg"
                    className="max-w-sm w-80 rounded-xl" />
                <div className="mb-6 ml-20 text-2xl text-slate-700">
                    <p className="mb-2">About Me</p>
                    <hr />
                    <h1 className="text-3xl mt-2 font-bold">Afsana <span
                        className="text-[#ca6598]" >Jannat</span></h1>
                    <p className="py-6">Hello there! I'm Afsana Jannat, and I hail from the beautiful city of Barisal. Currently, I'm immersed in the fascinating world of software engineering at Daffodil International University. I strongly believe in the power of coding to create, innovate, and solve real-world problems. My motto: "Coding with passion, shaping the future." I'm dedicated to crafting innovative solutions and embracing
                        the endless possibilities that coding offers. Let's embark on this exciting journey together!</p>
                    <p className="mb-4 mt-4 text-center text-3xl text-[#79435e] font-bold">
                        My Skills
                    </p>
                    <hr />
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div>
                            <p className="mt-2 text-xl font-bold">
                                # FORNT END
                            </p>
                            <p className="mt-2 text-xl font-semibold">
                                Html, Css, Tailwind Css, JavaScript, React
                            </p>
                            <p className="mt-2 text-xl font-bold">
                                # BACK END
                            </p>
                            <p className="mt-2 text-xl font-semibold">
                                Node Js, Express Js
                            </p>
                        </div>

                        <div className="ml-8">
                            <p className="mt-2 text-xl font-bold">
                                # DATABASE
                            </p>
                            <p className="mt-2 text-xl font-semibold">
                                MongoDB
                            </p>
                            <p className="mt-2 text-xl font-bold">
                                # AUTHENTICATION
                            </p>
                            <p className="mt-2 text-xl font-semibold">
                                Firebase, Jwt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;