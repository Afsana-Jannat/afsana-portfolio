

// const Cv = () => {
//     return (
//         <div className="font-bold mt-6 mb-6 text-center text-black">
//             <h2>LEARN MORE ABOUT ME</h2>
//             <h2 className="mt-4 text-xl text-orange-900">SEE MY RESUME: <br />
//                 https://drive.google.com/file/d/1BlMVtfzjLsEnviMF2RFpZm1dxZW2swzo/view?usp=sharing
//             </h2>
//         </div>
//     );
// };

// export default Cv;




const Cv = () => {
    const onButtonClick = () => {
        const pdfUrl = "https://drive.google.com/file/d/1EmpwIzBhL8SB9af2R7i0L0bK0ix6D-3V/view?usp=sharing";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div>
            <center>
                <h1 className="font-bold text-2xl mt-6 mb-4 text-center text-black">LEARN MORE ABOUT ME</h1>
                <h3 className="font-bold text-xl mt-6 mb-6 text-center text-black">
                    Click on below button to download PDF <br />
                    <span className="text-orange-600"> My Resume</span>
                </h3>
                <button className="btn mb-6 bg-pink-500 text-white" onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </div>
    );
};

export default Cv;