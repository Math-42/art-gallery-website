import Link from "next/link"
import styles from 'styles/ProductCard.module.css'
import { FaTags, FaCartArrowDown } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import dynamic from 'next/dynamic';

function ProductCard({
	id,
	name,
	images,
	artist,
	year
}) {
	const notify = () => {
		console.log("ok")
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
		<li >
			<div className={styles.figure}>
				<Link href={`/${name}`}>
					<a>
						<img src={images.thumbnail} alt="" />
						<div className={styles.caption}>
							<h2>{name}</h2>
							<p>{`${artist.name} - ${year}`}</p>
							<p> <FaTags /> {" " + `${Math.sqrt(year * 10).toFixed(2)} R$`}</p>
						</div>
					</a>
				</Link>
				<div className={styles.cartIcon} onClick={notify}>
					<FaCartArrowDown />
				</div>
			</div>
		</li >
	)
}

export default dynamic(() => Promise.resolve(ProductCard), {
	ssr: false
})