import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Title className="site-page-header" level={1}>
        About Us
      </Title>

      <div className="about-us-content">
        <div className="about-us-section">
          <Title level={2} className="about-us-heading">
            Our Services
          </Title>
          <img
            src="/images/services.jpg"
            alt="Services"
            className="about-us-image"
          />
          <p className="about-us-text">
            We offer a wide range of services to cater to your cake needs. From
            custom-designed cakes for special occasions to daily fresh bakes,
            our skilled artisans are dedicated to crafting cakes that exceed
            your expectations. Whether you're looking for a show-stopping
            wedding cake or a delicious birthday treat, we have you covered.
          </p>
        </div>

        <div className="about-us-section">
          <Title level={2} className="about-us-heading">
            Sourcing the Finest Ingredients
          </Title>
          <img
            src="/images/sourcing.jpg"
            alt="Sourcing"
            className="about-us-image"
          />
          <p className="about-us-text">
            At The Cake Bar & Co, we believe in using only the finest
            ingredients to ensure the highest quality in our cakes. We source
            locally and prioritize fresh, organic, and sustainable ingredients.
            From premium chocolates to seasonal fruits, every element in our
            cakes is carefully selected to create flavors that are truly
            exceptional.
          </p>
        </div>

        <div className="about-us-section">
          <Title level={2} className="about-us-heading">
            What Sets Us Apart
          </Title>
          <img
            src="/images/unique.jpg"
            alt="Unique"
            className="about-us-image"
          />
          <p className="about-us-text">
            What makes us unique is our dedication to craftsmanship and
            attention to detail. Every cake we create is a work of art,
            meticulously crafted by our talented artisans. From intricate
            designs to exquisite flavors, we strive for perfection in every
            slice. We are also committed to providing exceptional customer
            service, ensuring a seamless and delightful experience from start to
            finish.
          </p>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default AboutUs;
