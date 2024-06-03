const Service = (props) => {
    return (
        <div className="column service">
            <div className="service-content">
                <h3>{props.title}</h3>
                {props.images && props.images.map((image, index) => (
                    <img key={index} src={image} alt={props.title} className="service-image" />
                ))}
                {props.icon && <i className={"bi service-icon " + props.icon}></i>}
                <p>{props.details}</p>
            </div>
        </div>
    );
}

export default Service;
