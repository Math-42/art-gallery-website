import Logo from "components/logo/Logo";
import Link from "next/link";
import React from "react";
import styles from 'styles/navbar.module.css'
import Navlink from "./Navlink";

export default function Navbar() {
	return (
		<>
			<div className={styles.container}>
				<Logo/>
				<div className={styles.navlinksContainer}>
					<Navlink text="home" link="" />
					<Navlink text="galeria" link="gallery" />
					<Navlink text="sobre nós" link=""/>
					<Navlink text="perfil" link=""/>
					<Navlink text="carrinho" link="cart"/>
				</div>
			</div>
		</>
	)
}