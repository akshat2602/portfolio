import { Layout, Row, Col, Typography } from 'antd';
import React, { useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import './Landing.css';
import Akshat from './Akshat.webp';

const { Content } = Layout;
const { Title } = Typography;

const TEXTS = [
    "Student",
    "Full Stack Developer",
    "Data Scientist"
];


export const Landing = () => {
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2000 // every 2 seconds
        );
        return () => clearTimeout(intervalId);
    }, [])
    return (
        <>
            <Layout>
                <Content style={{ marginTop: 64 }}>
                    <div id="home" style={{ minHeight: 750 }}>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={8} xl={8} lg={18} xs={20} md={18} sm={18}>
                                <div>
                                    <Title data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once
                                        style={{ fontWeight: 300, textAlign: 'left' }} className="title-tagline" level={1}> Hello there! <br /> I am <span style={{ fontWeight: 600 }}>Akshat Sharma</span> </Title>
                                    <Title data-aos="zoom-out"
                                        data-aos-delay="500"
                                        data-aos-once level={3} style={{ fontWeight: 400, display: 'flex' }}>
                                        <p>A</p>
                                        <TextTransition
                                            style={{ width: 500, textAlign: 'left', marginLeft: 8 }}
                                            text={TEXTS[index % TEXTS.length]}
                                            springConfig={presets.molasses}
                                        />
                                    </Title>
                                    <Title data-aos="zoom-out"
                                        data-aos-delay="700"
                                        data-aos-once
                                        style={{ fontWeight: 300, textAlign: 'left', width: '100%' }} level={3}>I'm a Second Year Student from Pune Institute of Computer Technology, Pune, currently exploring Full Stack Web Development and Data Science. I like watching anime and playing games in my spare time.</Title>
                                </div>
                            </Col>
                            <Col xxl={1} xl={1} lg={7} xs={2} />
                            <Col xxl={0} xl={0} lg={0} xs={2} md={3} sm={3} />
                            <Col xxl={9} xl={9} lg={9} xs={2} md={3} sm={3}>
                                <div>
                                    <img data-aos="zoom-out"
                                        data-aos-delay="700"
                                        data-aos-once className="landing-img" alt="akshat" src={Akshat} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </>
    )
}
