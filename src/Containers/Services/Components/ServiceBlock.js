import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../../../Components/Title";

const ServiceItemWrapper = styled(Link)`
  display: flex;
  width: 30%;
  min-width: 30%;
  margin: 1vw 1vw;
`;
const ServiceItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1.5vw 1vw;
  border-radius: 1.5vw;
  background-color: #777FB0;

  &:hover {
    background-color: #F3D87C;
  }
`;
const Icon = styled.img.attrs((style) => ({
    ...style,
    alt: "Service icon"
}))`
  height: 6vw;
  width: 6vw;
  flex: 1
`;


const ServiceBlock = ({ logo, title, id }) => {
    return (
      <ServiceItemWrapper to={`/services/${id}`}>
          <ServiceItem>
              <Icon src={logo} />
              <Title
                title={title}
                style={{
                    padding: 0,
                    fontSize: "1.5vw",
                    textAlign: "center",
                    fontWeight: "400",
                    color: "white",
                    flex: 2
                }}
              />
          </ServiceItem>
      </ServiceItemWrapper>
    );
};

export default ServiceBlock;
