import styled from 'styled-components';

import MainColors from '../../../constants/colors';

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    div {
        box-sizing: border-box;
    }

    input, textarea, select{
        margin: 0 auto;
        width: 90%;
        border: 1px solid ${MainColors.border};
        box-sizing: border-box;
        border-radius: 5px;

    }

    button{
        margin: 20px auto;
    }
    .left {
        grid-column: 1;
        grid-row: 1/3;
    }
`;

export const SideBar = styled.div`
`;

export const StyledFooter = styled.div`
    grid-column: 1/3;
    grid-row: 3;
    display: flex;
    flex-wrap: wrap;
    
    input {
        width: 100%;
        margin: 0;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid ${MainColors.border};
        box-sizing: border-box;
        border-radius: 5px;
    }
    
    .comment_box {
        background: ${MainColors.off_white};
        width: 70%;
        p {
            width: 1000%;
        }
    }
`;

export default StyledForm;