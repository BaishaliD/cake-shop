import { Collapse } from "antd";
const { Panel } = Collapse;

export default function Faq() {
  return (
    <div className="py-8 px-16 pt-32 bg-secondary1">
      <Collapse accordion size="large" className="bg-white">
        <Panel header="What flavors of cake do you offer?" key="1">
          <p>
            We offer a wide variety of cake flavors, including chocolate,
            vanilla, strawberry, butterscotch, red velvet, and more. Please
            visit our website to see our full selection.
          </p>
        </Panel>

        <Panel header="Can I customize my cake order?" key="2">
          <p>
            Yes, you can customize your cake order by specifying any special
            requests, such as adding a personalized message or custom
            decorations. You can include these details during the checkout
            process on our website.
          </p>
        </Panel>

        <Panel header="How do I place an order for a cake?" key="3">
          <p>
            You can place an order for a cake on our website by selecting the
            cake you want, adding it to your cart, and completing the checkout
            process. You can also place an order by phone or email.
          </p>
        </Panel>

        <Panel header="What is your delivery area?" key="4">
          <p>
            We deliver cakes to most cities and towns in India. Please check our
            website for more information on our delivery area.
          </p>
        </Panel>

        <Panel header="Do you offer same-day delivery?" key="5">
          <p>
            Yes, we offer same-day delivery in select cities. Please check our
            website for more information on our delivery options.
          </p>
        </Panel>

        <Panel header="Can I track my order?" key="6">
          <p>
            Yes, you can track your order on our website by entering your order
            number and email address. You will receive a confirmation email with
            a tracking number once your order has been shipped.
          </p>
        </Panel>

        <Panel header="What payment methods do you accept?" key="7">
          <p>
            We accept various payment methods, including credit cards, debit
            cards, net banking, and mobile wallets. Please visit our website for
            more information on our payment options.
          </p>
        </Panel>

        <Panel header="What is your cancellation policy?" key="8">
          <p>
            You can cancel your order up to 24 hours before the delivery date.
            Please visit our website for more information on our cancellation
            policy.
          </p>
        </Panel>

        <Panel header="Do you offer eggless cake options?" key="9">
          <p>
            Yes, we offer eggless cake options for customers who prefer them.
            You can select the eggless option when placing your order.
          </p>
        </Panel>

        <Panel header="What is your return policy?" key="10">
          <p>
            We do not accept returns for food items such as cakes due to hygiene
            reasons. However, if you have any issues with your order, please
            contact our customer service team and we will do our best to resolve
            the issue.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}
