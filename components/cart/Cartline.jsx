import React, { useState } from "react";
import styles from "styles/Cartline.module.css"
import { FaTrash, FaImage } from "react-icons/fa";

export default function Cartline({ product }) {
	const [quantity, quantitySetter] = useState(1);
	let price = Math.sqrt(product.year * 100);
	return (
		<>
			<div className={styles.cartTable}>
				<FaTrash />
				<FaImage />
				<div>
					<h1>{product.name}</h1>
					<p>{product.artist.name}-{product.year}</p>
				</div>
				<p>{price.toFixed(2)}</p>
				<div>
					<input type="number" min={1} value={quantity} onChange={(evt) => quantitySetter(evt.target.value)}/>
				</div>
				<p>{(quantity * price).toFixed(2)}</p>
			</div>
		</>
	)
}