import styled from 'styled-components';

import MainColors from '../../../utils/constants/colors';
import StyledContainer from '../Container/Style';

const StyledModuleContainer = styled(StyledContainer)`
    background: ${MainColors.grey};
    flex-direction: row;
    justify-content: space-between;
    overflow: scroll;
    min-height: 80vh;
    
    .module {
        /* color: ${MainColors.white}; */
        background: ${MainColors.disabled};
        cursor: pointer;
        width: 20%;
        min-width: 150px;
        min-height:100%;
        padding: 5px;
        border-radius: 5px;
        flex-wrap: nowrap;
        white-space: nowrap;
        border:2px solid ${MainColors.grey};
    }
`;

export default StyledModuleContainer;