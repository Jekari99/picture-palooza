import classes from './css/HomeCss.module.css';
import PageTitle from '../components/PageTitle';
import Suggestions from '../components/Suggestions';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className={classes.home}>
            <PageTitle text="Home" bg='https://www.wallpaperup.com/uploads/wallpapers/2019/09/04/1337713/d56666c7d4ef056f4367db506d063f5c.jpg' />
            <hr />
            <div className={classes.homeInfo}>
                <p>We have the means to supply all your picture needs</p>
            </div>
            <div className={classes.searchButtonArea}>
                <button className={classes.searchButton} ><Link to="/search">Go to Search</Link></button>
            </div>
            <div className={classes.suggestions}>
                <Suggestions text="Dogs" bg='https://www.pitbullinfo.org/uploads/7/8/9/7/7897520/pitbull-dog-1_3.jpg' />
                <Suggestions text="Cars" bg='https://automobiles.honda.com/-/media/Honda-Automobiles/Promos/2022/2022-EPA-Promo-Banner/2022-EPA-homepage-hero-320-1x.jpg%202x0' />
                <Suggestions text="London" bg='https://a.cdn-hotels.com/gdcs/production27/d274/43014cca-c88c-4061-ace8-58edc24531ee.jpg?impolicy=fcrop&w=800&h=533&q=medium' />
                <Suggestions text="New York" bg='https://pesweb.azureedge.net/spimg/geographicimages/newyork.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=480&h=480&mode=crop' />
                <Suggestions text="Houses" bg='https://cdn.gobankingrates.com/wp-content/uploads/2019/07/Beautiful-luxury-home-exterior-iStock-1054759884.jpg?quality=75&w=600' />
                <Suggestions text="Flowers" bg='https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg' />

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className={classes.blockInfo}>
                <p>Millions of Pictures</p>
                <hr />
                <p>The #1 source for all your pictures</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

        </div >
    );
}

export default Home;