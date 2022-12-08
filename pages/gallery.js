import data from 'data/data.json'
import Page from 'components/page/Page';
import MasonGrid from 'components/gallery/MasonGrid';
import { useState, useEffect } from 'react';

export default function Gallery() {
	
	const size = useWindowSize();
	let n = 4;
	if (size.width < 1400)
		n = 3;
	if (size.width < 900)
		n = 2;
	if (size.width < 500)
		n = 1;

	return (
		<>
			<Page name="gallery">
				<MasonGrid data={data} breakpoints={n} />
			</Page>

		</>
	)
}


function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
	  width: undefined,
	  height: undefined,
	});
  
	useEffect(() => {
	  function handleResize() {
		setWindowSize({
		  width: window.innerWidth,
		  height: window.innerHeight,
		});
	  }
	  window.addEventListener("resize", handleResize);
	  handleResize();
	  
	  return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
  }