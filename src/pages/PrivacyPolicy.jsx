import { Divider } from "antd";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-32 px-16">
      <h1>Privacy Policy</h1>
      <p>
        We take your privacy seriously at our cake website, and we are committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, and disclose your personal information when you use
        our website.
      </p>
      <Divider />
      <h3>Information We Collect</h3>
      <p>
        When you place an order or register an account on our website, we
        collect personal information such as your name, email address, phone
        number, and shipping address. We may also collect information about your
        browsing behavior, such as the pages you visit and the products you
        view.
      </p>
      <Divider />
      <h3>How We Use Your Information</h3>
      <p>
        We use your personal information to process and fulfill your orders, to
        communicate with you about your orders and account, and to provide you
        with a personalized shopping experience. We may also use your
        information to improve our website, to send you promotional offers, and
        to comply with legal obligations.
      </p>
      <Divider />
      <h3>How We Share Your Information</h3>
      <p>
        We do not share your personal information with third-party marketers.
        However, we may share your information with service providers who help
        us to operate our website and fulfill your orders, such as payment
        processors and shipping carriers. We may also share your information in
        response to a legal request, such as a court order or subpoena.
      </p>
      <Divider />
      <h3>Security of Your Information</h3>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access and disclosure. We use secure servers and encryption
        to protect your data, and we limit access to your information to only
        those employees who need it to perform their job functions.
      </p>
      <Divider />
      <h3>Your Rights</h3>
      <p>
        You have the right to access, update, and delete your personal
        information at any time. You can do so by logging into your account on
        our website or by contacting us directly. You also have the right to
        opt-out of receiving marketing communications from us at any time.
      </p>
      <Divider />
      <h3>Changes to this Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. If we make
        significant changes to the policy, we will post a notice on our website
        and update the effective date. We encourage you to review the policy
        periodically to stay informed about our data practices.
      </p>
      <Divider />
      <h3>Contact Us</h3>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at [insert contact information].
      </p>
    </div>
  );
}
