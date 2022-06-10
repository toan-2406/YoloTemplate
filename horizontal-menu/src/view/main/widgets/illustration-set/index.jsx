import React from "react";


import { Row, Col } from "antd";

import image1 from "../../../../assets/images/illustrations/ab-testing.svg";
import image2 from "../../../../assets/images/illustrations/about-us.svg";
import image3 from "../../../../assets/images/illustrations/add-products.svg";
import image4 from "../../../../assets/images/illustrations/being-creative.svg";
import image5 from "../../../../assets/images/illustrations/bring-solutions.svg";
import image6 from "../../../../assets/images/illustrations/business-deal.svg";
import image7 from "../../../../assets/images/illustrations/charts-pie-and-bars.svg";
import image8 from "../../../../assets/images/illustrations/clickbait.svg";
import image9 from "../../../../assets/images/illustrations/coding.svg";
import image10 from "../../../../assets/images/illustrations/coming-soon.svg";
import image11 from "../../../../assets/images/illustrations/design-thinking.svg";
import image12 from "../../../../assets/images/illustrations/digital-ads-performance.svg";
import image13 from "../../../../assets/images/illustrations/downloading.svg";
import image14 from "../../../../assets/images/illustrations/fixing-bugs.svg";
import image15 from "../../../../assets/images/illustrations/get-inspired.svg";
import image16 from "../../../../assets/images/illustrations/gifting-online.svg";
import image17 from "../../../../assets/images/illustrations/illustrator-drawing.svg";
import image18 from "../../../../assets/images/illustrations/interface.svg";
import image19 from "../../../../assets/images/illustrations/investing.svg";
import image20 from "../../../../assets/images/illustrations/listening-feedback.svg";
import image21 from "../../../../assets/images/illustrations/loading.svg";
import image22 from "../../../../assets/images/illustrations/marketing-target.svg";
import image23 from "../../../../assets/images/illustrations/modular-coding.svg";
import image24 from "../../../../assets/images/illustrations/newsletter.svg";
import image25 from "../../../../assets/images/illustrations/office-desk.svg";
import image26 from "../../../../assets/images/illustrations/overworked-employee.svg";
import image27 from "../../../../assets/images/illustrations/page-under-construction.svg";
import image28 from "../../../../assets/images/illustrations/payment-with-card.svg";
import image29 from "../../../../assets/images/illustrations/protect-privacy.svg";
import image30 from "../../../../assets/images/illustrations/searching.svg";
import image31 from "../../../../assets/images/illustrations/share.svg";
import image32 from "../../../../assets/images/illustrations/social-media-discussion.svg";
import image33 from "../../../../assets/images/illustrations/success.svg";
import image34 from "../../../../assets/images/illustrations/trophy-awards.svg";
import image35 from "../../../../assets/images/illustrations/video-conference.svg";
import image36 from "../../../../assets/images/illustrations/virtual-reality.svg";
import image37 from "../../../../assets/images/illustrations/we-are-hiring.svg";
import image38 from "../../../../assets/images/illustrations/we-got-a-problem.svg";
import image39 from "../../../../assets/images/illustrations/welcome.svg";
import image40 from "../../../../assets/images/illustrations/work-from-home.svg";


import PageTitle from "../../../../layout/components/content/page-title";
import BreadCrumbs from "../../../../layout/components/content/breadcrumbs";
import IllustrationItem from "./illustrationItem";

export default function IllustrationSet() {

  const data = [
    {
      image: image1,      title: "A/B Testing",
    },
    {
      image: image2,      title: "About Us About Our Team",
    },
    {
      image: image3,      title: "Add Products",
    },
    {
      image: image4,      title: "Being Creative",
    },
    {
      image: image5,      title: "Bring Solutions",
    },
    {
      image: image6,      title: "Business Deal",
    },
    {
      image: image7,      title: "Charts Pie And Bars",
    },
    {
      image: image8,      title: "Clickbait",
    },
    {
      image: image9,      title: "Coding",
    },
    {
      image: image10,
      title: "Coming Soon",
    },
    {
      image: image11,
      title: "Design Thinking",
    },
    {
      image: image12,
      title: "Digital Ads Performance",
    },
    {
      image: image13,
      title: "Downloading",
    },
    {
      image: image14,
      title: "Fixing Bugs",
    },
    {
      image: image15,
      title: "Get Inspired",
    },
    {
      image: image16,
      title: "Online Gifting",
    },
    {
      image: image17,
      title: "Illustrator Drawing",
    },
    {
      image: image18,
      title: "Interface",
    },
    {
      image: image19,
      title: "Investing",
    },
    {
      image: image20,
      title: "Listening Feedback",
    },
    {
      image: image21,
      title: "Loading",
    },
    {
      image: image22,
      title: "Marketing Target",
    },
    {
      image: image23,
      title: "Modular Coding Application",
    },
    {
      image: image24,
      title: "Newsletter",
    },
    {
      image: image25,
      title: "Office Desk",
    },
    {
      image: image26,
      title: "Overworked Employee",
    },
    {
      image: image27,
      title: "Page Under Construction",
    },
    {
      image: image28,
      title: "Payment With Card",
    },
    {
      image: image29,
      title: "Protect Privacy",
    },
    {
      image: image30,
      title: "Searching",
    },
    {
      image: image31,
      title: "Share",
    },
    {
      image: image32,
      title: "Social Media Discussion",
    },
    {
      image: image33,
      title: "Success",
    },
    {
      image: image34,
      title: "Trophy Awards",
    },
    {
      image: image35,
      title: "Video Conference",
    },
    {
      image: image36,
      title: "Virtual Reality",
    },
    {
      image: image37,
      title: "We Are Hiring",
    },
    {
      image: image38,
      title: "We Got A Problem",
    },
    {
      image: image39,
      title: "Welcome",
    },
    {
      image: image40,
      title: "Work From Home",
    },
  ]

  return (
    <Row gutter={[32, 32]} className="hp-mb-48">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <BreadCrumbs
            breadCrumbParent="Main"
            breadCrumbParent2="Widgets"
            breadCrumbActive="Illustration Set"
          />

          <PageTitle
            pageTitle="Illustration Set"
            pageText="We used Bangalore Illustration Set and customized it for Yoda"
          />
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          {
            data.map((item, index) => (
              <Col xl={6} md={12} span={24} key={index}>
                <IllustrationItem
                  image={ item.image}
                  imageHeight={180}
                  title={item.title}
                />
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  );
}