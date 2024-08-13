const Issue = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ margin: '4%', flex: '1' }}>소식</div>
                <div style={{ display: 'flex', flex: '1', margin: '2%' }}>
                    <div style={{ margin: '2%' }}>공지사항</div>
                    <div style={{ margin: '2%' }}>업데이트</div>
                    <div style={{ margin: '2%' }}>이벤트</div>
                </div>
            </div>
            <div style={{ flex: '7', border: '1px solid black' }}>
                <div>
                    {/* map으로 돌리기 */}
                    <div style={{ display: 'flex' }}>
                        <div>날짜</div>
                        <div>내용</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Issue;
