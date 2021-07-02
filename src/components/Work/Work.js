import { Layout, Row, Col, Typography, Card } from 'antd';
import './Work.css';
import Dataorc from '../../Assets/dataorc.png';
import Bitglaze from '../../Assets/Bitglaze.png';
import FOSSEE from '../../Assets/FOSSEE.png';


const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;



const listData = [
    {
        href: 'https://github.com/frg-fossee/eSim-Cloud',
        title: 'FOSSEE Summer Internship (April 2021- Present)',
        logo: FOSSEE,
        description: 'Worked on extending the functionality of eSim on Cloud, an Online Circuit Simulator.',
        content: 'Added LTI support for existing platform which makes it easier for teachers to assess circuits using LMS such as OpenEdx or Moodle. Also worked on giving user the option to compare the simulations which they have ran on a circuit or through the in build NgSpice Simulator. Worked on fixing the grpah generation code which was bugged out and would not give accurate graphs.',
        width: 400,
    },
    {
        href: 'https://dataorc.in',
        title: 'DataOrc (April 2021-Present)',
        logo: Dataorc,
        description: 'Worked as a Software Engineering Intern to help extend existing projects.',
        // content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        width: 400,
    },
    {
        href: 'https://www.linkedin.com/company/bitglaze-technologies-pvt-ltd/about/',
        title: 'BitGlaze Technologies Pvt. Ltd. (April 2021-Present)',
        logo: Bitglaze,
        description: 'Worked as a Full Stack Intern to help build platforms for the company.',
        content: 'I was responsible for creating the backend of a resort website in Django - Rest - Framework. Created a face detection model using Tensorflow\'s object detection API using WIDER- Face Dataset.After testing various pre trained models available in the Tensorflow 2 Zoo of models, we decided to go with Mobilenet so that we could infer with the model with minimum time complexity. ',
        width: 400,
    },
];


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
                            {listData.map(data => {
                                return (<>
                                    <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
                                        <Card
                                            key={data.title}
                                            data-aos="zoom-out"
                                            data-aos-delay="200"
                                            data-aos-once
                                            hoverable
                                            style={{ marginTop: '10vh', borderWidth: 0, textAlign: "left" }}
                                            loading={false}
                                            cover={<img src={data.logo} alt="logo" style={{ width: 300, marginLeft: '5%', marginTop: '10%' }} />}
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
