import './Card.css';
import ShiningTitle from './ShiningTitle.js';

/* IMPORTS */
import { useMediaQuery } from 'react-responsive'

/* IMAGES */
import Instagram from './img/icons/instagram.svg';
import Webtoon from './img/icons/webtoon.svg';
import MangaDraft from './img/icons/mangadraft.svg';
import Youtube from './img/icons/youtube.svg';
import Tiktok from './img/icons/tiktok.svg';
import Toyhouse from './img/icons/toyhouse.svg';
import Lemoon from './img/icons/lemoon.svg';

export default function Card () {
	const isMobile = useMediaQuery({ maxDeviceWidth: 580 });

	return (
		<div className="card-container">
			<ShiningTitle />

			<div className="card-follow">
				<div className="cut"/>
				<div className="text-follow">Lire mon webtoon sur</div>
				<div className="cut"/>
			</div>

			<div className="card-icon">
				<div className="icon-chip"><a href='https://www.webtoons.com/fr/challenge/linked-haters/list?title_no=461285'><img alt="webtoon" src={Webtoon} style={{ height: isMobile ? '25px' : '33px' }}/></a><span className="chip-label">webtoon</span></div>
				<div className="icon-chip"><a href='https://www.mangadraft.com/user/hellowizz'><img alt="mangadraft" src={MangaDraft} style={{ height: isMobile ? '15px' : '30px' }}/></a><span className="chip-label">mangadraft</span></div>
				<div className="icon-chip"><a href='https://lemoon.io/series/1685466737-linked-haters'><img alt="lemoon" src={Lemoon} style={{ height: isMobile ? '15px' : '30px' }}/></a><span className="chip-label">lemoon</span></div>
			</div>

			<div className="card-follow">
				<div className="cut"/>
				<div className="text-follow">Réseaux sociaux</div>
				<div className="cut"/>
			</div>

			<div className="card-icon">
				<div className="icon-chip">
					<a href='https://www.instagram.com/hellowizzu/'>
						<img alt="instagram" src={Instagram} style={{ height: isMobile ? '25px' : '40px' }}/>
					</a>
					<span className="chip-label">instagram</span>
				</div>
				<div className="icon-chip">
					<a href='https://bsky.app/profile/hellowizz.bsky.social'>
						<img alt="bluesky" src={'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg'} style={{ height: isMobile ? '25px' : '40px', filter: 'brightness(0) invert(1)' }}/>
					</a>
					<span className="chip-label">bluesky</span>
				</div>
				<div className="icon-chip">
					<a href='https://www.youtube.com/channel/UCRhNX3kNMwxG5glSF5iAvLQ'><img alt="youtube" src={Youtube} style={{ height: isMobile ? '19px' : '34px' }}/></a><span className="chip-label">youtube</span>
				</div>
				<div className="icon-chip">
					<a href='https://www.tiktok.com/@hellowizzu'><img alt="tiktok" src={Tiktok} style={{ height: isMobile ? '25px' : '40px' }}/></a><span className="chip-label">tiktok</span>
				</div>
			</div>

			<div className="card-follow">
				<div className="cut"/>
				<div className="text-follow">Références</div>
				<div className="cut"/>
			</div>

			<div className="card-icon">
				<div className="icon-chip"><a href='https://toyhou.se/Hellowizz/characters/folder:all'><img alt="toyhouse" src={Toyhouse} style={{ height: isMobile ? '25px' : '40px' }}/></a><span className="chip-label">toyhouse</span></div>
			</div>

			<div style={{ margin: '20px' }}/>

			

		</div>
	)
}
