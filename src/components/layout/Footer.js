import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={classes.foot}>
            <div>
                {/* <img src="logo192.png" alt="React logo" /> */}
                <p>React App</p>
                {/* <img src="./profile.png" alt="Profile logo" /> */}
                <p>Made By Jekari Rawls / Pictures from Unsplash API</p>

                {/* <img src="linkedin.png" alt="LinkedIn logo" /> */}
                <p>LinkedIn: Jekari Rawls</p>

                {/* <img src="github.png" alt="GitHub logo" /> */}
                <p>GitHub: jekari99</p>


            </div>


        </footer>
    );
}

export default Footer;