import styled from 'styled-components/macro'


export const NavbarContainer = styled.div`
    width:100%;
    background:${({scrollNav})=>(scrollNav ? 'linear-gradient(to right, #1c92d2, #f2fcfe)': 'transparent')};
    color:${({scrollNav})=>(scrollNav ? 'black': 'white')};
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px 30px;
    height:80px;
    position:fixed;
    z-index:999;
`
export const NavbarLogo = styled.div`
    flex:0.2;
    img{
        width:200px;
    }
`
export const NavbarMenu = styled.div`
    flex:0.5;
    height:100%;
`
export const NavbarLine =styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 2px;
    border-radius: 15px;
    background-color: #ff4605;
    transition: all 0.1s ease;
`
export const NavbarMenuList = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-around;
    list-style:none;
    height:100%;
    position:relative;
`
export const NavbarMenuItem = styled.li`
    text-decoration:none;
    display:flex;
    align-items:center;
    height:100%;
    cursor: pointer;
    font-size:16px;
    position: relative;
    p{
        margin-right:10px;
    }
    &::before{
        content:"";
        position:absolute;
        top:0;
        height:2px;
        width:100%;
        background-color:#ff4605;
        transition:all 0.3s ease;
        opacity:0;
    }
    &:hover:before
        {
            animation: slideIn 0.3s ease;
            transition:all 0.3s ease;
            opacity:1;
        }
        @keyframes slideIn{
                from{
                    transform: translateX(-100%);
                }
                to{
                    transform: translateX(0);
                }
            }
`
export const NavbarBtnWrap = styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const NavbarLogging = styled.div`
    display:flex;
    align-items:center;
    flex:0.6;
    justify-content:space-around;
    font-size:16px;
    margin-right:20px;
    
    svg{
        color: #ff4605;
    }
    p{  
        cursor: pointer;
        transition:all 0.3s ease;
        &:hover{
            color: #ff4605;
            transition:all 0.3s ease;
        }
    }
    span{
        width:2px;
        height:20px;
        background-color:#50514f;
        margin:0 5px;
    }
`
export const Button = styled.div`
    flex:0.4;
    display:flex;
    min-width:160px;
    height:50px;
    border: 1px solid #ff4605;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    cursor: pointer;
    transition:all 0.3s ease;
    p{
        margin-left:5px;
        font-size:18px;
    }
    &:hover{
        background:#ff4605;
        transition:all 0.3s ease;
    }
    svg{
        font-size:20px;
    }
`