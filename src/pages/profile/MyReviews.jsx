import { useRef, useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { Button, Upload, Rate, Divider, Carousel, Modal, Progress } from "antd";
import {
  CaretDownFilled,
  ConsoleSqlOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import Image from "../../components/Image";
import { Reviews } from "../../database/ProfileData";
import { getReviewsByUser } from "../../../firebase";
import Placeholder from "../../assets/placeholder.jpeg";

export default function MyReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewsByUser()
      .then((reviews) => {
        if (reviews && reviews.length > 0) {
          console.log("GetReviewsByUser response : ", reviews);
          setReviews(reviews);
          setError(null);
        } else {
          setError("NO_REVIEW_ADDED");
        }
      })
      .catch((err) => {
        if (err === "NO_LOGGED_IN_USER") {
          setError(err);
        } else {
          setError("SOMETHING_WENT_WRONG");
        }
      });
  }, []);

  if (error) {
    return (
      <div className="w-full text-center pt-4 text-2xl px-16 text-gray-500">
        {error === "NO_REVIEW_ADDED"
          ? "You have not added any review yet."
          : error === "NO_LOGGED_IN_USER"
          ? "Log In to view your reviews."
          : error === "SOMETHING_WENT_WRONG"
          ? "Oops, seems like something is not right. We are working on fixing it."
          : null}
      </div>
    );
  }

  return (
    <div>
      {reviews.map((data) => (
        <Fragment key={data.id}>
          <div className="w-[full] bg-white rounded-xl shadow-lg p-8 my-4">
            <div className="flex items-center">
              <img
                src={data.product.image ? data.product.image : Placeholder}
                height="60px"
                width="60px"
              />
              <div className="ml-4 flex-grow">
                <h3>{data.product.name}</h3>
                <div>
                  <span className="text-gray-500">Order Id : </span>
                  {data.order_id}
                </div>
                <div>
                  <span className="text-gray-500">Order Date : </span>
                  {data.date}
                </div>
              </div>
            </div>
            <Divider />
            <div className="flex">
              <div className="w-full h-full flex flex-col flex-grow">
                <Rate
                  style={{ color: "#815B5B", fontSize: "12px" }}
                  allowHalf
                  disabled
                  value={data.rating}
                />
                <div className="my-2 font-bold">{data.title}</div>
                <div className="text-md mb-2">{data.text}</div>
                <div className="text-sm text-gray-500">{data.date}</div>
                <div className="text-sm text-gray-500">{data.location}</div>
                <div>
                  {data.uploadedImages &&
                    data.uploadedImages.length > 0 &&
                    data.uploadedImages.map((item) => (
                      <img
                        key={item}
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
          </div>
          <Divider />
        </Fragment>
      ))}
    </div>
  );
}
