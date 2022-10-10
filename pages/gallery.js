import data from 'data/data.json'
import Page from 'components/page/Page';
import MasonGrid from 'components/gallery/MasonGrid';

export default function Gallery() {
	return (
		<>
			<Page name="gallery">
				<MasonGrid data={data} breakpoints={4} />
			</Page>

		</>
	)
}


