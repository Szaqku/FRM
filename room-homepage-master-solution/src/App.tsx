import React, {useCallback, useState} from 'react';
import styled from "styled-components";

const StyledApp = styled.div``

const Main = styled.main`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 360px 410px 237.5px 302.5px 225px;
    grid-template-areas: 
                        "section1"
                        "section2"
                        "section3"
                        "section4"
                        "section5";
    
    @media (min-width: 1440px) {
        grid-template-columns: 420px 420px 60px 100px auto;
        grid-template-rows: 535px 270px;
        grid-template-areas: 
            "section1 section1 section2 section2 section2"
            "section3 section4 section4 section4 section5";
    }
`

const Nav = styled.nav`
    position: fixed;
    height: auto;
    width: 100%;
    z-index: 1;
`
const FullWidthMenu = styled.div`
    display: none;
    
    @media (min-width: 1440px) {
        display: block;
        position: relative; 
        text-transform: lowercase;
        font-size: 13.5px;
        color: ${({theme}) => theme.colors.primary.white};
        font-weight: ${({theme}) => theme.typography.fontWeight.bolder};
        display: flex;
        gap: 31px;
        z-index: 20;
        letter-spacing: -1.2px;
        left: 182px;
        top: 64px;
        
        & > a:after {
            content: '';
            display: flex;
            position: relative;
            height: 2px;
            background-color: ${({theme}) => theme.colors.primary.white};
            width: 0;
            transition: width 0.25s ease-out;
        }
        
        & > a:hover::after {
            width: 100%;
        }
        
    }
`

const HamburgerMenu = styled.div.attrs(
    ({ active }: { active: boolean }) => ({ active })
)`
    padding: 50px 24.5px;
    // position: relative;
    text-transform: lowercase;
    font-size: 13.5px;
    font-weight: ${({theme}) => theme.typography.fontWeight.bolder};
    display: flex;
    gap: 31px;
    justify-content: end;
    z-index: 20;
    letter-spacing: -1.2px;
    
    & > a {
        display: none;
    }
    
    ${({theme, active}) => active && `
        background-color: ${theme.colors.primary.white};
        &:after {
            content: '';
            width: 100vw;
            height: 100vh;
            background-color: black;
            opacity: 70%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
        }
        
        & > a {
            display: block;
            position: relative;
            text-align: center;
            text-align: -webkit-center;
            cursor: pointer;
        }
        
        @keyframes example {
            from {background-color: red;}
            to {background-color: yellow;}
        }
        
        & > a:after {
            content: '';
            display: flex;
            position: relative;
            height: 2px;
            background-color: black;
            width: 0;
            transition: width 0.25s ease-out;
        }
        
        & > a:hover::after {
            width: 100%;
        }
    `}
    
    @media (min-width: 1440px) {
        display: none;
    }
`

const Link = styled.a`
    
`
const ArrowButton = styled.span`
    background-image: url(${process.env.PUBLIC_URL}/images/icon-arrow.svg);
    height: 11px;
    width: 40px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline-block;
`
const Section = styled.section`
    position: relative;
`
const AdditionalInfoSection = styled(Section)`
    padding: 46px 31px;
    
    & > h3 {
        letter-spacing: 3px;
        text-transform: uppercase;
    }
    
    & > p {
        line-height: 19.5px;
        padding-right: 5px;
    }
`
const TopSection = styled(Section)`
    padding: 34px 25px 34px 33px;
    
    & h1 {
        margin-top: 37px;
        margin-bottom: 15px;
        font-size: 28px;
        font-weight: ${({theme}) => theme.typography.fontWeight.bolder};
        letter-spacing: -1.4px;
    }
    
    & p {
        line-height: 19.75px;
        letter-spacing: -0.3px;
        word-spacing: 0px;
        padding-right: 10px;
        font-size: 12px;
    }
    
    @media (min-width: 1440px) {
        padding: 80px 90px 80px 100px;
        
        & h1 {
            font-size: 38px;
            letter-spacing: -0.75px;
        }
        
        & p {
            margin-top: 26px;
            line-height: 19.75px;
            letter-spacing: -0.25px;
        }
    }
`
const BackgroundImage = styled.div.attrs(
    ({ mobileRelativePath, desktopRelativePath }: { mobileRelativePath: string; desktopRelativePath: string }) => ({
        mobileRelativePath,
        desktopRelativePath
}))`
    background-image: url(${process.env.PUBLIC_URL}${props => props.mobileRelativePath});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    
    @media (min-width: 1440px) {
        background-image: url(${process.env.PUBLIC_URL}${props => props.desktopRelativePath ? props.desktopRelativePath : props.mobileRelativePath});
    }
`
const Logo = styled.div`
    background-image: url(${process.env.PUBLIC_URL}/images/logo.svg);
    background-repeat: no-repeat;
    background-position: center;
    height: 16px;
    width: 100%;
    position: absolute;
    top: 48px;
    z-index: -1;
    
    @media (min-width: 1440px) {
        left: 64px;
        top: 64px;
        background-position: left center;
    }
`
const HamburgerIcon = styled.div.attrs(
    ({ active }: { active: boolean }) => ({ active })
)`
    background-image: url(${process.env.PUBLIC_URL}/images/${({active}) => !active ? 'icon-hamburger.svg' : 'icon-close.svg'}); 
    background-repeat: no-repeat;
    height: 14px;
    width: 20px;
    position: absolute;
    top: 47.5px;
    left: 25px;
    z-index: 1;
`
const Button = styled.a`
    height: 56px;
    width: 56px;
    background-repeat: no-repeat;
    background-position: center;
    background-clip: content-box;
    cursor: pointer;
    
    &:hover {
        background-color: ${({theme}) => theme.colors.primary.veryDarkGray};
    }
    
    @media (min-width: 1440px) {
        left: 100%;
        right: unset;
        height: 80px;
        width: 80px;
        z-index: 10
    }
`
const LeftButton = styled(Button)`
    background-image: url(${process.env.PUBLIC_URL}/images/icon-angle-left.svg);
`
const RightButton = styled(Button)`
    background-image: url(${process.env.PUBLIC_URL}/images/icon-angle-right.svg);
`
const ShopNowLink = styled.a`
    display: flex;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin-top: 54px;
    align-items: center;
    gap: 32px;
    cursor: pointer;
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary.darkGray}
    }
`
const ButtonSection = styled.div`
    display: flex;
    position: absolute;
    background-color: black;
    justify-content: end;
    align-items: end;
    bottom: 0;
    right: 0;
    
    @media (min-width: 1440px) {
        left: 100%;
        right: unset;
    }
`
const Title = styled.h1``
const AdditionalInfoTitle = styled.h3``
const Description = styled.p``
const Slider = styled.div``
const Slide = styled.div.attrs(({ active }: { active: boolean }) => ({ active }))`
    display: ${({ active }) => active ? 'block' : 'none'};
`

const useSlider = (maxSlideIndex: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(
        () => setCurrentIndex((index) => ( index + 1 )% maxSlideIndex)
    , [setCurrentIndex]);
    const previousSlide = useCallback(
        () => setCurrentIndex((index) => ((index - 1) < 0 ? maxSlideIndex - 1 : index - 1 ) % maxSlideIndex)
    , [setCurrentIndex]);

    return { currentIndex , nextSlide, previousSlide}
}

function App() {
    const [showMenu, setShowMenu] = useState(false);
    const { currentIndex, nextSlide, previousSlide } = useSlider(3);
    return (
        <StyledApp>
            <header>
                <Nav>
                    <HamburgerMenu active={showMenu}>
                        <HamburgerIcon active={showMenu} onClick={() => setShowMenu(!showMenu)}/>
                        <Link>Home</Link>
                        <Link>Shop</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                    </HamburgerMenu>
                    <Logo />
                    <FullWidthMenu>
                        <Link>Home</Link>
                        <Link>Shop</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                    </FullWidthMenu>
                </Nav>
            </header>
            <Main>
                <Section style={{ gridArea: 'section1' }}>
                    <Slider>
                        <Slide active={0 == currentIndex}>
                            <BackgroundImage
                                mobileRelativePath='/images/mobile-image-hero-1.jpg'
                                desktopRelativePath='/images/desktop-image-hero-1.jpg'
                            />
                        </Slide>
                        <Slide active={1 == currentIndex}>
                            <BackgroundImage
                                mobileRelativePath='/images/mobile-image-hero-2.jpg'
                                desktopRelativePath='/images/desktop-image-hero-2.jpg'/>
                        </Slide>
                        <Slide active={2 == currentIndex}>
                            <BackgroundImage
                                mobileRelativePath='/images/mobile-image-hero-3.jpg'
                                desktopRelativePath='/images/desktop-image-hero-3.jpg'/>
                        </Slide>
                        <ButtonSection>
                            <LeftButton onClick={previousSlide}/>
                            <RightButton onClick={nextSlide}/>
                        </ButtonSection>
                    </Slider>
                </Section>
                <TopSection style={{ gridArea: 'section2' }}>
                    <Slider>
                        <Slide active={0 == currentIndex}>
                            <Title>Discover innovative ways to decorate</Title>
                            <Description>
                                We provide unmatched quality, comfort, and style for property owners across the country.
                                Our experts combine form and function in bringing your vision to life. Create a room in your
                                own style with our collection and make your property a reflection of you and what you love.
                            </Description>
                        </Slide>
                        <Slide active={1 == currentIndex}>
                            <Title>We are available all across the globe</Title>
                            <Description>
                                With stores all over the world, it's easy for you to find furniture for your home or place of business.
                                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
                                store locator. Any questions? Don't hesitate to contact us today.
                            </Description>
                        </Slide>
                        <Slide active={2 == currentIndex}>
                            <Title>Manufactured with the best materials</Title>
                            <Description>
                                Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                                to ensure that every product is made as perfect and as consistent as possible. With three decades of
                                experience in this industry, we understand what customers want for their home and office.
                            </Description>
                        </Slide>
                        <ShopNowLink>
                            <span>Shop now</span>
                            <ArrowButton />
                        </ShopNowLink>
                    </Slider>
                </TopSection>
                <Section style={{ gridArea: 'section3' }}>
                    <BackgroundImage mobileRelativePath='/images/image-about-dark.jpg'/>
                </Section>
                <AdditionalInfoSection style={{ gridArea: 'section4' }}>
                    <AdditionalInfoTitle>
                        About our furniture
                    </AdditionalInfoTitle>
                    <Description>
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </Description>
                </AdditionalInfoSection>
                <Section style={{ gridArea: 'section5' }}>
                    <BackgroundImage mobileRelativePath='/images/image-about-light.jpg' />
                </Section>
            </Main>

        </StyledApp>
    );
}

export default App;
