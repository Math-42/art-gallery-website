import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import ScrollToTop from "components/scrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
import VLibras from 'vlibras-nextjs'

function Page(props) {
	return (
		<>
		  	{process.env.NODE_ENV === "production" && <VLibras forceOnload />}
			<AnimatePresence exitBeforeEnter>
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
			</AnimatePresence>
		</>
	)
}

export default dynamic(() => Promise.resolve(Page), {
	ssr: false
})
