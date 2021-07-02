import { Layout, Row, Col, Typography, BackTop, Tooltip } from 'antd';
import { GithubIcon, LinkedinIcon, EmailIcon, InstaIcon, GoUpIcon } from '../../Assets/Svg';

const { Content, Footer } = Layout;
const { Title } = Typography;

const style = {
    height: 36,
    width: 36,
    lineHeight: '40px',
    borderRadius: 18,
    backgroundColor: '#6272a4',
    color: '#282a36',
    textAlign: 'center',
    fontSize: 14,
};


export const Contact = () => {
    const upButtonOnClick = (e) => {
        window.location.href = '#';
    }
    return (
        <>
            <Layout>
                <Tooltip title="Go Up" color={'#6272a4'} key={'#6272a4'}>
                    <BackTop onClick={upButtonOnClick}>
                        <div style={style}> <GoUpIcon /> </div>
                    </BackTop>
                </Tooltip>
                <Content style={{ marginTop: 64 }}>
                    <div id="contact" style={{ minHeight: 400 }}>
                        <Row>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "center" }}>
                                <div>
                                    <Title data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once level={1}>Let's get in touch...</Title>
                                    <Title data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once level={4}>You can reach out to me on any of these platforms!</Title>
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                        <Row>
                            <Col xxl={6} xl={6} lg={4} xs={3} md={3} sm={3} />
                            <Col xxl={12} xl={12} lg={16} xs={18} md={18} sm={18}>
                                <div>
                                    <br />
                                    <br />
                                    <a data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once
                                        target="blank"
                                        rel="noreferrer"
                                        href="https://www.github.com/akshat2602">
                                        <GithubIcon />
                                    </a>
                                    <a data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once
                                        target="blank"
                                        rel="noreferrer"
                                        style={{ marginLeft: '8%' }}
                                        href="https://www.linkedin.com/in/akshat-sharma-2602/">
                                        <LinkedinIcon />
                                    </a>
                                    <a data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once
                                        target="blank"
                                        rel="noreferrer"
                                        style={{ marginLeft: '8%' }}
                                        href="mailto:akshatsharma2602@gmail.com">
                                        <EmailIcon />
                                    </a>
                                    <a data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once
                                        target="blank"
                                        rel="noreferrer"
                                        style={{ marginLeft: '8%' }}
                                        href="https://www.instagram.com/_.st3llar._/">
                                        <InstaIcon />
                                    </a>
                                </div>
                            </Col>
                            <Col xxl={6} xl={6} lg={4} xs={3} md={3} sm={3} />
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Made with &#10084;&#65039; by Akshat Sharma
                </Footer>
            </Layout>
        </>
    )
}
