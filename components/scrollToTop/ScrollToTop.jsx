import React from "react";
import { RiArrowUpSLine } from "react-icons/ri"
import styles from "styles/ScrollToTop.module.css";

export default function ScrollToTop() {
	return (
		<div className={styles.scrollToTop}>
			<RiArrowUpSLine />
		</div>
	)
}
