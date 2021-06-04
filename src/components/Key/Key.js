const Key = (props) => {
    return (
        <button
            className="btn btn-outline-dark m-1"
            style={{width: '50px'}}
            onClick={() => props.click(props.children)}>{props.children}
        </button>
    );
};

export default Key;