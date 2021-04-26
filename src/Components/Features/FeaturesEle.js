import styled from 'styled-components'



export const FeaturesContainer = styled.div`
    width:1300px;
    margin:48px auto 0 auto;
    `
export const FeatuersHeading = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
`
export const FeaturesHeadLeft = styled.div`
    p{
        color:#ff4605;
        font-size:30px;
    }
    h1{
        font-size:60px;
        font-weight:bolder;
    }
`
export const FeaturesHeadRight = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
`
export const FeatureBtn = styled.div`
    width:160px;
    height:51px;
    margin-left:10px;
    border-radius:10px;
    background-color:#eff0f1;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    p{
        font-size:18px;
    }
    &:first-child{
        border: 1px solid #ff4605;
        background-color:#fff0eb;
    }
    &:hover{
        border: 1px solid #ff4605;
        background-color:#fff0eb;
    }
`
export const FeatureWrapper = styled.div`
    margin-top:60px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    height:650px;
    grid-gap:20px;
`
export const FeaturesLeft = styled.div`
cursor: pointer;
overflow:hidden;
border-radius:10px;
`
export const FeaturesLeftImgWrapper = styled.div`
    width:100%;
    height:500px;
    overflow:hidden;
`
export const FeaturesLeftImg = styled.div`
    width:100%;
    height:100%;
    background-repeat:none;
    background-size:cover;
    background-position:center;
    background-image:url('https://demo.vehica.com/wp-content/uploads/2020/08/6.jpg');
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    transition: all 0.3s ease;
    &:hover{
        transform:scale(1.1);
        transition: all 0.3s ease;
    }
`
export const FeaturesLeftInfo = styled.div`
    display:grid;
    height:calc(100% - 500px);
    grid-template-rows:1fr 1fr;
    background-color:#222732;
    color:white;
    padding: 0 35px;
`
export const FeaturesLeftName = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    border-bottom: 1px solid #7A7A7A;
    margin-top:25px;
    p{
        font-size:24px;
        margin-bottom:25px;
    }
`
export const FeaturesInfoDetail = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
export const FeaturesLeftDetail = styled.div`
    display:flex;
    align-items:center;
    height:35px;
    padding: 0 10px;
    border-radius:10px;
    cursor: pointer;
    p{
        font-size:18px;
    }
    &:first-child{
        background-color:#ff4605;
    }
`
export const FeaturesLeftPrice = styled.div`
    p{
        font-size:35px;
        font-weight:500;
    }
`

export const FeatureRight = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
    grid-gap:20px;
`
export const FeaturesRightItemWrapper = styled.div`
    cursor: pointer;
    width:100%;
    height:100%;
    overflow:hidden;
    border-radius:10px;
`
export const FeaturesRightImgWrapper = styled.div`
    width:100%;
    height:170px;
    overflow:hidden;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`
export const FeaturesRightImg = styled.div`
width:100%;
height:100%;
background-image: url('https://demo.vehica.com/wp-content/uploads/2020/08/5.jpg');
background-repeat:none;
background-size:cover;
background-position:center;
transition: all 0.3s ease;
&:hover{
    transform:scale(1.1);
        transition: all 0.3s ease;
}
`
export const FeaturesRightInfo = styled.div`
    height:calc(100% - 170px);
    background-color:#222732;
    color:white;
    padding: 0 20px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`
export const FeaturesRightName = styled.h4`
    overflow: hidden;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-top:20px;
`
export const FeaturesRightInfoDetail = styled.div`
    display:flex;
    align-items:center;
    margin-top:20px;
    border-top: 1px solid #7A7A7A;
`
export const FeaturesRightDetail = styled.div`
    height:30px;
    margin-top:10px;
    display:flex;
    align-items:center;
    cursor: pointer;
    padding: 0 10px;
    border-radius:10px;
    cursor: pointer;
    p{
        font-size:18px;
    }
    &:first-child{
        background-color:#ff4605;
    }
`
export const FeaturesRightPrice = styled.div`
    margin-top:10px;
    font-size:20px;
    font-weight:600;
`

export const FeaturesFooter = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    height:160px;
`
export const FooterLeft = styled.div`
    display:flex;
    align-items:center;
    h4{
        font-size:18px;
        color:#c0c0c0;
    }
`
export const FooterIconWrapper = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#eff0f1;
    margin-left:20px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover{
        background-color:#ff4605;
        transition: all 0.3s ease;
    }
`

export const FooterRight = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
`
export const FooterBtn = styled.div`
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