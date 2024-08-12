const Main = () => {
    return (
        <div style={{ backgroundColor: '#e1d6c4', width: '100vw', height: '100vh' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                {/* height를 지정해줘야 해당 크기만큼 flex를 나눠줌 */}
                <div style={{ display: 'flex', flex: '1', flexDirection: 'column', height: '100%' }}>
                    <div style={{ flex: '1', border: '1px solid black' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '95%',
                                height: '95%',
                                borderRadius: '5%',
                                backgroundColor: '#FDFAF3',
                            }}
                        ></div>
                    </div>
                    <div style={{ flex: '1', border: '1px solid black' }}>
                        <div></div>
                    </div>
                </div>
                <div style={{ flex: '1', border: '1px solid black' }}>
                    <div>로그인 및 동물 확인 칸</div>
                </div>
            </div>
        </div>
    );
};

export default Main;
