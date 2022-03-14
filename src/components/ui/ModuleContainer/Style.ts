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
        min-width: 150px;
        padding: 5px;
        background: ${MainColors.white};
        height: 100%;
        flex-wrap: nowrap;
        white-space: nowrap;
    }
`;

export default StyledModuleContainer;