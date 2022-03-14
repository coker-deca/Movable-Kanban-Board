import styled from 'styled-components';

import MainColors from '../../../constants/colors';

const StyledContainer = styled.div<{width: string|number;}>`
    width: ${props => props.width};
    background: ${MainColors.off_white};
    display: flex;
    flex-direction: column;
    place-content: center;
    margin: auto;
`;

export default StyledContainer;
