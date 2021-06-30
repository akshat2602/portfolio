import React, { useEffect, useRef } from "react";
import { ContactIcon, AboutIcon, ProjectIcon, SkillIcon } from '../../Assets/Svg';
import 'antd/dist/antd.css';
import "./Navbar.css";
import { Row, Col, Layout, Menu, Typography } from 'antd';



const { Title } = Typography;
const { Header } = Layout;



export const Navbar = () => {
  const [navMenuTitleColor, setNavMenuTitleColor] = React.useState('#282a36')
  const AboutRef = useRef(null);
  const SkillRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);
  useEffect(() => {
    AboutRef.current.props.style["backgroundColor"] = navMenuTitleColor;
    SkillRef.current.props.style["backgroundColor"] = navMenuTitleColor;
    ProjectRef.current.props.style["backgroundColor"] = navMenuTitleColor;
    ContactRef.current.props.style["backgroundColor"] = navMenuTitleColor;
  }, [navMenuTitleColor])

  const handleClick = (e) => {
    setNavMenuTitleColor('#282a36')
  };


  return (
    <>
      <Layout className="layout">
        <Header>
          <Row style={{ height: "100%" }}>
            <Col xxl={3} xl={3} lg={3} xs={1} md={2} sm={1} />
            <Col xxl={20} xl={20} lg={20} xs={22} md={20} sm={22}>
              <Title level={2} style={{ float: "left", marginTop: '1%', fontWeight: 400 }}><a style={{ color: '#6272a4', textDecoration: 'none' }} href="/">Akshat Sharma</a></Title>
              <Menu theme="dark" mode="horizontal" style={{
                float: 'right',
                width: "40%",
                textAlign: "right",
                // backgroundColor: "#1f1f1f",
                border: "none",
              }}>
                <Menu.Item ref={AboutRef} style={{ color: "white" }} key={'about'} icon={<AboutIcon />} onClick={() => handleClick(AboutRef)}><a href="#about">About</a></Menu.Item>
                <Menu.Item ref={SkillRef} style={{ color: "white" }} key={'skills'} icon={<SkillIcon />} onClick={() => handleClick(SkillRef)}><a href="#skills">Skills</a></Menu.Item>
                <Menu.Item ref={ProjectRef} style={{ color: "white" }} key={'projects'} icon={<ProjectIcon />} onClick={() => handleClick(ProjectRef)}><a href="#projects">Projects</a></Menu.Item>
                <Menu.Item ref={ContactRef} style={{ color: "white" }} key={'contact'} icon={<ContactIcon />} onClick={() => handleClick(ContactRef)}><a href="#contact">Contact Me</a></Menu.Item>
              </Menu>
            </Col>
            <Col xxl={1} xl={1} lg={1} xs={1} md={2} sm={1} />
          </Row>
        </Header>
      </Layout>
    </>
  );
};