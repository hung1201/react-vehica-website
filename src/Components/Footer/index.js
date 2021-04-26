import React from 'react'
import { FooterContact, FooterContainer, FooterDesc, FooterListing, FooterLogo, FooterSeparate, FooterSocial, FooterSocialContainer, FooterSocialIconWrap, FooterWrapAll, ListingRow, ListingsCol } from './FooterEle'
import {GoPrimitiveDot} from 'react-icons/go'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
const Footer = () => {
    return (
        <FooterWrapAll>
            <FooterContainer>
                <FooterLogo/>
                <FooterListing>
                    <ListingsCol>
                        <ListingRow>
                            <GoPrimitiveDot/>
                            <p>Listings</p>
                        </ListingRow>
                        <ListingRow>
                            <GoPrimitiveDot/>
                            <p>Listings</p>
                        </ListingRow>
                        <ListingRow>
                            <GoPrimitiveDot/>
                            <p>Listings</p>
                        </ListingRow>
                    </ListingsCol>
                    <ListingsCol>
                    <ListingRow>
                            <GoPrimitiveDot/>
                            <p>Listings</p>
                        </ListingRow>
                        <ListingRow>
                            <GoPrimitiveDot/>
                            <p>Listings</p>
                        </ListingRow>
                        <ListingRow>
                            <GoPrimitiveDot/>
                            <p>Listings</p>
                        </ListingRow>
                    </ListingsCol>
                </FooterListing>
                <FooterDesc>
                    <p>Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</p>
                </FooterDesc>
                <FooterContact>
                    <p>032-774-2006</p>
                    <p>hungnh.work@gmail.com</p>
                    <p>PTIT</p>
                    <p>Ha Noi</p>
                </FooterContact>
            </FooterContainer>
            <FooterSeparate/>
            <FooterSocial>
                <p>Copyright © 2021. All rights reserved.</p>
                <FooterSocialContainer>
                    <FooterSocialIconWrap>
                        <FaFacebook/>
                    </FooterSocialIconWrap>
                    <FooterSocialIconWrap>
                        <FaTwitter/>
                    </FooterSocialIconWrap>
                    <FooterSocialIconWrap>
                        <FaInstagram/>
                    </FooterSocialIconWrap>
                </FooterSocialContainer>
            </FooterSocial>
        </FooterWrapAll>
    )
}

export default Footer
