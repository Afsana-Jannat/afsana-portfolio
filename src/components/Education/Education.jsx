

const Education = () => {
    return (
        <div className="glass">
            <h2 className=" ml-10 font-bold text-3xl text-orange-700">Education</h2>
            <div className="divider"></div>
            <div className=" ml-10 mb-8 grid md:grid-cols-2">
                <div>
                    <p className="text-2xl font-semibold text-purple-900">Your Education level </p>
                    <p className="mt-2 mb-4 text-xl text-pink-900">Bachelor/Honors </p>
                    <p className="text-2xl font-semibold text-purple-900">Exam/Degree Title </p>
                    <p className="mt-2 mb-4 text-xl text-pink-900">Software Engineering (SWE)</p>
                </div>
                <div>
                    <p className="text-2xl font-semibold text-purple-900">Institution</p>
                    <p className="mt-2 mb-4 text-xl text-pink-900">Daffodil International University</p>
                    <p className="text-2xl font-semibold text-purple-900">Approximate Passing Year </p>
                    <p className="mt-2 mb-4 text-xl text-pink-900">2025 </p>
                    <p className="text-2xl font-semibold text-purple-900">Current Year </p>
                    <p className="mt-2 mb-4 text-xl text-pink-900">2nd </p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Education;