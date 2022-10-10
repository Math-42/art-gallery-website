import Link from "next/link"
import React from "react"
import styles from "styles/navbar.module.css"

export default function Navlink({link, text, currPage}) {
	console.log(link, currPage)
	return (
		<>
			<div className={((currPage != link )? styles.navlinks : styles.navlinksDisable)} >
				<Link href={`/${link}`}>
					<a>{text}</a>
				</Link>
			</div>
		</>
	)
}