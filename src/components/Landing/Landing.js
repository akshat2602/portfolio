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
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div id="home" className="site-layout-background" style={{ padding: 24, minHeight: 640 }}>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                            <Col xxl={8} xl={8} lg={18} xs={20} md={18} sm={18}>
                                <div data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once>
                                    <Title data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once
                                        style={{ fontWeight: 300, textAlign: 'left' }} className="title-tagline" level={1}> Hello there! <br /> I am <span style={{ fontWeight: 600 }}>Akshat Sharma</span> </Title>
                                    <Title data-aos="zoom-out"
                                        data-aos-delay="200"
                                        data-aos-once level={3} style={{ fontWeight: 400, display: 'flex' }}>
                                        <p>A &#8287;</p>
                                        <TextTransition
                                            style={{ width: 500, textAlign: 'left' }}
                                            text={TEXTS[index % TEXTS.length]}
                                            springConfig={presets.molasses}
                                        />
                                    </Title>
                                    <Title style={{ fontWeight: 300, textAlign: 'left', width: '75%' }} level={3}>I'm a Second Year Student from Pune Institute of Computer Technology, Pune, currently exploring Full Stack Web Development and Data Science.</Title>
                                    {/* <Title level={2} style={{ textAlign: 'left' }}> Worked at</Title> */}
                                    {/* <div style={{}}>
                                        <a data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once target="blank"
                                            rel="noreferrer" href="https://dataorc.in"><img alt="Dataorc" className="dataorc-img" src="https://storage.googleapis.com/dataorc_statics_ind/homepage/images/logo.png" /></a>
                                        <a data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once target="blank"
                                            rel="noreferrer" href="https://fossee.in"><img alt="FOSSEE" className="fossee-img" src="https://static.fossee.in/fossee/logos/FOSSEE_logo.png" /></a>
                                    </div> */}
                                </div>
                            </Col>
                            <Col xxl={1} xl={1} lg={7} xs={2} />
                            <Col xxl={9} xl={9} lg={9}>
                                <div>
                                    <img data-aos="zoom-out"
                                        data-aos-delay="200"
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
