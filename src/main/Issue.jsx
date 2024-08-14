import mocks from './Issue_mock.json';
import {
    Container,
    IssueHeader,
    IssueHeaderTitle,
    IssueNav,
    IssueContentWrapper,
    IssueItem,
    IssueDate,
    IssueText,
} from './Issue.styles';

const Issue = () => {
    return (
        <Container>
            <IssueHeader>
                <IssueHeaderTitle>소식</IssueHeaderTitle>
                <IssueNav>
                    <div style={{ margin: '2%' }}>공지사항</div>
                    <div style={{ margin: '2%' }}>업데이트</div>
                    <div style={{ margin: '2%' }}>이벤트</div>
                </IssueNav>
            </IssueHeader>
            <IssueContentWrapper>
                {mocks.map((item) => (
                    <IssueItem key={item.id}>
                        <IssueDate>{item.date}</IssueDate>
                        <IssueText>{item.content}</IssueText>
                    </IssueItem>
                ))}
            </IssueContentWrapper>
        </Container>
    );
};

export default Issue;
