import PageTitle from "../components/PageTitle";
import classes from './css/AboutCss.module.css';


function About() {
    return (
        <div className={classes.about}>
            <PageTitle text="About" bg="https://www.otb.net/data/home_7114a/accueil/2/paysage_large_background_home_companies_1600_c5fe0.jpg" />

        </div>
    );

}

export default About;