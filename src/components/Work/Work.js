import React from 'react';
import { Layout, Row, Col, Typography, Card, Button } from 'antd';
import './Work.css';
import { work } from './workData';
import Bitglaze from '../../Assets/Bitglaze.png';


const { Content } = Layout;
const { Title } = Typography;


export const Work = () => {

    return (
        <>
            <Layout>
                <Content style={{ marginTop: 64 }}>
                    <div id="work" style={{ minHeight: 750 }}>
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
                            <Col xxl={3} xl={3} lg={3} xs={1} md={3} sm={3} />
                            {work.map(data => {
                                return (<>
                                    <Col xxl={6} xl={6} lg={18} xs={22} md={18} sm={18}>
                                        <Card
                                            key={data.title}
                                            data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once
                                            hoverable
                                            className="workCard"
                                            style={{ borderWidth: 0 }}
                                            loading={false}>
                                            <img src={data.logo} alt="logo" className="companyLogo" style={{ alignContent: 'center' }} />
                                            <div style={{ textAlign: 'left', color: '#6272a4', wordWrap: 'break-word' }}>
                                                <h1><b>{data.title}</b></h1>
                                                <h2>{data.description}</h2>
                                                <h3>{data.content}</h3>
                                                <Button type="primary" shape="round" size='large' href={data.href}>
                                                    Visit Github/Website
                                                </Button>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col xxl={0} xl={0} lg={3} xs={1} md={3} sm={3} />
                                    <Col xxl={0} xl={0} lg={3} xs={1} md={3} sm={3} />
                                </>)
                            })}
                        </Row>
                        <Row>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "center" }}>
                                <div style={{ marginTop: '5%' }}>
                                    <Title data-aos="zoom-out" data-aos-delay="200" data-aos-once>Recommendations</Title>
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} xs={1} md={3} sm={3} />
                            <Col xxl={18} xl={18} lg={18} xs={22} md={18} sm={18}>
                                <Card
                                    data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once
                                    hoverable
                                    className="testimonialCard"
                                    style={{ borderWidth: 0 }}
                                    loading={false}
                                    actions={[
                                        <a href="https://www.linkedin.com/in/rushil-somwanshi/" target="blank" rel="noreferrer"><h2 style={{ textAlign: 'left', marginLeft: '2%' }}>Rushil Somwanshi, Director at Bitglaze Technologies Pvt. Ltd.</h2></a>
                                    ]}
                                >
                                    <div style={{ textAlign: 'left', color: '#6272a4', wordWrap: 'break-word' }}>
                                        <img src={Bitglaze} alt="bitglaze" style={{ width: 250, marginBottom: '3%' }} />
                                        <h1><b>I highly recommend Akshat Sharma as an individual of talent and the passion for hard work and learning new things. I worked with him for 4 months and can surely say he was an asset to the team. He wrote good code and made a really robust backend for the resort website which he worked in. Also I was quite happy with his progress and contributions in implementing the machine learning models as he was instructed to. He would definitely be an asset to any organization he will join. I wish him good luck in his career.</b></h1>
                                        <br />

                                    </div>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} xs={1} md={3} sm={3} />
                        </Row>
                    </div>
                </Content>
            </Layout>
        </>
    )
}
