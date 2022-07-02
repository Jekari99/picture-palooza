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
                <p><a href="https://www.linkedin.com/in/jekari-rawls-a984961a9/" rel="noopener noreferrer" target="_blank">LinkedIn Profile</a></p>

                {/* <img src="github.png" alt="GitHub logo" /> */}
                <p><a href="https://github.com/Jekari99" rel="noopener noreferrer" target="_blank">GitHub Profile</a></p>


            </div>


        </footer>
    );
}

export default Footer;