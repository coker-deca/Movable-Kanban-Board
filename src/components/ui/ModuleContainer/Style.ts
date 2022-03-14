import styled from 'styled-components';

import MainColors from '../../../constants/colors';
import StyledContainer from '../Container/Style';

const StyledModuleContainer = styled(StyledContainer)`
    background: ${MainColors.grey};
    flex-direction: row;
    justify-content: space-between;
    overflow-x: scroll;
    
    .module {
        /* color: ${MainColors.white}; */
        cursor: pointer;
        width: 20%;
        background: ${MainColors.white};
        height: 100%;
        flex-wrap: nowrap;
    }
`;

export default StyledModuleContainer;