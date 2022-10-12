import React from "react";
import styles from "styles/Cart.module.css"
import { FaWindowClose } from "react-icons/fa";
import Cartline from "./Cartline";
import data from "data/data.json"
import Link from "next/link";
import Popup from 'reactjs-popup';
import Login from "components/login/Login";

export default function Cart(props) {

	return (
		<>
			<div className={styles.cartTable}>
				<p></p>
				<p></p>
				<p>Produto</p>
				<p>Preço</p>
				<p>Quantidade</p>
				<p>Total</p>
			</div>
			<Cartline product={data[0]} />
			<Cartline product={data[1]} />
			<Cartline product={data[2]} />
			<div className={styles.cartFooter}>
				<div>
					<input type="text" />
					<button>Aplicar cupom</button>
				</div>
				<Popup trigger={
					<button>Finalizar compra</button>
				} modal>
					<Login link="checkout"></Login>
				</Popup>
			</div>
		</>
	)
}