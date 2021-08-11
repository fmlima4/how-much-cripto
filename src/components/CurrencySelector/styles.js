import styled from 'styled-components';

export const Container = styled.div`
padding: 5px;
display: flex; 
justify-content: space-between;
min-width: 600px;
height: 110px;
padding 10px;
align-items: center;


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

#flag1{
    max-height: 10px;
    max-width: 10px;
}
#flag2{
    height: 10px;
    width: 10px;
}
`;
