import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import './Projects.css';
import { projects } from './projectData';


const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;


export const Projects = () => {
    return (
        <>
            <Layout>
                <Content style={{ marginTop: 64 }}>
                    <div id="projects" style={{ minHeight: 750 }}>
                        <Row>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "center" }}>
                                <div>
                                    <Title data-aos="zoom-out" data-aos-delay="200" data-aos-once>Projects</Title>
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                        <Row>
                            <Col xxl={3} xl={3} lg={4} xs={3} md={3} sm={3} />
                            {projects.map(data => {
                                return (<>
                                    <Col xxl={6} xl={6} lg={16} xs={18} md={18} sm={18}>
                                        <Card
                                            key={data.title}
                                            data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once
                                            hoverable
                                            className="projectCard"
                                            style={{ borderWidth: 0 }}
                                            loading={false}>
                                            <div style={{ textAlign: 'left', color: '#6272a4', wordWrap: 'break-word' }}>
                                                <Meta
                                                    title={<h1><b>{data.title}</b></h1>}
                                                    description={<h2><b>{data.description}</b></h2>}
                                                />
                                                <h3>{data.content}</h3>
                                            </div>

                                        </Card>
                                    </Col>
                                    <Col xxl={0} xl={0} lg={0} xs={3} md={3} sm={3} />
                                    <Col xxl={0} xl={0} lg={0} xs={3} md={3} sm={3} />
                                </>)
                            })}
                        </Row>
                    </div>
                </Content>
            </Layout>
        </>
    )
}
