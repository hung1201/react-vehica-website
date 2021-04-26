import React,{useState,useEffect} from 'react'
import { Button, NavbarBtnWrap, NavbarContainer, NavbarLogging, NavbarLogo, NavbarMenu,NavbarMenuList, NavbarMenuItem, NavbarLine} from './NavbarEle'
import { FaAngleDown} from 'react-icons/fa'
import { BiUser} from 'react-icons/bi'
import { BsPlus} from 'react-icons/bs'
const Navbar = () => {
    const [scrollNav,setScrollNav] = useState(false)
    const changeNav = () =>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])
    return (
        <NavbarContainer scrollNav={scrollNav}>
            <NavbarLogo>
                <img src="https://demo.vehica.com/wp-content/uploads/2020/10/vehica-logo-white-2.png" alt="logo"/>
            </NavbarLogo>
            <NavbarMenu>
                <NavbarMenuList>
                    <NavbarLine/>
                    <NavbarMenuItem >
                        <p>Home</p>
                        <FaAngleDown/>
                    </NavbarMenuItem>
                    <NavbarMenuItem >
                        <p>Search</p>
                        <FaAngleDown/>
                    </NavbarMenuItem>
                    <NavbarMenuItem >
                        <p>Listing</p>
                        <FaAngleDown/>
                    </NavbarMenuItem>
                    <NavbarMenuItem >
                       <p>Pages</p>
                        <FaAngleDown/>
                    </NavbarMenuItem>
                    <NavbarMenuItem >
                        <p>More</p>
                        <FaAngleDown/>
                    </NavbarMenuItem>
                </NavbarMenuList>
            </NavbarMenu>
            <NavbarBtnWrap>
                <NavbarLogging>
                    <BiUser/>
                    <p>Login</p>
                    <span></span>
                    <p>Register</p>
                </NavbarLogging>
                <Button>
                    <BsPlus/>
                    <p>Add Listing</p>
                </Button>
            </NavbarBtnWrap>
        </NavbarContainer>
    )
}

export default Navbar
