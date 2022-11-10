import Logo from "components/logo/Logo";
import React from "react";
import styles from 'styles/navbar.module.css'
import Navlink from "./Navlink";
import Popup from 'reactjs-popup';
import Login from "components/login/Login";
import { RiSearchLine } from "react-icons/ri";

export default function Navbar(props) {
	return (
		<>
			<div className={styles.container}>
				<Logo />
				<div className={styles.navlinksContainer}>
					<div className={styles.searchBar}>
						<div>
							<RiSearchLine />
						</div>
						<input type="text" placeholder="BUSCAR" />

					</div>
					<Navlink currPage={props.page} text="home" link="" />
					<Navlink currPage={props.page} text="galeria" link="gallery" />
					<Navlink currPage={props.page} text="sobre nós" link="about-us" />

					<Popup trigger={
						<div className={styles.navlinks}>
							<a>Perfil</a>
						</div>
					} modal>
						<Login link=''></Login>
					</Popup>

					<Navlink currPage={props.page} text="carrinho" link="cart" />
				</div>
			</div>
		</>
	)
}
