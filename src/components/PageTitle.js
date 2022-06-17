function PageTitle(props) {
    return (
        <div className="bgimage" style={{ background: "url(" + props.bg + ") no-repeat center center fixed" }}>
            <h1>{props.text}</h1>
        </div>
    );
}

export default PageTitle;