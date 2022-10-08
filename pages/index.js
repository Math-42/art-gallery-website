import Highlights from 'components/highlights/Highlights'
import Page from 'components/page/Page'
import Welcome from 'components/welcome/Welcome'
import data from 'data/data.json'

export default function Home() {
	return (
		<>
			<Page>
				<Welcome welcome="A melhor curadoria de arte para sua casa, escritório e coleção"
					description={{
						title: "A winter landscape",
						subtitle: "Click para saber mais"
					}}
					image="./assets/a-winter-landscape/gallery.jpg" />
				<hr />
				<Highlights arts={data} />
				<hr />
			</Page>
		</>
	)
}
