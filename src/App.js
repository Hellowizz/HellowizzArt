import './App.css';

/* IMPORTS */
import { useMediaQuery } from 'react-responsive'

/* IMPORTS */
import Card from './Card.js';
import BackGround from './DrawingSection.js';

/* IMAGES PHONE */
import img1 from './img/water.webp';
import img2 from './img/charlie.webp';
import img3 from './img/cely.webp';
import img4 from './img/ykus.webp';
import img5 from './img/fire.webp';
import img6 from './img/kinui.webp';
import img7 from './img/xith.webp';
import img8 from './img/no.webp';
import img9 from './img/link.webp';
import img10 from './img/Adora.webp';
import img11 from './img/pikiro.webp';
import img12 from './img/eillon.webp';
import img13 from './img/faelin.webp';
import img14 from './img/arlechiney.webp';
import img15 from './img/loNathTome1.webp';
import img16 from './img/kuraikinui.webp';

/* IMAGES DESKTOP */
import imgD1 from './img/kuraikinui.webp';
import imgD2 from './img/shinilo.webp';
import imgD3 from './img/kinuiCard.webp';
import imgD4 from './img/LHCard.webp';
import imgD5 from './img/lorelaïm.webp';
import imgD6 from './img/unKurai.webp';


const tabOfImgsPhone = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

const tabOfImgsDesktop = [imgD1, imgD2, imgD3, imgD4, imgD5, imgD6];

function App() {
	const isTablet = useMediaQuery({ maxDeviceWidth: 1024 });

	return (
		<div className="App">
			<Card />
			<BackGround tabImgs={isTablet ? tabOfImgsPhone : tabOfImgsDesktop} duration={6} isTablet={isTablet} />
		</div>
	);
}

export default App;
