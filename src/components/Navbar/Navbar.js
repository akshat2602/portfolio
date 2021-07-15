import React from "react";
import { ContactIcon, WorkIcon, SkillIcon, ProjectIcon2, ResumeIcon } from '../../Assets/Svg';
import 'antd/dist/antd.css';
import "./Navbar.css";
import { Row, Col, Layout, Menu } from 'antd';
import ASLogo from '../../Assets/ASlogo.png';



const { Header } = Layout;



export const Navbar = () => {
  // eslint-disable-next-line
  return (
    <>
      <Layout className="layout">
        <Header style={{ padding: 0, margin: 0 }}>
          <Row style={{ height: "100%" }}>
            <Col xxl={2} xl={2} lg={2} xs={0} md={2} sm={1} />
            <Col xxl={20} xl={20} lg={20} xs={24} md={20} sm={22} style={{ textAlign: 'left' }}>
              {// eslint-disable-next-line
                <a href="#"><img className="site-title" src={ASLogo} alt="aslogo" /></a>
              }
              
              <Menu theme="dark" mode="horizontal" className="nav" style={{
                float: 'right',
                textAlign: 'right',
                border: 'none',
                width: '50%'
              }}>
                {/* {// eslint-disable-next-line
                  <Menu.Item className="nav-items" key={'home'} icon={<AboutIcon />} ><a href="#">Home</a></Menu.Item>} */}
                <Menu.Item className="nav-items" key={'skills'} icon={<SkillIcon />} ><a href="#skills">Skills</a></Menu.Item>
                <Menu.Item className="nav-items" key={'work'} icon={<WorkIcon />} ><a href="#work">Experience</a></Menu.Item>
                <Menu.Item className="nav-items" key={'projects'} icon={<ProjectIcon2 />} ><a href="#projects">Projects</a></Menu.Item>
                <Menu.Item className="nav-items" key={'contact'} icon={<ContactIcon />} ><a href="#contact">Contact Me</a></Menu.Item>
                <Menu.Item className="nav-items" key={'contact'} icon={<ResumeIcon />} ><a target="blank"
                  rel="noreferrer" href="https://drive.google.com/file/d/1lkD0u1Vy4AMASUi0e-BzRysFoq3aDAsr/view?usp=sharing">Resume</a></Menu.Item>
              </Menu>
            </Col>
            <Col xxl={2} xl={2} lg={2} xs={0} md={2} sm={1} />
          </Row>
        </Header>
      </Layout>
    </>
  );
};