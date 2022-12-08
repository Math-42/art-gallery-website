import Logo from "components/logo/Logo";
import React, { useRef } from "react";
import styles from 'styles/navbar.module.css'
import Navlink from "./Navlink";
import Popup from 'reactjs-popup';
import Login from "components/login/Login";
import { RiSearchLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi"
export default function Navbar(props) {
	const menuRef = useRef(null);	
	const teste = (e) => {
		console.log(e.currentTarget)
		console.log(menuRef.current.style.top)
		// menuRef.styles.left = '0';

		if (menuRef.current.style.top == '-100%') {
			// menuRef.current.style.left = '-100%';
			menuRef.current.style.top = '10vh'
		} else {
			// menuRef.current.style.left = '0px';
			menuRef.current.style.top = '-100%'
		}
	}

	return (
		<>
			<div className={styles.container}>
				<Logo />
				<div className={styles.navlinksHorizontalContainer}>
					<div className={styles.searchBar}>
						<input type="text" placeholder="BUSCAR" />
						<div>
							<RiSearchLine />
						</div>

					</div>
					<Navlink currPage={props.page} text="home" link="" />
					<Navlink currPage={props.page} text="galeria" link="gallery" />
					<Navlink currPage={props.page} text="sobre nós" link="about-us" />

					<Popup trigger={
						<div className={styles.navlinks}>
							<a>Perfil</a>
						</div>
					} modal>
						<Login link="gallery"></Login>
					</Popup>

					<Navlink currPage={props.page} text="carrinho" link="cart" />
				</div>
				<a className={styles.hamburger} onClick={teste}>
					<GiHamburgerMenu></GiHamburgerMenu>
				</a>
			</div>
			<div className={styles.navlinksVerticalContainer}>
				<div className={styles.verticalMenu} ref={menuRef}>

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
					<Navlink currPage={props.page} text="FAQ" link="faq" />
				</div>
			</div>
		</>
	)
}