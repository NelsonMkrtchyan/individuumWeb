import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5vw;

    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1000;
    box-shadow: rgb(149 157 165 / 20%) 0 8px 24px;

    /* Responsive styles for screens below 768px (adjust the breakpoint as needed) */
`;
export const LogoWrapper = styled.div`
    img {
        height: 60px;
        display: block;
    }
`;
export const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-right: auto;

`;
export const DrawerPagesList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;

    li {
        padding: 15px
    }

    @media max-width: 900 px {

}

`;
export const PagesList = styled.ul`
    display: flex;
    flex-direction: ${props => (props.footer ? "column" : "row")};
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;

    li {
        padding: ${props => (props.footer ? "10px" : "0")};
    }

`;
export const PageLink = styled(Link)`
    font-size: 1rem;
    color: inherit;
    padding: 10px;

    &:hover {
        color: #774C91;
        cursor: pointer;
        border-bottom: 1px solid #774C91;
    }
`;
export const DrawerLanguageWrapper = styled.ul`
    display: flex;
    flex-direction: column;
`;
export const LanguageWrapper = styled.ul`
    display: flex;
`;
export const LanguageLink = styled.li`
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    align-self: center;

    background-image: ${props => (props.backgroundImage)};
    background-size: cover;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    padding: ${props => (props.selected && "2px")};
    border-bottom: ${props => (props.selected && "3px solid #774C91")};
    @media screen and (max-width: 900px) {
        margin: 10px 0;
    }

`;
