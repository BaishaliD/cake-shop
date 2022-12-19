import { useState } from "react";
import { Input, Button } from "antd";

export default function MailList() {
  const [email, setEmail] = useState();
  return (
    <div className="w-full flex items-center justify-center bg-secondary2 roboto font-bold text-accent1 py-8">
      <div className="w-1/2 p-4 flex flex-col items-center justify-center">
        <div className="text-3xl acme">Join our mailing list today</div>
        <div className="font-normal my-2">
          Subscribe & Stay Tuned for updates, discounts and launches
        </div>
      </div>
      <Input.Group compact className="text-center w-1/2">
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
    </div>
  );
}
