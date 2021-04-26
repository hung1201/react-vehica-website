import React from 'react'
import { ContacDetailRow, ContactArrowContainer, ContactArrowWrap, ContactBtn, ContactColLeft, ContactContainer, ContactLeftDetail, ContactLeftTitle,ContactColRight, ContactBG, ContactInfoItem, ContactInfoImgWrap, ContactInfoImg, ContactInfoDetail, ContactInfoName, ContactInfoRole, ContactInfoEmail, ContactInfoTel, HaflCircle, ContactModal, Footer } from './ContactEle'
import {AiFillCheckCircle} from 'react-icons/ai'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
const Contact = () => {
    return (
        <>
        <ContactContainer>
            <ContactBG>
                <HaflCircle/>
                 <ContactColLeft>
                <ContactLeftTitle>
                    <p>Our team</p>
                </ContactLeftTitle>
                <ContactLeftDetail>
                    <ContacDetailRow>
                        <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                    </ContacDetailRow>
                    <ContacDetailRow>
                        <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                    </ContacDetailRow>
                    <ContacDetailRow>
                        <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                    </ContacDetailRow>
                    <ContacDetailRow>
                        <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                    </ContacDetailRow>
                    <ContacDetailRow>
                        <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                    </ContacDetailRow>
                </ContactLeftDetail>
                <ContactBtn>
                        <p>Learn more</p>
                    </ContactBtn>
                    <ContactArrowContainer>
                        <ContactArrowWrap>
                            <FaAngleLeft/>
                        </ContactArrowWrap>
                        <ContactArrowWrap>
                            <FaAngleRight/>
                        </ContactArrowWrap>
                    </ContactArrowContainer>
            </ContactColLeft>
            </ContactBG>
           
            <ContactColRight>
                <ContactInfoItem>
                    <ContactInfoImgWrap>
                        <ContactInfoImg/>
                    </ContactInfoImgWrap>
                    <ContactInfoDetail>
                        <ContactInfoName>
                            <p>NguyenHung</p>
                        </ContactInfoName>
                        <ContactInfoRole>
                            <p>Front-end Dev</p>
                        </ContactInfoRole>
                        <span></span>
                        <ContactInfoEmail>
                            <p>hungnh.work@gmail.com</p>
                        </ContactInfoEmail>
                        <ContactInfoTel>
                            <p>032-7742-2006</p>
                        </ContactInfoTel>
                    </ContactInfoDetail>
                </ContactInfoItem>
                <ContactInfoItem>
                    <ContactInfoImgWrap>
                        <ContactInfoImg/>
                    </ContactInfoImgWrap>
                    <ContactInfoDetail>
                        <ContactInfoName>
                            <p>NguyenHung</p>
                        </ContactInfoName>
                        <ContactInfoRole>
                            <p>Front-end Dev</p>
                        </ContactInfoRole>
                        <span></span>
                        <ContactInfoEmail>
                            <p>hungnh.work@gmail.com</p>
                        </ContactInfoEmail>
                        <ContactInfoTel>
                            <p>032-7742-2006</p>
                        </ContactInfoTel>
                    </ContactInfoDetail>
                </ContactInfoItem><ContactInfoItem>
                    <ContactInfoImgWrap>
                        <ContactInfoImg/>
                    </ContactInfoImgWrap>
                    <ContactInfoDetail>
                        <ContactInfoName>
                            <p>NguyenHung</p>
                        </ContactInfoName>
                        <ContactInfoRole>
                            <p>Front-end Dev</p>
                        </ContactInfoRole>
                        <span></span>
                        <ContactInfoEmail>
                            <p>hungnh.work@gmail.com</p>
                        </ContactInfoEmail>
                        <ContactInfoTel>
                            <p>032-7742-2006</p>
                        </ContactInfoTel>
                    </ContactInfoDetail>
                </ContactInfoItem>
            </ContactColRight>
        </ContactContainer>
        <Footer/>
        </>
    )
}

export default Contact
