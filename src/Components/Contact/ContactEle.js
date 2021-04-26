import styled from 'styled-components'

export const ContactContainer = styled.div`
position: relative;
background-color:#f2f5fb;
`
export const ContactBG = styled.div`
    width:1300px;
    margin:0 auto;
    margin-top:130px;
    background-color:#0f141e;
    border-radius:20px;
    display:flex;
    z-index:10;
`
export const HaflCircle = styled.div`
    height:134px;
    width:300px;
    position: absolute;
    background-color:#20242f;
    bottom:0;
    border-top-left-radius:300px;
    border-top-right-radius:300px;
    left:400px;
    z-index:10;
`
export const ContactColLeft = styled.div`
    color:white;
    flex:3;
    display:flex;
    flex-direction:column;
    padding: 120px 0 0 75px;
    z-index:10;
`
export const ContactLeftTitle = styled.div`
    font-size:50px;
    font-weight:700;
`
export const ContactLeftDetail = styled.div`
    margin-top:50px;
`
export const ContacDetailRow = styled.div`
    display:flex;
    margin-left:5px;
    margin-top:10px;
    p{
        color:#959cad;
        margin-left:20px;
    }
    svg{
        color:#ff4605;
    }
`
export const ContactBtn = styled.div`
    margin-top:70px;
    width:150px;
    height:50px;
    background-color:#ff4605;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    cursor: pointer;
    font-size:20px;
`
export const ContactArrowContainer = styled.div`
    margin-top:50px;
    display:flex;
    align-items:center;
`
export const ContactArrowWrap = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:52px;
    height:52px;
    border-radius:50%;
    cursor: pointer;
    background-color:white;
    color:#0f141e;
    font-size:20px;
    margin-right:15px;
    margin-bottom:45px;
    transition:all 0.3s ease;
    &:hover{
        transition:all 0.3s ease;
        box-shadow:0 0 20px #fafafa;
    }
`

export const ContactColRight =styled.div`
position: absolute;
top:50%;
transform:translateY(-50%);
left:40%;
display:flex;
z-index:10;
`
export const ContactInfoItem = styled.div`
    width:306px;
    height:500px;
    background-color:white;
    border-radius:10px;
    margin-right:25px;
    cursor: pointer;
    transition:all 0.3s ease;
    &:hover{
        transform:translateY(-10px);
        transition:all 0.3s ease;
    }
`
export const ContactInfoImgWrap = styled.div`
    width:100%;
    height:285px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    overflow:hidden;
    `
export const ContactInfoImg = styled.div`
    width:100%;
height:100%;
background-image: url('https://demo.vehica.com/wp-content/uploads/2020/08/5.jpg');
background-repeat:none;
background-size:cover;
`
export const ContactInfoDetail = styled.div`
    padding:0 35px;
    margin-top:50px;
    width:100%;
    display:flex;
    flex-direction:column;
    span{
        width:100%;
        height:1px;
        background-color:#dcd7d7;
        margin:10px 0;
    }
`
export const ContactInfoName = styled.div`
    font-size:18px;
    font-weight:600;
`
export const ContactInfoRole = styled.div`
    margin-top:15px;
    font-size:14px;
    color:#777;
`
export const ContactInfoEmail = styled.div`
    margin-top:5px;
    color:#ff4605;
    font-size:15px;
`
export const ContactInfoTel = styled.div`
    margin-top:5px;
    font-size:15px;
    color:#777;
`
export const Footer = styled.div`
    width:100%;
    height:100px;
    background-color:#f2f5fb;
`