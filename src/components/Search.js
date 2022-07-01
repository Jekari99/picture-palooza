import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import FileSaver from 'file-saver';
import env from 'react-dotenv';

function Search(props) {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const root = ReactDOM.createRoot(document.getElementById("result"));

        let results = [];
        let clientId = env.REACT_APP_UNSPLASH_API;
        let url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${search}&per_page=1000`;
        fetch(url)
            .then(res => res.json())
            .then(data => data.results.forEach(photo => {
                results.push(photo);

                const resPic = results.map((pic) =>
                    <img key={pic.id} src={pic.urls.regular} alt={pic.alt_description} id={pic.id} className="imageResults" onDoubleClick={() => FileSaver.saveAs(pic.urls.regular, `JRapiProj_${pic.id}.png`)} />
                );
                root.render(resPic);
            }))
        console.log(results);
    }





    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" id="input" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" id="myBtn"><i className="fa fa-search"></i></button>
            </form>

        </div >

    );
}

export default Search;