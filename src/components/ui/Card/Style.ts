import styled from 'styled-components';

import MainColors from '../../../constants/colors';

const MovableStyledCard = styled.div`
    background: ${MainColors.white};
    cursor: move;
    border-radius: 5px;
    height: 90px;
    
    .card{
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }
    .cancel {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        margin: 0;
        cursor: pointer;
    }
`;

export default MovableStyledCard;