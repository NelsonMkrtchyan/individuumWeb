import React from "react";
import styled from "styled-components";

const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.5) 0 8px 24px;
`;
const Count = styled.div`
  margin: auto;
  color: #ecbe21;
  font-size: 3.5vw;
  font-weight: bold;
`;
const Name = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  overflow-wrap: anywhere;
  font-size: 2vw;
`;

const StatisticsItem = ({ number, title }) => {
    return (
      <Item>
          <Count>{number}</Count>
          <Name>{title}</Name>
      </Item>
    );
};

export default StatisticsItem;
