import React from "react";
import { Wrapper, Image } from "./Actor-styles";
import PropTypes from "prop-types";

function Actor({ name, character, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb"></Image>
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}
// exp componentName.propTypes = {propAsKey:typeCheckingUsingProptypesAsValue}
// exp propTypes is a property on the components -> Actor here
Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
