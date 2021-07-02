import { Layout, Row, Col, Typography, Card } from 'antd';
import { DjangoIcon, ReactIcon } from '../../Assets/Svg';

const { Content } = Layout;
const { Title } = Typography;

export const Skills = () => {
    return (
        <>
            <Layout>
                <Content  style={{ marginTop: 64 }}>
                    <div id="skills"  style={{ minHeight: 750 }}>
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
                        <Row style={{ marginTop: '10vh' }}>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={18} xl={18} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "left" }}>
                                <Row>
                                    <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
                                    <Col xxl={9} xl={9} lg={9} xs={9} md={9} sm={9}>
                                        <Card data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once hoverable style={{ borderWidth: 1, borderRadius: 12, width: '100%', margin: 'auto' }}>
                                            <Title style={{ textAlign: 'center' }} level={3}>Web Frameworks</Title>
                                            <br />
                                            <DjangoIcon />
                                            <ReactIcon />
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
                                    <Col xxl={9} xl={9} lg={9} xs={9} md={9} sm={9}>
                                        <Card data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once
                                            hoverable style={{ borderWidth: 1, borderRadius: 12, width: '100%', margin: 'auto' }}>
                                            <Title style={{ textAlign: 'center' }} level={3}>Languages</Title>
                                            <br />
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
                                </Row>
                                <br />
                                <Row>
                                    <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
                                    <Col xxl={9} xl={9} lg={9} xs={9} md={9} sm={9}>
                                        <Card data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once
                                            hoverable style={{ borderWidth: 1, borderRadius: 12, width: '100%' }}>
                                            <Title style={{ textAlign: 'center' }} level={3}>Deployment</Title>
                                            <br />
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
                                    <Col xxl={9} xl={9} lg={9} xs={9} md={9} sm={9}>
                                        <Card data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once
                                            hoverable style={{ borderWidth: 1, borderRadius: 12, width: '100%', margin: 'auto' }}>
                                            <Title style={{ textAlign: 'center' }} level={3}>Databases</Title>
                                            <br />
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />

                                </Row>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                    </div>
                </Content>
            </Layout>
        </>
    )
}
