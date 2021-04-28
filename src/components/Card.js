import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component{
    render(){
        return (
            <div className="card w-100">
                <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.cardTitle}</h5>
                        <p className="card-text">{this.props.cardText}</p>
                        <p className="card-text"><small className="text-muted">{this.props.cardTime}</small></p>
                </div>
            </div>
            );
    }
}

Card.defaultProps = {
    cardTitle:"Default Card Title"
}

Card.propTypes = {
    cardTitle : PropTypes.string
}

export default Card;