import Logo from "components/logo/Logo";
import Link from "next/link";
import React from "react";
import styles from 'styles/navbar.module.css'
import Navlink from "./Navlink";
import { BiSearch } from "react-icons/bi"

export default function Navbar(props) {
	return (
		<>
			<div className={styles.container}>
				<Logo />
				<div className={styles.navlinksContainer}>
					<div className={styles.searchBar}>
						<input type="text" placeholder="BUSCAR" />
						<div>
							<BiSearch />
						</div>
					</div>
					<Navlink currPage={props.page} text="home" link="" />
					<Navlink currPage={props.page} text="galeria" link="gallery" />
					<Navlink currPage={props.page} text="sobre nós" link="about-us" />
					<Navlink currPage={props.page} text="perfil" link="profile" />
					<Navlink currPage={props.page} text="carrinho" link="cart" />
				</div>
			</div>
		</>
	)
}