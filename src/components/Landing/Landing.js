import { Layout } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import './Landing.css';

const { Content } = Layout;
const { Title } = Typography;

const TEXTS = [
    "Student",
    "Developer",
    "Gamer",
];


export const Landing = () => {
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2500 // every 3 seconds
        );
        return () => clearTimeout(intervalId);

    }, [])
    return (
        <>
            <Layout>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 640 }}>
                        <Row>
                            <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={6} xl={6} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "left" }}>
                                <div>
                                    <Title style={{ fontWeight: 300 }} className="title-tagline" level={1}> Hello there! <br /> I am <span style={{ fontWeight: 600 }}>Akshat Sharma</span> </Title>
                                    <Title level={3} style={{ fontWeight: 400, display:'flex' }}>
                                        <p>A &#8287;</p>
                                        <TextTransition
                                            text={TEXTS[index % TEXTS.length]}
                                            springConfig={presets.molasses}
                                        />
                                    </Title>
                                </div>
                            </Col>
                            <Col xxl={1} xl={1} lg={7} xs={2} />
                            <Col xxl={9} xl={9} lg={9}>
                                <div>
                                    <img className="landing-img" alt="example" src="https://i.imgur.com/UVcZDJH.jpg" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </>
    )
}
