import styled from 'styled-components';

export const Container = styled.div`
display: flex; 
justify-content: space-between;
min-width: 800px;
height: 150px;
padding 10px;
align-items: center;
text-align: center;

.currency--select{
    width: 50%;
}

.currency--input{
    width: 50%;
    align-items: center;
    text-align: center;
}

#currencySelector{
    min-width: 200px;
}
`;
