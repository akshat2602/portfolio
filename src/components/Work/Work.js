import { Layout, Row, Col, Typography } from 'antd';
import './Work.css';
const { Content } = Layout;
const { Title } = Typography;


export const Work = () => {
    return (
        <>
            <Layout>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div id="work" className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Row>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "center" }}>
                                <div>
                                    <Title data-aos="zoom-out" data-aos-delay="200" data-aos-once>Worked At</Title>
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={18} xl={18} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "center" }}>
                                <div>
                                    <a data-aos="zoom-out" data-aos-delay="200" data-aos-once
                                        target="blank"
                                        rel="noreferrer"
                                        href="https://github.com/frg-fossee/eSim-Cloud"><img alt="FOSSEE" style={{ width: 350 }} src="https://static.fossee.in/fossee/logos/FOSSEE_logo.png" /></a>
                                    {/* <a target="blank"
                                        rel="noreferrer"
                                        href="https://www.linkedin.com/company/bitglaze-technologies-pvt-ltd/about/"><img alt="Bitglaze" src=""></img></a> */}
                                    <a data-aos="zoom-out" data-aos-delay="200" data-aos-once
                                        target="blank"
                                        rel="noreferrer"
                                        href="https://dataorc.in"><img alt="Dataorc" style={{ width: 350, marginLeft: '5%' }} src="https://storage.googleapis.com/dataorc_statics_ind/homepage/images/logo.png" /></a>
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
