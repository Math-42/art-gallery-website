import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import React from "react";


export default function Page(props) {
	return (
		<>
			<Navbar />
			<main>
				{props.children}
			</main>
			<Footer />
		</>
	)
}