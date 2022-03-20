import React from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
  return (
    <div>
      <h4> {props.name} </h4>
      <p>
        <DescriptionWithLink
          description={props.description}
          link={props.link}
        />
      </p>
      <GrayImg img_url={props.img_url} />
    </div>
  );
};

export default Planet;
