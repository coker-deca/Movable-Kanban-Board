import styled from 'styled-components';

import MainColors from '../../../utils/constants/colors';

const styledCell = styled.div`
    background: ${MainColors.grey};
    color: ${MainColors.white};
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input {
        font-style: normal;
        font-size: 20px;
        width: 50%;
        cursor: text;
        
        :disabled {
            cursor: pointer;
            font-weight: bold;
            color: ${MainColors.white};
            background: none;
            border: none;
        }
    }
    
    .toolbox {
        cursor: pointer;
        background: ${MainColors.black};
        opacity: 20%;
        width: 70px;
        font-size: 20px;
        padding: 5px;
        box-sizing: border-box;
    }
`;

export default styledCell;