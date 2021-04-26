import styled from 'styled-components/macro'

export const LadingContainer = styled.div`
    position:relative;
    background:#0c0c0c;
    width:100%;
    height:600px;
    z-index:1;
    ::before{
        content:'';
        z-index:2;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.7);
    }
`
export const LandingBg = styled.div`
    position:absolute;
    width:100%;
    top:0;
    left:0;
    bottom:0;
    background-image:url('https://images.unsplash.com/photo-1552561062-532218dd53ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
    background-repeat:none;
    background-size:cover;
    background-position:center;
`

export const LandingContent = styled.div`
    padding-top:80px;
    z-index:4;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    justify-content:center;
`
export const LandingHead = styled.div`
z-index:4;
color:white;
font-size:61px;
line-height:62px;
font-weight:800;
letter-spacing:1px;
span{
    color:#ff4605;
}
`
export const LandingInputWrapper = styled.div`
z-index:4;
margin-top:30px;
`
export const LandingInputHead = styled.div`
color:white;
display:flex;
width:770px;
height:60px;
justify-content:center;
align-items:center;
position:relative;
`
export const LandingHeadItem = styled.div`
height:100%;
width:50px;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
margin-left:50px;
cursor: pointer;
transition:all 0.3s ease;
&:first-child{
    margin-left:0;
    ::before{
        display:block;
    }
}
&:hover{
    color: #ff4605;
    transition:all 0.3s ease;
}
&::before{
    content:"";
    position:absolute;
    border: 10px solid;
    border-color:transparent transparent white transparent;
    bottom:-10px;
    display:none;
}

`
export const LandingInputContainer = styled.div`
margin-top:10px;
width:770px;
height:85px;
background-color:white;
border-radius:20px;
display:flex;
align-items:center;
justify-content:space-around;
padding: 20px 30px;
position:relative;
z-index:4;
&::before{
    content:"";
    position:absolute;
    z-index:3;
    width:770px;
    height:50%;
    background-color:white;
    border-radius:20px;
    bottom:-9px;
    opacity:0.6;
}
`
export const LandingInputSelectWrap = styled.div`
    z-index:4;
    width:215px;
    height:50px;
    border: 1px solid #f1f1f1;
    border-radius:10px;
    display:flex;
    align-items:center;
    padding:25px;
    justify-content:space-between;
    cursor: pointer;
    p{
        font-weight:500;
    }
`
export const LandingInputBtn = styled.div`
    z-index:4;
    width:56px;
    height:50px;
    background-color:#ff4605;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    cursor: pointer;
    svg{
        color:white;
        font-size:30px;
    }
`

export const LandingCarItems = styled.div`
    margin-top:60px;
    z-index:3;
    color:white;
    display:flex;
    justify-content:center;
    width:770px;
    height:130px;
`
export const LadingCarIcon = styled.div`
    width:80px;
    height:80px;
    border: 2px solid white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    svg{
        font-size:40px;
    }
`
export const LadingCarItem = styled.div`
    height:100%;
    width:110px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left:10px;
    cursor: pointer;
    &:first-child{
        margin-left:0;
    }
    &:hover ${LadingCarIcon}:not(svg){
        border-color:#ff4605;
    }
`
export const LandingCarName = styled.div`
    margin-top:20px;
`