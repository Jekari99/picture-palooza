import PageTitle from "../components/PageTitle";
import classes from './css/FavoritesCss.module.css';



function Favorites() {
    return (

        <div id="fav" className={classes.fav}>
            <PageTitle text="Favorites" bg="http://wonderfulengineering.com/wp-content/uploads/2016/02/vintage-wallpaper-40.jpg" />

        </div>
    );
}

export default Favorites;