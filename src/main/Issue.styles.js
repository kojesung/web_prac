import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const IssueHeader = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

export const IssueHeaderTitle = styled.div`
    margin: 4%;
    flex: 1;
    font-weight: bold;
    font-size: 115%;
`;

export const IssueNav = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    margin: 2%;
`;

export const IssueContentWrapper = styled.div`
    display: flex;
    flex: 7;
    flex-direction: column;
    margin: 4%;
    justify-content: space-around;
    width: 100%;
`;

export const IssueItem = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
`;

export const IssueDate = styled.div`
    flex: 1;
    font-weight: bold;
`;

export const IssueText = styled.div`
    width: 90%;
    flex: 4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
