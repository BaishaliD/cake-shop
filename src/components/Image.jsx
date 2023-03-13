import { Image, Skeleton } from "antd";
import Placeholder from "../assets/placeholder.jpeg";

export default function ImageComponent({
  src,
  fallback = Placeholder,
  preview = false,
  width,
  height,
  className,
  style,
}) {
  return (
    <Image
      width={width}
      height={height}
      rootClassName={className}
      src={src}
      fallback={fallback}
      preview={preview}
      style={style}
      placeholder={
        <Image
          preview={false}
          src={Placeholder}
          width={width}
          height={height}
        />
      }
    />
  );
}
