import styled from 'styled-components';

import MainColors from '../../../utils/constants/colors';
import StyledContainer from '../Container/Style';

const styledCell = styled(StyledContainer)`
    background: ${MainColors.grey};
    color: ${MainColors.white};
    cursor: pointer;
`;

export default styledCell;