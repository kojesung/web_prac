import React from 'react';
import layer1 from '../assets/loginPageAssets/Layer_1.svg';
import group from '../assets/loginPageAssets/Group 2249.svg';
import kakao_login from '../assets/loginPageAssets/kakao_login.svg';
import apple_login from '../assets/loginPageAssets/apple_login.svg';
import { Container, LogoContainer, LogoGroup, Image, ButtonContainer } from './Login.styles';

const LoginPage = () => {
    return (
        <Container>
            <LogoContainer>
                <LogoGroup>
                    <Image src={layer1} alt="layer 1" width="10vw" marginRight="2vw" />
                    <Image src={group} alt="Group 2249" width="25vw" />
                </LogoGroup>
            </LogoContainer>
            <ButtonContainer marginBottom="5vh">
                <Image src={kakao_login} alt="kakao login" width="100%" marginBottom="2vh" borderRadius="8px" />
            </ButtonContainer>
            <ButtonContainer>
                <Image src={apple_login} alt="apple login" width="100%" borderRadius="8px" />
            </ButtonContainer>
        </Container>
    );
};

export default LoginPage;
