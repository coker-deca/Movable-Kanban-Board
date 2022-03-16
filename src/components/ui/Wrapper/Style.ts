import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: auto;
  width: 90%;
  font-family: DM Sans;
  padding: 10px;

  header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    input {
      height: 20px;
      width: 150px;
      border-radius: 5px;
      padding: 5px;
    }
    .new_project {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

export default StyledWrapper;
