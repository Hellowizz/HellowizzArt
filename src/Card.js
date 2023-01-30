import './Card.css';
import ShiningTitle from './ShiningTitle.js';

/* IMPORTS */
import { useMediaQuery } from 'react-responsive'

/* IMPORTS FROM MATERIAL UI */
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

/* IMAGES */
import Instagram from './img/icons/instagram.svg';
import Webtoon from './img/icons/webtoon.svg';
import MangaDraft from './img/icons/mangadraft.svg';
import Twitter from './img/icons/twitter.svg';
import Youtube from './img/icons/youtube.svg';
import Twitch from './img/icons/twitch.svg';
import Tiktok from './img/icons/tiktok.svg';
import Toyhouse from './img/icons/toyhouse.svg';
import Panier from './img/icons/panier.svg';

import Livre from './img/icons/livre.png';

/* CUSTOMISATION */
const ShopButton = withStyles({
  root: {
    backgroundColor: 'white',
    boxShadow: '0 0 8px  #e2eff0',
    margin: '10px 0 5px 0',
    '&:hover': {
    	backgroundColor: 'white',
    	boxShadow: '0 0 5px #e2eff0, 0 0 10px  #e2eff0, 0 0 15px  #e2eff0, 0 0 20px  #808080, 0 0 25px  #808080, 0 0 45px  #808080;'
    }
  },
  text: {
    padding : '8px 10px',
    color: '#211e2e',
    fontWeight: '600',
    fontFamily: 'gobold'
  }
})(Button);

const ShopButtonPhone = withStyles({
  root: {
    backgroundColor: 'white',
    boxShadow: '0 0 8px  #e2eff0',
    margin: '20px 0 5px 0',
    '&:hover': {
    	backgroundColor: 'white',
    	boxShadow: '0 0 5px #e2eff0, 0 0 10px  #e2eff0, 0 0 15px  #e2eff0, 0 0 20px  #808080, 0 0 25px  #808080, 0 0 45px  #808080;'
    }
  },
  text: {
    padding : '8px 10px',
    fontSize : '11px',
    color: '#211e2e',
    fontWeight: '600',
    fontFamily: 'gobold'
  }
})(Button);

export default function Card () {
	const isMobile = useMediaQuery({ maxDeviceWidth: 580 });

	return (
		<div className="card-container">
			<ShiningTitle />

			
			<div className='livre-icon'>
				<a href='https://fr.ulule.com/linked-haters-1/'><img alt="cart" src={Livre} style= {{ height: isMobile ? '100px' : '140px' }}/></a>
			</div>
			

			<div className="shop-button">
				{isMobile ? <ShopButtonPhone href="https://fr.ulule.com/linked-haters-1/">Commandez le tome 1 de Linked Haters !</ShopButtonPhone> : <ShopButton href="https://fr.ulule.com/linked-haters-1/">Commandez le tome 1 de Linked Haters !</ShopButton>}
			</div>

			<div className="card-follow">
				<div className="cut"/>
				<div className="text-follow">Réseaux sociaux</div>
				<div className="cut"/>
			</div>

			<div className="card-icon">
				<a href='https://www.instagram.com/hellowizzu/'><img alt="instagram" src={Instagram} style= {{ height: isMobile ? '25px' : '40px' }}/></a>
				<a href='https://twitter.com/Hellow_wizzu' style={{ marginLeft: '10px' }}><img alt="twitter" src={Twitter} style= {{ height: isMobile ? '25px' : '40px' }}/></a>
				<a href='https://www.youtube.com/channel/UCRhNX3kNMwxG5glSF5iAvLQ' style={{ marginLeft: '10px' }}><img alt="youtube" src={Youtube} style= {{ height: isMobile ? '19px' : '34px' }}/></a>
				<a href='https://www.tiktok.com/@hellowizzu' style={{ marginLeft: '10px' }}><img alt="tiktok" src={Tiktok} style= {{ height: isMobile ? '25px' : '40px' }}/></a>
				<a href='https://toyhou.se/Hellowizz/characters/folder:all' style={{ marginLeft: '10px' }}><img alt="toyhouse" src={Toyhouse} style= {{ height: isMobile ? '25px' : '40px' }}/></a>
				<a href='https://hellowizz.company.site/' style={{ marginLeft: '10px' }}><img alt="cart" src={Panier} style= {{ height: isMobile ? '25px' : '42px' }}/></a>
			</div>

			<div style={{ margin: '20px' }}/>

			<div className="card-follow">
				<div className="cut"/>
				<div className="text-follow">Lire mon webtoon sur</div>
				<div className="cut"/>
			</div>

			<div className="card-icon">
				<a href='https://www.webtoons.com/fr/challenge/linked-haters/list?title_no=461285'><img alt="webtoon" src={Webtoon} style= {{ height: isMobile ? '25px' : '40px' }}/></a>
				<a href='https://www.mangadraft.com/user/hellowizz' style={{ marginLeft: '10px' }}><img alt="webtoon" src={MangaDraft} style= {{ height: isMobile ? '15px' : '30px' }}/></a>
			</div>

		</div>
	)
}
