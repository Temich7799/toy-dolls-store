import * as React from "react"
import { Link } from "gatsby"
import links from "./links"
import styled from "styled-components"

const StyledSocialsList = styled.nav`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
a{
    margin-right: 20px;
}
`;

const SocialsList = () => {
    return (
        <StyledSocialsList>
            {links.map((IconLink) => <Link to={IconLink.url}>{IconLink.svg}</Link>)}
        </StyledSocialsList>
    )
}

export default SocialsList
