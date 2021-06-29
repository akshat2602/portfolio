import { Layout } from 'antd';
import { Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export const Landing = () => {
    return (
        <>
            <Layout>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Title style={{ float: 'left' }} level={1}> Hi, I'm Akshat Sharma</Title>
                        <img style={{ float: 'right', width: 400 }} alt="example" src="https://i.imgur.com/UVcZDJH.jpg" />
                    </div>
                </Content>
            </Layout>
        </>
    )
}
