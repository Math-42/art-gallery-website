import Highlights from 'components/highlights/Highlights'
import Page from 'components/page/Page'
import Welcome from 'components/welcome/Welcome'
import data from 'data/data.json'
import styles from "styles/Home.module.css"
import dynamic from 'next/dynamic'

function Home() {
	let highlight_arts = data.filter(art => art.artist.name == "Gustave Courbet")
	return (
		<>
			<Page name="">
				<Welcome welcome="A melhor curadoria de arte para sua casa, escritório e coleção."
					description={{
						title: "Gustave Coubert",
						subtitle: "Artista em foco"
					}}
					image="./assets/highlight.jpg"

              		alt= "Obra do artista em foco, uma multidão, em um velório"
                />

				<hr />
				<div className={styles.artist}>
					<img src='./assets/artist.jpg'/>
					<div>
						<h1>
							Gustave Coubert
						</h1>
						<p>
							{highlight_arts[0].artist.description}
						</p>
					</div>
				</div>
				<hr />
						<h1>
							Obras do artista	
						</h1>
				<Highlights arts={highlight_arts} />
			</Page>
		</>
	)
}

export default dynamic(() => Promise.resolve(Home), {
	ssr: false
})
