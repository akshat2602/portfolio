import React from "react";
import { ContactIcon, AboutIcon, WorkIcon, SkillIcon, ProjectIcon2 } from '../../Assets/Svg';
import 'antd/dist/antd.css';
import "./Navbar.css";
import { Row, Col, Layout, Menu } from 'antd';



const { Header } = Layout;



export const Navbar = () => {
  // eslint-disable-next-line
  return (
    <>
      <Layout className="layout">
        <Header style={{ padding: 0, margin: 0 }}>
          <Row style={{ height: "100%" }}>
            <Col xxl={2} xl={2} lg={2} xs={0} md={2} sm={1} />
            <Col xxl={20} xl={20} lg={20} xs={24} md={20} sm={22}>
              {// eslint-disable-next-line 
                <a href="#"><h1 className="site-title">Akshat Sharma</h1></a>}
              <Menu theme="dark" mode="horizontal" className="nav" style={{
                float: 'right',
                textAlign: 'right',
                border: 'none',
                width: '50%'
              }}>
                {// eslint-disable-next-line
                  <Menu.Item className="nav-items" key={'home'} icon={<AboutIcon />} ><a href="#">Home</a></Menu.Item>}
                <Menu.Item className="nav-items" key={'skills'} icon={<SkillIcon />} ><a href="#skills">Skills</a></Menu.Item>
                <Menu.Item className="nav-items" key={'work'} icon={<WorkIcon />} ><a href="#work">Experience</a></Menu.Item>
                <Menu.Item className="nav-items" key={'projects'} icon={<ProjectIcon2 />} ><a href="#projects">Projects</a></Menu.Item>
                <Menu.Item className="nav-items" key={'contact'} icon={<ContactIcon />} ><a href="#contact">Contact Me</a></Menu.Item>
              </Menu>
            </Col>
            <Col xxl={2} xl={2} lg={2} xs={0} md={2} sm={1} />
          </Row>
        </Header>
      </Layout>
    </>
  );
};