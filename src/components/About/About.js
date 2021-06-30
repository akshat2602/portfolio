import { Layout, Row, Col, Typography } from 'antd';
import './About.css';
const { Content } = Layout;
const { Title } = Typography;


export const About = () => {
    return (
        <>
            <Layout>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div id="about" className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Row>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "center" }}>
                                <div>
                                    <Title data-aos="zoom-out" data-aos-delay="200" data-aos-once>About Me</Title>
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={9} xl={9} lg={9} xs={10} md={9} sm={9} style={{ textAlign: "left" }}>
                                <div data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once>
                                    <Title level={2} style={{ fontWeight: 300 }}>I am a Second Year Student from the Pune Institute of Computer Technology, Pune, currently exploring Full Stack Web Development and Data Science.</Title>

                                </div>
                            </Col>
                            <Col xxl={9} xl={9} lg={9} xs={10} md={9} sm={9} style={{ textAlign: "center" }}>
                                <div>
                                    <Title level={3}> Worked at</Title>
                                    <a data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once target="blank"
                                        rel="noreferrer" href="https://dataorc.in"><img alt="Dataorc" className="dataorc-img" src="https://storage.googleapis.com/dataorc_statics_ind/homepage/images/logo.png" /></a>
                                    <a data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once target="blank"
                                        rel="noreferrer" href="https://fossee.in"><img alt="FOSSEE" className="fossee-img" src="https://static.fossee.in/fossee/logos/FOSSEE_logo.png" /></a>
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
