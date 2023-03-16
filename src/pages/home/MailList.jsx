import { useState } from "react";
import { Input, Button } from "antd";
import { motion } from "framer-motion";

export default function MailList() {
  const [email, setEmail] = useState();
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center bg-secondary2 roboto font-bold text-accent1 py-8">
      <motion.div
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-1/2 sm:w-1/2 p-4 flex flex-col items-center justify-center"
      >
        <div className="text-3xl acme text-center">
          Join our mailing list today
        </div>
        <div className="font-normal my-2 text-center">
          Subscribe & Stay Tuned for updates, discounts and launches
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-1/2"
      >
        <Input.Group compact className="text-center w-full">
          <Input
            style={{
              width: "70%",
            }}
            placeholder="Type in your email id"
            value={email}
            onChange={(e) => {
              console.log("Input changed!");
              setEmail(e.target.value);
            }}
          />
          <Button
            type="primary"
            className="px-8 bg-accent1"
            onClick={() => {
              console.log("Email Id is : ", email);
            }}
          >
            Join
          </Button>
        </Input.Group>
      </motion.div>
    </div>
  );
}
