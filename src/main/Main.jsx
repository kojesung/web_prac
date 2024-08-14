import Issue from './Issue';
import TeamIntro from './TeamIntro';

const Main = () => {
    return (
        <div style={{ backgroundColor: '#e1d6c4', width: '99vw', height: '98vh' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                {/* height를 지정해줘야 해당 크기만큼 flex를 나눠줌 */}
                <div style={{ display: 'flex', flex: '2', flexDirection: 'column', height: '100%' }}>
                    <div
                        style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: '95%',
                                height: '90%',
                                borderRadius: '5%',
                                backgroundColor: '#FDFAF3',
                            }}
                        >
                            <Issue />
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: '95%',
                                height: '90%',
                                borderRadius: '5%',
                                backgroundColor: '#FDFAF3',
                            }}
                        >
                            <TeamIntro />
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        flex: '3',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '95%',
                            height: '95%',
                            borderRadius: '5%',
                            backgroundColor: '#FDFAF3',
                        }}
                    >
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
