import Link from "next/link"
import { motion } from 'framer-motion'
import { cardAnimation } from 'utils/animations'
import { captionAnimation } from 'utils/animations'
import styles from 'styles/ProductCard.module.css'
import { FaTags, FaCartArrowDown } from "react-icons/fa"

export default function ProductCard({
	id,
	name,
	images,
	artist,
	year
}) {
	return (
		<motion.li variants={cardAnimation}>
			<Link href={`/${name}`}>
				<a>
					<div className={styles.figure}>
						<img src={images.thumbnail} alt="" />
						<div variants={captionAnimation} className={styles.caption}>
							<h2>{name}</h2>
							<p>{`${artist.name} - ${year}`}</p>
							<p> <FaTags /> {" " + `${Math.sqrt(year * 10).toFixed(2)} R$`}</p>
						</div>
						<div className={styles.cartIcon}>
							<FaCartArrowDown />
						</div>
					</div>
				</a>
			</Link>
		</motion.li >
	)
}
