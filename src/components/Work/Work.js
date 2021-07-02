import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import './Work.css';
import { work } from './workData';


const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;


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
                            <Col xxl={3} xl={3} lg={4} xs={3} md={3} sm={3} />
                            {work.map(data => {
                                return (<>
                                    <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
                                        <Card
                                            key={data.title}
                                            data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once
                                            hoverable
                                            style={{ marginTop: '10vh', borderWidth: 0, textAlign: 'justify' }}
                                            loading={false}
                                            cover={<img src={data.logo} alt="logo" className="companyLogo" />}
                                        >
                                            <Meta
                                                title={<h2>{data.title}</h2>}
                                                description={<h3 style={{ color: '#6272a4' }}>{data.description}</h3>}
                                            />
                                            {data.content}
                                        </Card>
                                    </Col>
                                    <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
                                    <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
                                </>)
                            })}
                        </Row>
                    </div>
                </Content>
            </Layout>
        </>
    )
}
