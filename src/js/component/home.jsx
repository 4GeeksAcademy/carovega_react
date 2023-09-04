import React from "react";
import Nav from './nav.jsx';
import Jumbotron from "./jumbotrom.jsx";
import Cards from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="content">
			
			<Nav/>
			<div className="contentPrinc mx-5">
				<Jumbotron/>
								
			</div>
			<div className="contentcard mx-5 d-flex justify-content-between">
				<Cards/>
				<Cards/>
				<Cards/>
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
