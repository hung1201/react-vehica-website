import styled from 'styled-components'
export const FooterWrapAll = styled.div`
    width:100%;
    background-color:#222732;
    padding-bottom:40px;
`
export const FooterContainer = styled.div`
    width:100%;
    display:grid;
    padding:95px 30px 0 30px;
    grid-template-columns:repeat(7, 14.3%);
`
export const FooterLogo = styled.div`
    grid-column:1/2;
    margin-top:20px;
    background-image:url('https://demo.vehica.com/wp-content/uploads/2020/10/vehica-logo-white-2.png');
    background-repeat:no-repeat;
    background-size:contain;
    width:170px;
    height:30px;
`
export const FooterListing = styled.div`
grid-column:2/4;
display:flex;
padding:10px 30px;
align-items:center;
justify-content:space-evenly;
`
export const ListingsCol = styled.div`
    
`
export const ListingRow = styled.div`
display:flex;
align-items:center;
margin-top:20px;
svg{
    color:#ff4605;
    font-size:20px;
}
p{
    margin-left:20px;
    font-size:18px;
    color:white;
}
&:first-child{
    margin-top:0;
}
`
export const FooterDesc = styled.div`
grid-column:4/6;
color:white;
padding:10px 30px;

`
export const FooterContact = styled.div`
grid-column:6/8;
display:flex;
flex-direction:column;
align-items:flex-end;
p{
    :nth-child(1){
        color:#ff4605;
        font-size:35px;
        font-weight:600;
    }
    :nth-child(2){
        color:white;
        margin: 20px 0;
    }
    :nth-child(3){
        margin:10px 0;
        color:white
    }
    :nth-child(4){
        color:white;
    }
}
`
export const FooterSeparate = styled.div`
    width:1300px;
    margin:80px auto 0;
    height:1px;
    background-color:#929292;
`
export const FooterSocial = styled.div`
    width:1300px;
    margin:40px auto 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const FooterSocialContainer = styled.div`
    display:flex;
    align-items:center;
`
export const FooterSocialIconWrap = styled.div`
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#777;
    border-radius:50%;
    margin-left:20px;
    cursor: pointer;
    font-size:20px;
`