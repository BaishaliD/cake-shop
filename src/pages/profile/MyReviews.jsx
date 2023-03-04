import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { Button, Upload, Rate, Divider, Carousel, Modal, Progress } from "antd";
import {
  CaretDownFilled,
  LeftCircleOutlined,
  RightCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import Image from "../../components/Image";
import { Reviews } from "../../database/ProfileData";

export default function MyReviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(Reviews);
  }, []);
  return (
    <div>
      {reviews && reviews.length > 0 ? (
        reviews.map((data) => (
          <>
            <div className="w-[full] bg-white rounded-xl shadow-lg p-8 my-4">
              <div className="flex items-center">
                <img src={data.images[0]} height="60px" width="60px" />
                <div className="ml-4 flex-grow">
                  <h3>{data.item}</h3>
                  <div>
                    <span className="text-gray-500">Order Id : </span>
                    {data.order_id}
                  </div>
                  <div>
                    {" "}
                    <span className="text-gray-500">Order Date : </span>
                    {data.date}
                  </div>
                </div>
                {!data.reviewed && (
                  <Button type="primary" className="mx-4">
                    REVIEW NOW
                  </Button>
                )}
              </div>
              {data.reviewed && (
                <>
                  <Divider />
                  <div className="flex">
                    <div className="w-full h-full flex flex-col flex-grow">
                      <Rate
                        style={{ color: "#815B5B", fontSize: "12px" }}
                        allowHalf
                        disabled
                        defaultValue={data.rating}
                      />
                      <div className="my-2 font-bold">{data.title}</div>
                      <div className="text-md mb-2">{data.text}</div>
                      <div className="text-sm text-gray-500">{data.date}</div>
                      <div className="text-sm text-gray-500">
                        {data.location}
                      </div>
                      <div>
                        {data.uploadedImages &&
                          data.uploadedImages.length > 0 &&
                          data.uploadedImages.map((item) => (
                            <img
                              src={item}
                              height="100px"
                              width="100px"
                              className="mr-2 my-4"
                            />
                          ))}
                      </div>
                    </div>
                    <Button type="primary" className="mx-4">
                      EDIT REVIEW
                    </Button>
                  </div>
                </>
              )}
            </div>
            <Divider />
          </>
        ))
      ) : (
        <p>No Reviews Yet!</p>
      )}
    </div>
  );
}
