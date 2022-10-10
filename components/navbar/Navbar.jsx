import Logo from "components/logo/Logo";
import Link from "next/link";
import React from "react";
import styles from 'styles/navbar.module.css'
import Navlink from "./Navlink";
import Popup from 'reactjs-popup';
import Login from "components/login/Login";

export default function Navbar(props) {
	return (
		<>
			<div className={styles.container}>
				<Logo />
				<div className={styles.navlinksContainer}>
					<Navlink text="home" link="" />
					<Navlink text="galeria" link="gallery" />
					<Navlink text="sobre nós" link=""/>

					<Popup trigger={
						<div className={styles.navlinks}>
								<a>Perfil</a>
						</div>
					} modal>
						<Login link="gallery"></Login>
					</Popup>

					<Navlink text="carrinho" link="cart"/>
				</div>
			</div>
		</>
	)
}