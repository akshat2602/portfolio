import { Layout, Row, Col, Typography, Card } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export const Skills = () => {
    return (
        <>
            <Layout>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div id="skills" className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Row>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "center" }}>
                                <div>
                                    <Title data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once>Skills</Title>
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={18} xl={18} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "left" }}>
                                <div data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once>
                                    <Card hoverable style={{ borderWidth: 1, borderRadius: 12, width: '100%', marginBottom: '2%' }}>
                                        <Title style={{ textAlign: 'center' }} level={3}>Web Frameworks</Title>
                                        <br />

                                    </Card>
                                </div>
                                <div data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once>
                                    <Card hoverable style={{ borderWidth: 1, borderRadius: 12, width: '100%', marginBottom: '2%' }}>
                                        <Title style={{ textAlign: 'center' }} level={3}>Languages</Title>
                                        <br />

                                    </Card>
                                </div>
                                <div data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once>
                                    <Card hoverable style={{ borderWidth: 1, borderRadius: 12, width: '100%', marginBottom: '2%' }}>
                                        <Title style={{ textAlign: 'center' }} level={3}>Deployment</Title>
                                        <br />

                                    </Card>
                                </div>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                    </div>
                </Content>
            </Layout>
        </>
    )
}
