import Link from "next/link"
import React from "react"
import styles from "styles/navbar.module.css"

export default function Navlink({link, text}) {
	return (
		<>
			<div className={styles.navlinks}>
				<Link href={`/${link}`}>
					<a>{text}</a>
				</Link>
			</div>
		</>
	)
}