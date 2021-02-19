import './Card.css';
import ShiningTitle from './ShiningTitle.js';

/* IMPORTS */
import { useMediaQuery } from 'react-responsive'

/* IMAGES */
import Instagram from './img/icons/instagram.svg';
import Webtoon from './img/icons/webtoon.svg';
import MangaDraft from './img/icons/mangadraft.svg';
import Twitter from './img/icons/twitter.svg';
import Youtube from './img/icons/youtube.svg';
import Twitch from './img/icons/twitch.svg';
import Tiktok from './img/icons/tiktok.svg';
import Toyhouse from './img/icons/toyhouse.svg';

export default function Card () {
	
	const isTablet = useMediaQuery({ maxDeviceWidth: 1024});
	const isMobile = useMediaQuery({ maxDeviceWidth: 580 });

	console.log('isTablet : ' + isTablet);
	console.log('isMobile : ' + isMobile);

	return (
		<div className="card-container">
			<ShiningTitle />

			<div className="card-follow">
				<div className="cut"/>
				<div className="text-follow">Follow me on</div>
				<div className="cut"/>
			</div>

			<div className="card-icon">
				<a href='https://www.instagram.com/hellowizzu/'><img alt="instagram" src={Instagram} style= {{ height: '40px' }}/></a>
				<a href='https://twitter.com/Hellow_wizzu' style={{ marginLeft: '10px' }}><img alt="twitter" src={Twitter} style= {{ height: '40px' }}/></a>
				<a href='https://www.youtube.com/channel/UCRhNX3kNMwxG5glSF5iAvLQ' style={{ marginLeft: '10px' }}><img alt="youtube" src={Youtube} style= {{ height: '34px' }}/></a>
				<a href='https://www.twitch.tv/hellow_wizzu' style={{ marginLeft: '10px' }}><img alt="twitch" src={Twitch} style= {{ height: '40px' }}/></a>
				<a href='https://www.tiktok.com/@hellowizzu' style={{ marginLeft: '10px' }}><img alt="tiktok" src={Tiktok} style= {{ height: '40px' }}/></a>
			</div>

			<div style={{ margin: '20px' }}/>

			<div className="card-follow">
				<div className="cut"/>
				<div className="text-follow">Find my OC on</div>
				<div className="cut"/>
			</div>

			<div className="card-icon">
				<a href='https://toyhou.se/Hellowizz'><img alt="toyhouse" src={Toyhouse} style= {{ height: '40px' }}/></a>
			</div>

			<div style={{ margin: '20px' }}/>

			<div className="card-follow">
				<div className="cut"/>
				<div className="text-follow">Lire mon webtoon sur</div>
				<div className="cut"/>
			</div>

			<div className="card-icon">
				<a href='https://www.webtoons.com/fr/challenge/linked-haters/list?title_no=461285'><img alt="webtoon" src={Webtoon} style= {{ height: '40px' }}/></a>
				<a href='https://www.mangadraft.com/user/hellowizz' style={{ marginLeft: '10px' }}><img alt="webtoon" src={MangaDraft} style= {{ height: '30px' }}/></a>
			</div>
			
		</div>
	)
}