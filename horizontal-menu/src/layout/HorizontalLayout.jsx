import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Layout, Row, Col } from "antd";

import HeaderHorizontal from "./components/header/HeaderHorizontal";
import MenuFooter from "./components/footer";
import ScrollTop from "./components/scroll-to-top";

const { Content } = Layout;

export default function HorizontalLayout(props) {
    const { children } = props;
    const [visible, setVisible] = useState(false);

    // Redux
    

    return (
        <Layout className={`hp-app-layout hp-bg-color-dark-90 hp-app-layout-bg`}>
            <HeaderHorizontal visible={visible} setVisible={setVisible} />

            <Content className="hp-content-main">
                <Row justify="center">

                            <Col span={24}>
                                {children}
                            </Col>
  

                  
                </Row>
            </Content>

            <MenuFooter />

            <ScrollTop />
        </Layout>
    );
};