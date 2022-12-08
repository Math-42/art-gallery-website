import data from 'data/data.json'
import Page from 'components/page/Page';
import styles from "styles/productPage.module.css";
import { FaCartArrowDown, FaTags } from 'react-icons/fa';
import MasonGrid from 'components/gallery/MasonGrid';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import dynamic from 'next/dynamic';

function Gallery(props) {
	let product = props.params.product;
	product = data.filter(data => data.name === product)[0];
	const same_artist = data.filter(art => (art.artist.name == product.artist.name && art.name != product.name));
	const sorted = data.sort(() => 0.5 - Math.random());
	const random = sorted.slice(0, 10);
	const notify = () => {
		toast.success("Item adicionado!", {
			position: "bottom-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	return (
		<>
			<Page name="product">
				<div className={styles.productContainer}>
					<div className={styles.productHeader}>
						<h1>{product.name} </h1>
						<p>{product.artist.name + " "} </p>
						<p>{product.year} </p>
					</div>
					<hr />
					<div className={styles.productDisplay}>
					  <img src={`${product.images.gallery}`} alt={product.description} />
						<article>
							<p>{product.description}</p>
							<p className={styles.priceTag}><FaTags /> {" " + `${Math.sqrt(product.year * 100).toFixed(2)} R$`}</p>
							<div onClick={notify}>
								<p>Comprar</p>
								<FaCartArrowDown />
							</div>
						</article>
					</div>
				</div>
				<hr />
				<div className={styles.artist}>
					<img src={product.artist.image} />
					<p>{product.artist.description}</p>
				</div>
				{

					same_artist.length > 0 ?
						<>< hr />
							<div className={styles.subsection}>
								<h2>Outras obras do mesmo artista</h2>
								<MasonGrid data={same_artist} breakpoints={4} />
							</div></> : null
				}
				<hr />
				<div className={styles.subsection}>
					<h2>Veja também</h2>
					<MasonGrid data={random} breakpoints={4} />
				</div>
			</Page>

		</>
	)
}

export async function getStaticProps({ params }) {
	return {
		props: { params }
	}
}

export async function getStaticPaths() {
	const paths = data.map(art => { return { params: { product: art.name } } });

	return { paths, fallback: false }
}
export default dynamic(() => Promise.resolve(Gallery), {
	ssr: false
})
