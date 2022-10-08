import ProductCard from 'components/gallery/ProductCard';
import Masonry from 'react-masonry-css'
import styles from 'styles/masonry.module.css'

import { pageAnimation, galleryAnimation } from 'utils/animations'

export default function MasonGrid({ data, breakpoints }) {
	return (
		<>
			<div
				variants={galleryAnimation}
			>
				<Masonry className={styles.m} breakpointCols={breakpoints} columnClassName={styles.mc}>

					{data.map((painting, index) => {
						return <ProductCard {...painting} id={index} key={index} />
					})}
				</Masonry>
			</div>
		</>
	)
}
