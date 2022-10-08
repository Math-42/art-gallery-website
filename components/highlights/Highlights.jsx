import MasonGrid from "components/gallery/MasonGrid";
import React from "react";
import styles from "styles/Highlights.module.css"

export default function Highlights(props) {
	return (
		<>
			<div className={styles.container}>
				<div>
					<MasonGrid data={props.arts} breakpoints={3} />
				</div>
			</div>
		</>
	)

}