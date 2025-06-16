import React, { useState } from "react";

const Home = () => {
	// single state to track active light
	const [activeLight, setActiveLight] = useState(null); // can be "red", "yellow", "green"

	// function to toggle a light
	const toggleLight = (color) => {
		if (activeLight === color) {
			setActiveLight(null); // turn off if already active
		} else {
			setActiveLight(color); // activate selected light
		}
	};

	return (
		<div className="d-flex justify-content-evenly">
			<div className="d-flex flex-column align-items-center justify-content-center mt-5">
				<div className="bg-dark" style={{ width: "40px", height: "120px" }}></div>
				<div
					className="bg-dark"
					style={{
						width: "150px",
						height: "auto",
						paddingBottom: "50px",
						borderRadius: "30px",
					}}
				>
					<div className="d-flex flex-column" aria-label="Traffic Light">
						<button
							type="button"
							className={`btn btn-danger mt-5 mx-4 rounded-circle ${
								activeLight === "red" ? "" : "opacity-25"
							}`}
							style={{ height: "90px" }}
							onClick={() => toggleLight("red")}
						></button>
						<button
							type="button"
							className={`btn btn-warning mt-5 mx-4 rounded-circle ${
								activeLight === "yellow" ? "" : "opacity-25"
							}`}
							style={{ height: "90px" }}
							onClick={() => toggleLight("yellow")}
						></button>
						<button
							type="button"
							className={`btn btn-success mt-5 mx-4 rounded-circle ${
								activeLight === "green" ? "" : "opacity-25"
							}`}
							style={{ height: "90px" }}
							onClick={() => toggleLight("green")}
						></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;