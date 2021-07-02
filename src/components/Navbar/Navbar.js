import React from "react";
import { ContactIcon, AboutIcon, WorkIcon, SkillIcon, ProjectIcon2 } from '../../Assets/Svg';
import 'antd/dist/antd.css';
import "./Navbar.css";
import { Row, Col, Layout, Menu, Typography } from 'antd';



const { Title } = Typography;
const { Header } = Layout;



export const Navbar = () => {
  // eslint-disable-next-line
  return (
    <>
      <Layout className="layout">
        <Header>
          <Row style={{ height: "100%" }}>
            <Col xxl={3} xl={3} lg={3} xs={1} md={2} sm={1} />
            <Col xxl={20} xl={20} lg={20} xs={22} md={20} sm={22}>
              {// eslint-disable-next-line 
                <Title className="site-title" level={2}><a style={{ color: '#6272a4', textDecoration: 'none' }} href="#">Akshat Sharma</a></Title>}
              <Menu theme="dark" mode="horizontal" style={{
                float: 'right',
                width: "55%",
                textAlign: "right",
                border: "none",
              }}>
                {// eslint-disable-next-line
                  <Menu.Item style={{ color: "white" }} key={'home'} icon={<AboutIcon />} ><a href="#">Home</a></Menu.Item>}
                <Menu.Item style={{ color: "white" }} key={'skills'} icon={<SkillIcon />} ><a href="#skills">Skills</a></Menu.Item>
                <Menu.Item style={{ color: "white" }} key={'projects'} icon={<ProjectIcon2 />} ><a href="#projects">Projects</a></Menu.Item>
                <Menu.Item style={{ color: "white" }} key={'work'} icon={<WorkIcon />} ><a href="#work">Experience</a></Menu.Item>
                <Menu.Item style={{ color: "white" }} key={'contact'} icon={<ContactIcon />} ><a href="#contact">Contact Me</a></Menu.Item>
              </Menu>
            </Col>
            <Col xxl={1} xl={1} lg={1} xs={1} md={2} sm={1} />
          </Row>
        </Header>
      </Layout>
    </>
  );
};