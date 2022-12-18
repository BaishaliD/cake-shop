import { useState } from "react";
import { Input, Button } from "antd";

export default function MailList() {
  const [email, setEmail] = useState();
  return (
    <div className="parallax2 h-60">
      <div className="h-full w-full flex flex-col items-center justify-center text-primary1 roboto font-bold bg-black50">
        <div className="w-1/2 mb-6 opacity-100 bg-accent2 p-4 flex flex-col items-center">
          <div className="text-3xl acme">Join our mailing list today</div>
          <div className="font-thin my-2">
            Subscribe & Stay Tuned for updates, discounts and launches
          </div>
        </div>
        <Input.Group compact className="text-center">
          <Input
            style={{
              width: "500px",
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
            onClick={() => {
              console.log("Email Id is : ", email);
            }}
          >
            Join
          </Button>
        </Input.Group>
      </div>
    </div>
  );
}
