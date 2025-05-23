import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [Red, setRed] = useState("btn-danger opacity-25");
	const [Yellow, setYellow] = useState("btn-warning opacity-25");
	const [Green, setGreen] = useState("btn-success opacity-25");
	

	const redLight = () => {
		if (Red === "btn-danger opacity-25") {
			setRed("btn-danger");
		} else {
			setRed("btn-danger opacity-25");
		}
	};

	const yellowLight = () => {
		if (Yellow === "btn-warning opacity-25") {
			setYellow("btn-warning");
		} else {
			setYellow("btn-warning opacity-25");
		}
	};

	const greenLight = () => {
		if (Green === "btn-success opacity-25") {
			setGreen("btn-success");
		} else {
			setGreen("btn-success opacity-25");
		}
	};

	
	
	return (
		<div className="d-flex justify-content-evenly">
			<div className="d-flex flex-column align-items-center justify-content-center mt-5">
				<div className="bg-dark" style= {{ width: "40px", height: "120px" }}></div>
				<div className="bg-dark" style={{ width: "150px", height: "auto", paddingBottom: "50px", borderRadius: '30px' }}>
					<div className="d-flex flex-column" aria-label="Basic mixed styles example">
						<button type="button" className={`btn ${Red} mt-5 mx-4 rounded-circle`} style={{ height: "90px" }} onClick={redLight}>
						</button>
						<button type="button" className={`btn ${Yellow} mt-5 mx-4 rounded-circle`} style={{ height: "90px" }} onClick={yellowLight}>
						</button>
						<button type="button" className={`btn ${Green} mt-5 mx-4 rounded-circle`} style={{ height: "90px" }} onClick={greenLight}>
						</button>
                    
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;