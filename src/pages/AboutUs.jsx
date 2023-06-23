import React from "react";
import { Typography } from "antd";
import { Row, Col } from "antd";
import Happiness from "../assets/about-us/happiness.webp";
import Child from "../assets/about-us/child.webp";
import Cake from "../assets/about-us/cake.jpeg";
import Decorate from "../assets/about-us/decorate.jpeg";
import Cakeroll from "../assets/about-us/cakeroll.jpeg";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="p-8 pt-32">
      <Row gutter={[24, 24]} className="mb-16">
        <Col xs={24} md={12}>
          <img
            src={Happiness}
            height="100%"
            width="100%"
            alt="Section 1"
            className="about-us-image"
          />
        </Col>
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-center h-full">
            <Title level={2}>Our Story</Title>
            <Paragraph>
              We offer a wide range of services to cater to your cake needs.
              From custom-designed cakes for special occasions to daily fresh
              bakes, our skilled artisans are dedicated to crafting cakes that
              exceed your expectations. Whether you're looking for a
              show-stopping wedding cake or a delicious birthday treat, we have
              you covered.
            </Paragraph>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="mt-12">
        <Col xs={24} md={7}>
          <div className="flex flex-col justify-center items-center h-full float-right text-right">
            <Title level={4}> Sourcing the Finest Ingredients</Title>
            <Paragraph>
              At The Cake Bar & Co, we believe in using only the finest
              ingredients to ensure the highest quality in our cakes.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={5}>
          <img
            src={Cake}
            height="400"
            alt="Section 2"
            className="fit-content float-left"
          />
        </Col>
        <Col xs={24} md={6}>
          <div className="flex flex-col justify-center items-center h-full">
            <Paragraph>
              We source locally and prioritize fresh, organic, and sustainable
              ingredients. From premium chocolates to seasonal fruits, every
              element in our cakes is carefully selected to create flavors that
              are truly exceptional.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <img
            src={Child}
            height="400"
            alt="Section 2"
            className="fit-content float-left"
          />
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="mt-12">
        <Col xs={24} md={8}>
          <img
            src={Decorate}
            width="100%"
            alt="Section 1"
            className="fit-content"
          />
        </Col>
        <Col xs={24} md={8}>
          <div className="flex flex-col justify-center items-center h-full">
            <Title level={2}>What Sets Us Apart</Title>
            <Paragraph>
              What makes us unique is our dedication to craftsmanship and
              attention to detail. Every cake we create is a work of art,
              meticulously crafted by our talented artisans. From intricate
              designs to exquisite flavors, we strive for perfection in every
              slice. We are also committed to providing exceptional customer
              service, ensuring a seamless and delightful experience from start
              to finish.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <img
            src={Cakeroll}
            width="100%"
            height="100%"
            alt="Section 3"
            className="fit-content"
          />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
