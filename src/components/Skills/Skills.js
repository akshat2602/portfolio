import { Layout, Row, Col, Typography, Card } from 'antd';
import {
    DjangoIcon,
    ReactIcon,
    FlaskIcon,
    TensorflowIcon,
    PytorchIcon,
    PythonIcon,
    JSIcon,
    CppIcon,
    DockerIcon,
    AWSIcon,
    GitIcon,
    DynamoIcon,
    PostgreSQLIcon,
    MySQLIcon
} from '../../Assets/Svg';

const { Content } = Layout;
const { Title } = Typography;

export const Skills = () => {
    return (
        <>
            <Layout>
                <Content style={{ marginTop: 64 }}>
                    <div id="skills" style={{ minHeight: 750 }}>
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
                            <Col xxl={3} xl={3} lg={4} xs={1} md={3} sm={3} />
                            <Col xxl={9} xl={9} lg={8} xs={22} md={18} sm={18}>
                                <Card data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once
                                    hoverable
                                    className="skill-card"
                                    style={{ borderWidth: 0, borderRadius: 12, marginTop: '5%' }}>
                                    <Title style={{ textAlign: 'center' }} level={3}>Frameworks/Libraries</Title>
                                    <br />
                                    <FlaskIcon />
                                    <DjangoIcon />
                                    <ReactIcon />
                                    <TensorflowIcon />
                                    <PytorchIcon />
                                </Card>
                            </Col>
                            <Col xxl={0} xl={0} lg={0} xs={1} md={3} sm={3} />
                            <Col xxl={0} xl={0} lg={0} xs={1} md={3} sm={3} />
                            <Col xxl={9} xl={9} lg={8} xs={22} md={18} sm={18}>
                                <Card data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once
                                    hoverable
                                    className="skill-card"
                                    style={{ borderWidth: 0, borderRadius: 12, marginTop: '5%' }}>
                                    <Title style={{ textAlign: 'center' }} level={3}>Languages</Title>
                                    <br />
                                    <PythonIcon />
                                    <JSIcon />
                                    <CppIcon />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={3} xl={3} lg={4} xs={1} md={3} sm={3} />
                            <Col xxl={9} xl={9} lg={8} xs={22} md={18} sm={18}>
                                <Card data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once
                                    className="skill-card"
                                    hoverable style={{ borderWidth: 0, borderRadius: 12, marginTop: '5%' }}>
                                    <Title style={{ textAlign: 'center' }} level={3}>Deployment</Title>
                                    <br />
                                    <DockerIcon />
                                    <AWSIcon />
                                    <GitIcon />
                                </Card>
                            </Col>
                            <Col xxl={0} xl={0} lg={0} xs={1} md={3} sm={3} />
                            <Col xxl={0} xl={0} lg={0} xs={1} md={3} sm={3} />
                            <Col xxl={9} xl={9} lg={8} xs={22} md={18} sm={18}>
                                <Card data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-once
                                    className="skill-card"
                                    hoverable style={{ borderWidth: 0, borderRadius: 12, marginTop: '5%' }}>
                                    <Title style={{ textAlign: 'center' }} level={3}>Databases</Title>
                                    <br />
                                    <DynamoIcon />
                                    <PostgreSQLIcon />
                                    <MySQLIcon />
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
                        </Row>
                    </div>
                </Content>
            </Layout>
        </>
    )
}
