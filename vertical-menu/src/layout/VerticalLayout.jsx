import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Layout, Row, Col } from "antd";

import Sidebar from "./components/menu/Sidebar";
import MenuHeader from "./components/header";
import MenuFooter from "./components/footer";
import ScrollTop from "./components/scroll-to-top";

const { Content } = Layout;

export default function VerticalLayout(props) {
    const { children } = props;

    const [visible, setVisible] = useState(false);

    // Redux

    return (
        <Layout className="hp-app-layout">
            <Sidebar visible={visible} setVisible={setVisible} />

            <Layout className="hp-bg-color-dark-90">
                <MenuHeader setVisible={setVisible} />

                <Content className="hp-content-main">
                    <Row justify="center">
                       
                                <Col span={24}>
                                    {children}
                                </Col>


                    </Row>
                </Content>

                <MenuFooter />
            </Layout>

            <ScrollTop />
        </Layout>
    );
};