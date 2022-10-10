import MasonGrid from "components/gallery/MasonGrid";
import React from "react";
import styles from "styles/Highlights.module.css"
import dynamic from "next/dynamic";

function Highlights(props) {
	return (
		<>
			<div className={styles.container}>
				<div>
					<MasonGrid data={props.arts} breakpoints={4} />
				</div>
			</div>
		</>
	)

}

export default dynamic(() => Promise.resolve(Highlights), {
	ssr: false
})