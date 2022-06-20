import PageTitle from "../components/PageTitle";
import classes from './css/AboutCss.module.css';
import { Link } from "react-router-dom";


function About() {
    return (
        <div className={classes.about}>
            <PageTitle text="About" bg="https://www.otb.net/data/home_7114a/accueil/2/paysage_large_background_home_companies_1600_c5fe0.jpg" />
            <div className={classes.aboutInfo}>
                <p>Our mission is to provide the user with any picture that they need. Anything you need, we can supply! Need a wallpaper? Profile picture? Background image? We have the means to satisfy your needs!</p>
            </div>
            <div className={classes.pic}>
                <img src="https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_16x9.jpg" alt="New York" />
                <div className={classes.searchInfo}>
                    <h2>Feel Free to Search Any Picture you Need</h2>
                    <p>Want to try it out? Click this button</p>
                    <button className={classes.searchButton} ><Link to="/search">Search</Link></button>
                </div>
            </div>
            <br />
            <br />

            <div className={classes.moreInfo}>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/Ultimae/aven_ultimae_og.jpg" alt="Lamborghini" />
                <h3>Easy to download, just simply double click the image</h3>
            </div>
            <div className={classes.moreInfo2}>
                <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Two Dogs" />
                <h3>Anything you need, we have it</h3>
            </div>
        </div>
    );

}

export default About;