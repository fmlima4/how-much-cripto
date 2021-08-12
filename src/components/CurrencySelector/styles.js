import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
display: flex; 
justify-content: space-between;
height: 150px;
width: 600px;
padding: 34px;
color: #444;
align-items: center;
text-align: center;
margin: 30px ;


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
