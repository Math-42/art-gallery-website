import Link from "next/link"
import styles from 'styles/ProductCard.module.css'
import { FaTags, FaCartArrowDown } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { captionAnimation, cardAnimation } from 'utils/animations'

function ProductCard({
	id,
	name,
	images,
	artist,
	year
}) {
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
		<motion.li variants={cardAnimation} >
			<div className={styles.figure}>
				<Link href={`/${name}`}>
					<a>
						<img src={images.thumbnail} alt="" />
						<motion.figcaption className={styles.caption} variants={captionAnimation}>
							<h2>{name}</h2>
							<p>{`${artist.name} - ${year}`}</p>
							<p> <FaTags /> {" " + `${Math.sqrt(year * 10).toFixed(2)} R$`}</p>
						</motion.figcaption>
					</a>
				</Link>
				<div className={styles.cartIcon} onClick={notify}>
					<FaCartArrowDown />
				</div>
			</div>
		</motion.li >
	)
}

export default dynamic(() => Promise.resolve(ProductCard), {
	ssr: false
})