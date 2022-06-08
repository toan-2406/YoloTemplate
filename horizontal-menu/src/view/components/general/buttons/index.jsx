import React from "react";

import { Row, Col } from "antd";

import Breadcrumbs from "../../../../layout/components/content/breadcrumbs";
import PageTitle from "../../../../layout/components/content/page-title";
import IconButtons from "./iconButtons";
import DefaultButtons from "./defaultButtons";
import LargeButtons from "./largeButtons";
import DisabledButton from "./disabledButton";
import GhostButtons from "./ghostButtons";
import SmallButtons from "./smallButtons";
import TextButtons from "./textButtons";
import LinkButtons from "./linkButtons";
import DashedButtons from "./dashedButtons";
import OutlineButtons from "./outlineButtons";
import GradientButtons from "./gradientButtons";
import OnlyIconButtons from "./onlyIconButtons";

export default function Buttons() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="General"
            breadCrumbActive="Buttons"
          />

          <PageTitle
            pageTitle="Buttons"
            pageText="To trigger an operation."
          />
        </Row>
      </Col>

      <Col span={24}>
        <DefaultButtons />
      </Col>

      <Col span={24}>
        <LargeButtons />
      </Col>

      <Col span={24}>
        <SmallButtons />
      </Col>

      <Col span={24}>
        <TextButtons />
      </Col>

      <Col span={24}>
        <LinkButtons />
      </Col>

      <Col span={24}>
        <DashedButtons />
      </Col>

      <Col span={24}>
        <DisabledButton />
      </Col>

      <Col span={24}>
        <OutlineButtons />
      </Col>

      <Col span={24}>
        <GhostButtons />
      </Col>

      <Col lg={12} span={24}>
        <IconButtons />
      </Col>

      <Col lg={12} span={24}>
        <OnlyIconButtons />
      </Col>

      <Col span={24}>
        <GradientButtons />
      </Col>
    </Row>
  );
}
