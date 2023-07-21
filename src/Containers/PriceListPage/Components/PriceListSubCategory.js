import React from "react";
import Title from "../../../Components/Title";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1vw 0;
  font-size: 1vw;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 1px solid purple;
`;
const ItemWrapper = styled.div`
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1vw 0;
  width: 100%;
  flex: 1;
  //border: 1px solid #0cdde0;
`;
const ItemName = styled.div`
  border-right: 1px solid #ecbe21;
  padding-right: 2vw;
  flex: 1;
  text-align: end;
  justify-content: center;
  align-items: center;
`;
const ItemPrice = styled.div`
  padding-left: 2vw;
  flex: 1;
  text-align: start;
`;


const PriceListSubCategory = ({ name, treatments, currency }) => {
      return (
        <Wrapper>
            {name && <Title title={name} style={{ textAlign: "center", fontSize: "1.2vw", margin: "0 0 2vw 0" }} />}
            <ItemWrapper>
                {treatments.map((treatment, i) => {
                    return (
                      <Item key={i}>
                          <ItemName>
                              {treatment.name}
                          </ItemName>
                          <ItemPrice>{treatment.price && (treatment.price + " " + currency)}</ItemPrice>
                      </Item>
                    );
                })}
            </ItemWrapper>
        </Wrapper>
      );
  }
;

export default PriceListSubCategory;
