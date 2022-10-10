import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import ScrollToTop from "components/scrollToTop/ScrollToTop";
import React from "react";
import { ToastContainer } from "react-toastify";


export default function Page(props) {
	return (
		<>
			<Navbar page={props.name} />
			<main>
				{props.children}
			</main>
			<ScrollToTop />
			<Footer />
			<ToastContainer
				position="bottom-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	)
}