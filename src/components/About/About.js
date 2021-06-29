import { Layout } from 'antd';

const { Content } = Layout;

export const About = () => {
    return (
        <>
            <Layout>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        About
                    </div>
                </Content>
            </Layout>
        </>
    )
}
