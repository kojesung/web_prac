const TeamIntro = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ margin: '4%', flex: '1', fontWeight: 'bold' }}>팀 소개</div>
                <div style={{ display: 'flex', flex: '1', justifyContent: 'space-around', margin: '2%' }}>
                    <div>PM</div>
                    <div>디자이너</div>
                    <div>백엔드</div>
                    <div>프론트엔드</div>
                </div>
            </div>
            <div style={{ flex: '7', padding: '2%' }}>
                <div style={{ display: 'flex', height: '100%', border: '1px solid black' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: '1',
                            border: '1px solid black',
                            padding: '2%',
                        }}
                    >
                        <div style={{ border: '1px solid black', flex: '7' }}>사진</div>
                        <div style={{ border: '1px solid black', flex: '1' }}>이름</div>
                    </div>
                    <div style={{ flex: '1', padding: '3%' }}>
                        <div>간략소개</div>
                        <div>
                            <ul>
                                <li>dd</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamIntro;
