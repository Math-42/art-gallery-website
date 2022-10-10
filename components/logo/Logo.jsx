import Link from "next/link";
import React from "react";
import styles from "styles/Logo.module.css"

export default function Logo() {
	return (
		<>
			<Link href="/">
				<h1 className={styles.logo}>
					IHC
				</h1>
			</Link>
		</>
	)
}