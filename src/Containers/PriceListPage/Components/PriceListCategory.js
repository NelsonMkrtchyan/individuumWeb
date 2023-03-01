import React from "react";
import PriceListSubCategory from "./PriceListSubCategory";
import { Circle, Icon } from "../../../Components/PrincipalsComponent/PrincipalsItem";
import Title from "../../../Components/Title";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 85%;
  margin: auto;
`;
const Content = styled.div`
  min-height: 25vw;
  position: relative;
  display: flex;
  flex-direction: ${(prop) => prop.isEven ? "row-reverse" : "row"};
  justify-content: space-around;
  align-items: center;
  z-index: 10;
`;
const Category = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 3vw;
  padding: 3vw 0;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgb(0 0 0 / 10%) 0 0.5vw 1vw;
`;
const SubCategory = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ColorBox = styled.div.attrs((style) => ({
    ...style
}))`

  position: absolute;
  width: 25vw;
  height: 20vw;
  min-height: 15vw;
  border-radius: 25px;
  bottom: 0;
  right: -5vw;
  z-index: 1;
  left: ${(prop) => prop.isLeft ? "-5vw" : " unset"};
  background-color: ${(prop) => prop.color};
  opacity: 0.8;
`;


const PriceListCategory = ({ title, color, logo, data, id, currency }) => {
    return (
      <Wrapper>
          <Content isEven={parseInt(id) % 2}>
              <Circle color={color}>
                  <Icon src={logo} />
              </Circle>
              <Category>
                  <Title title={title} style={{ fontSize: "1.5vw" }}
                  />
                  <SubCategory>
                      {data.map((subCategory, index) => {
                          return (
                            <PriceListSubCategory
                              key={index}
                              id={index}
                              name={subCategory.subCategoryName}
                              treatments={subCategory.treatments}
                              currency={currency}
                            />
                          );
                      })}
                  </SubCategory>
              </Category>
          </Content>
          <ColorBox color={color} isLeft={parseInt(id) % 2} />
      </Wrapper>
    );
};

export default PriceListCategory;
