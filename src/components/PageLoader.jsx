import { Spin } from "antd";

export default function PageLoader() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
}
