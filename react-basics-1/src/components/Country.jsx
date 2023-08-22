function Country(props) {
    return (
        <div>
            <h3><strong>{props.info.country}</strong></h3>
            <p>Some facts about <strong>{props.info.country}</strong></p>
            <p>Population: {props.info.population}</p>
            <p>Area: {props.info.area}</p>
        </div>
    );
}

export default Country;