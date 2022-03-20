import React from "react";

const DescriptionWithLink = (props) => {
    return(
        <div>
            <p> {props.description} </p>
            <a href={props.link} target="_blank"> Saiba Mais </a>
        </div>
    );
}

export default DescriptionWithLink;
