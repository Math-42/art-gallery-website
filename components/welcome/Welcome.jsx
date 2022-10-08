import React from "react";
import styles from "styles/Welcome.module.css"

export default function Welcome({ welcome, description, image }) {
	return (
		<>
			<div className={styles.container}>
				<h1>
					{welcome}
				</h1>
				<div className={styles.figure}>
					<img src={image} alt="" />
					<div className={styles.caption}>
						<h2>{description.title}</h2>
						<p>{description.subtitle}</p>
					</div>
				</div>
			</div>
		</>
	)
}