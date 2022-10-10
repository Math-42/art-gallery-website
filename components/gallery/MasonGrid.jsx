import ProductCard from 'components/gallery/ProductCard';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css'
import styles from 'styles/masonry.module.css'
import dynamic from 'next/dynamic';
import { pageAnimation, galleryAnimation } from 'utils/animations'

function MasonGrid({ data, breakpoints }) {
	return (
		<>
			<motion.div exit="exit" initial="hide" animate="show"
				variants={pageAnimation}
				
			>
				<motion.lu initial="hide" animate="show" variants={galleryAnimation}>
				<Masonry className={styles.m} breakpointCols={breakpoints} columnClassName={styles.mc}>

					{data.map((painting, index) => {
						return <ProductCard {...painting} id={index} key={index} />
					})}
				</Masonry>
				</motion.lu>
			</motion.div>
		</>
	)
}

export default dynamic(() => Promise.resolve(MasonGrid), {
	ssr: false
})