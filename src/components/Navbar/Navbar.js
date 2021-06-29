import React from "react";
import { ContactIcon, AboutIcon, WorkIcon, ProjectIcon, SkillIcon } from '../../Assets/Svg';
import 'antd/dist/antd.css';
import "./Navbar.css";
import { Row, Col, Layout, Menu, Typography } from 'antd';



const { Title } = Typography;
const { Header } = Layout;



export const Navbar = () => {
  const handleHover = (e) => {
    // e.target.style.cursor = "none";
    // e.target.style.color = "red";
    e.target.style["border-bottom"] = "none";
  };


  return (
    <>
      <Layout className="layout">
        <Header>
          <Row style={{ height: "100%" }}>
            <Col xxl={3} xl={3} lg={3} xs={1} md={2} sm={1} />
            <Col xxl={20} xl={20} lg={20} xs={22} md={20} sm={22}>
              <Title level={2} style={{ float: "left", marginTop: '1%', fontWeight: 400 }}> Akshat Sharma </Title>
              <Menu theme="dark" mode="horizontal" style={{
                float: 'right',
                width: "50%",
                textAlign: "right",
                // backgroundColor: "#1f1f1f",
                border: "none",
              }}>
                <Menu.Item style={{ color: "white" }} key={'about'} icon={<AboutIcon />} onMouseOver={handleHover}>About</Menu.Item>
                <Menu.Item style={{ color: "white" }} key={'experience'} icon={<WorkIcon />} onMouseOver={handleHover}>Experience</Menu.Item>
                <Menu.Item style={{ color: "white" }} key={'skills'} icon={<SkillIcon />} onMouseOver={handleHover}>Skills</Menu.Item>
                <Menu.Item style={{ color: "white" }} key={'projects'} icon={<ProjectIcon />} onMouseOver={handleHover}>Projects</Menu.Item>
                <Menu.Item style={{ color: "white" }} key={'contact'} icon={<ContactIcon />} onMouseOver={handleHover}>Contact Me</Menu.Item>
              </Menu>
            </Col>
            <Col xxl={1} xl={1} lg={1} xs={1} md={2} sm={1} />
          </Row>
        </Header>
      </Layout>
    </>
    // <>
    //   <Steps
    //     type="navigation"
    //     current={currentState}
    //     onChange={onChange}
    //     initial={0}
    //     direction="vertical"
    //     className="site-navigation-steps"
    //   >
    //     <Step title="About" icon={<AboutIcon />} className="step"/>
    //     <Step title="Experience" icon={<WorkIcon />} />
    //     <Step title="Skills" icon={<SkillIcon />} />
    //     <Step title="Projects" icon={<ProjectIcon />} />
    //     <Step title="Contact Me" icon={<ContactIcon />} />
    //   </Steps>
    // </>
  );
};