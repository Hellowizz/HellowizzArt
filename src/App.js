import logo from './logo.svg';
import './App.css';

/* IMPORTS */
import { useMediaQuery } from 'react-responsive'

/* IMPORTS */
import Card from './Card.js';
import BackGround from './DrawingSection.js';

/* IMAGES PHONE */
import img1 from './img/water.png';
import img2 from './img/charlie.png';
import img3 from './img/cély.png';
import img4 from './img/linkedhaters.png';
import img6 from './img/promare.png';
import img7 from './img/ykus.png';
import img8 from './img/fire.png';
import img9 from './img/kinui.png';
import img10 from './img/kurai.png';
import img11 from './img/xith.png';
import img12 from './img/no.png';
import img13 from './img/lost.png';

/* IMAGES DESKTOP */
import imgD1 from './img/kuraikinui.png';
import imgD2 from './img/shinikinui.png';
import imgD3 from './img/shinilo.png';
import imgD4 from './img/kiharu.png';
import imgD5 from './img/nath.png';
import imgD6 from './img/loren.png';
import imgD7 from './img/princedance.png';


const tabOfImgsPhone = [img1, img2, img3, img4, img6, img7, img8, img9, img10, img11, img12, img13];

const tabOfImgsDesktop = [imgD1, imgD2, imgD3, imgD4, imgD5, imgD6, imgD7];

function App() {
	const isTablet = useMediaQuery({ maxDeviceWidth: 1024});

	return (
	    <div className="App">
	      <Card />
	      <BackGround tabImgs={isTablet ? tabOfImgsPhone : tabOfImgsDesktop} duration={6}/>
	    </div>
	);
}

export default App;
