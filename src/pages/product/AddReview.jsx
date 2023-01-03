import React, { useState, useRef } from "react";
import { Button, Carousel, Divider, Input, Rate } from "antd";
const { TextArea } = Input;
import UploadImages from "./UploadImages";
import { uploadReviewImages } from "../../../firebase";

const ratingList = [
  { rating: 5, desc: "It was extrordinary" },
  { rating: 4, desc: "It was great" },
  { rating: 3, desc: "It was okay" },
  { rating: 2, desc: "It was not good" },
  { rating: 1, desc: "It was terrible" },
];

export default function AddReview() {
  const ref = useRef(null);
  const [slide, setSlide] = useState(1);
  const [rating, setRating] = useState(null);
  const [title, setTitle] = useState(null);
  const [review, setReview] = useState(null);
  const [images, setImages] = useState(false);
  const [btnText, setBtnText] = useState("Next");
  const [disableNext, setDisableNext] = useState(true);
  const [disablePrev, setDisablePrev] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [userinfo, setUserinfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const rateProduct = (res) => {
    console.log("Product rated!", res);
    setRating(res.rating);
    setDisableNext(false);
  };

  const beforeChange = (from, to) => {
    console.log("beforeChange :: ", from, to);
    if (to === 0) {
      setBtnText("Next");
      setDisablePrev(true);
    }
    if (to === 1) {
      setDisablePrev(false);
      setDisableNext(false);
      handleBtnText(title, review, images);
    }
    if (to === 2) {
      setBtnText("Done");
    }
  };

  const handleBtnText = (field1, field2, field3) => {
    if (!field1 && !field2 && !field3) {
      console.log("SKIP");
      setBtnText("Skip");
    } else {
      console.log("NEXT");
      setBtnText("Next");
    }
  };

  const imageUploaded = (images) => {
    setImages(images);
    handleBtnText(title, review, images);
  };

  const saveReview = () => {
    console.log("SAVE REVIEW :::: ", rating, title, review, fileList, userinfo);
  };

  return (
    <div>
      <Carousel
        dots={false}
        ref={ref}
        // effect="fade"
        beforeChange={beforeChange}
        infinite={false}
      >
        <Slide1
          rating={rating}
          ratingList={ratingList}
          rateProduct={rateProduct}
        />
        <Slide2
          title={title}
          setTitle={setTitle}
          review={review}
          setReview={setReview}
          images={images}
          imageUploaded={imageUploaded}
          handleBtnText={handleBtnText}
          fileList={fileList}
          setFileList={setFileList}
        />
        <Slide3 userinfo={userinfo} setUserinfo={setUserinfo} />
      </Carousel>
      <div className="w-full flex justify-between">
        <Button
          onClick={() => {
            ref.current.prev();
          }}
          disabled={disablePrev}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (!disableNext) {
              ref.current.next();
            }
            saveReview();
          }}
          disabled={disableNext}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}

const Slide1 = ({ rating, ratingList, rateProduct }) => {
  return (
    <div className="my-8">
      <h3 className="mb-8">Rate the product</h3>
      {ratingList.map((item) => (
        <div
          key={item.rating}
          className={`flex p-2 border w-full pl-16 justify-start my-2 hover:bg-gray-200 cursor-pointer ${
            item.rating === rating ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => rateProduct(item)}
        >
          <Rate
            style={{ color: "#815B5B", fontSize: "14px" }}
            disabled
            defaultValue={item.rating}
          />
          <div className="pl-8 ">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

const Slide2 = ({
  title,
  setTitle,
  review,
  setReview,
  images,
  imageUploaded,
  handleBtnText,
  fileList,
  setFileList,
}) => {
  return (
    <div className="my-8">
      <h3 className="mb-8">Write a review</h3>
      <Input
        placeholder="Add a title to your review"
        className="mb-4"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          handleBtnText(e.target.value, review, images);
        }}
      />
      <TextArea
        rows={4}
        placeholder="Tell us more about your overall experience"
        value={review}
        onChange={(e) => {
          setReview(e.target.value);
          handleBtnText(e.target.value, title, images);
        }}
      />
      <UploadImages
        imageUploaded={imageUploaded}
        fileList={fileList}
        setFileList={setFileList}
      />
    </div>
  );
};

const Slide3 = ({ userinfo, setUserinfo }) => {
  return (
    <div className="my-8">
      <h3 className="mb-8">About you</h3>
      <div className="w-full text-center">
        <Button type="primary m-auto">Login to your account</Button>
      </div>
      <Divider />
      <div className="w-full text-center text-gray-500 font-thin mb-4">
        Or continue as a guest
      </div>
      <Input
        placeholder="First name*"
        className="mb-4"
        value={userinfo.firstName}
        onChange={(e) => {
          setUserinfo({ ...userinfo, firstName: e.target.value });
        }}
      />
      <Input
        placeholder="Last name"
        className="mb-4"
        value={userinfo.lastName}
        onChange={(e) => {
          setUserinfo({ ...userinfo, lastName: e.target.value });
        }}
      />
      <Input
        placeholder="Email"
        className="mb-4"
        value={userinfo.email}
        onChange={(e) => {
          setUserinfo({ ...userinfo, email: e.target.value });
        }}
      />
    </div>
  );
};
