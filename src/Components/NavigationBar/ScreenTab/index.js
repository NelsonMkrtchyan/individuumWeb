import React, { useMemo } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const PageLink = styled(Link)`
  font-size: 1rem;
  padding: 10px;

  border-bottom: ${(prop) => prop.selected ? "1px solid #774C91" : "unset"};
  color: ${(prop) => prop.selected ? "#774C91" : "inherit"};

  &:hover {
    color: #774C91;
    cursor: pointer;
    border-bottom: 1px solid #774C91;
  }
`;

const ScreenTab = ({ whereTo, title }) => {
    const location = useLocation();
    const isSelected = useMemo(() => location.pathname === `/${whereTo}`, [location.pathname, whereTo]);
    return (
      <li>
          <PageLink to={whereTo} selected={isSelected}>
              {title}
          </PageLink>
      </li>
    );
};

export default ScreenTab;