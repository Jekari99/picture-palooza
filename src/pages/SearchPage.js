import PageTitle from "../components/PageTitle";
import Search from "../components/Search";
import classes from './css/SearchCss.module.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import FileSaver from 'file-saver'
import ScrollButton from "../components/ScrollButton";

function Page() {
    const [search, setSearch] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const root = ReactDOM.createRoot(document.getElementById("result"));
        let results = [];
        let clientId = process.env.REACT_APP_UNSPLASH_API;
        let url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${search}&per_page=1000`;
        fetch(url)
            .then(res => res.json())
            .then(data => data.results.forEach(photo => {
                results.push(photo);

                const resPic = results.map((pic) =>
                    <img key={pic.id} src={pic.urls.regular} alt={pic.alt_description} id={pic.id} className={classes.imageResults} onDoubleClick={() => FileSaver.saveAs(pic.urls.regular, `JRapiProj_${pic.id}.png`)} />
                );
                root.render(resPic);
            }))
        console.log(results);
    }
    return (
        <div className={classes.search}>
            <PageTitle text="Search" bg="https://cdn.wallpapersafari.com/31/7/oglPTv.jpg" />
            <Search />
            <div className={classes.sugg}>
                <button type="submit" onClick={handleSubmit} value={search} onMouseOver={(e) => setSearch("Dogs")}>Dogs</button>
                <button type="submit" onClick={handleSubmit} value={search} onMouseOver={(e) => setSearch("Cars")}>Cars</button>
                <button type="submit" onClick={handleSubmit} value={search} onMouseOver={(e) => setSearch("London")}>London</button>
                <button type="submit" onClick={handleSubmit} value={search} onMouseOver={(e) => setSearch("New York")}>New York</button>
                <button type="submit" onClick={handleSubmit} value={search} onMouseOver={(e) => setSearch("Houses")}>Houses</button>
                <button type="submit" onClick={handleSubmit} value={search} onMouseOver={(e) => setSearch("Flowers")}>Flowers</button>
            </div>
            <hr />
            <div className={classes.info}>
                <p>Double Click Picture to Download</p>
            </div>
            <div className={classes.result} id="result">
            </div>
            <ScrollButton />
        </div >
    );
}
export default Page;