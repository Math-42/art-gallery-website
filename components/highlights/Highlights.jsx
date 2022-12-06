import MasonGrid from "components/gallery/MasonGrid";
import React from "react";
import styles from "styles/Highlights.module.css"
import dynamic from "next/dynamic";
import { useState, useEffect } from 'react';

function Highlights(props) {

	const size = useWindowSize();
	let n = 3;
	if (size.width < 900)
		n = 2;
	if (size.width < 550)
		n = 1;


	return (
		<>
			<div className={styles.container}>
				<div>
					<MasonGrid data={props.arts} breakpoints={n} />
				</div>
			</div>
		</>
	)

}

export default dynamic(() => Promise.resolve(Highlights), {
	ssr: false
})


function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
	  width: undefined,
	  height: undefined,
	});
  
	useEffect(() => {
	  function handleResize() {
		setWindowSize({
		  width: window.innerWidth,
		  height: window.innerHeight,
		});
	  }
	  window.addEventListener("resize", handleResize);
	  handleResize();
	  
	  return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}