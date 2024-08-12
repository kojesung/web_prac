import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e1d6c4;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8vh;
    flex-direction: column;
`;

export const LogoGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: ${(props) => props.width || 'auto'};
    height: auto;
    border-radius: ${(props) => props.borderRadius || '0'};
`;

export const ButtonContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin-bottom: ${(props) => props.marginBottom || '0'};
`; //ButtonContainer에 대해 동일한 styled을 유지하고 margin-bottom값만 동적으로 처리하기 위해 props로 전달
//javascript의 || 연산자는 조건들을 왼쪽부터 살피면서 true인 값을 발견하면 그 값을 반환해줌(다 false면 마지막 값)
//삼항연산자 `?`의 기준과 논리연산자 truthy, falsy의 기준이 달라서 논리 연산자 사용
