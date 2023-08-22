function Countries(props) {
    return (
        <div className="Countries">
            <h2>Countries: </h2>
            {props.children}
            <h3>Happy Traveling!</h3>
        </div>
    );
}

export default Countries;