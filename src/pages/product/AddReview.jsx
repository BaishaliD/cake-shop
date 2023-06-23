import React, { useState, useRef, useEffect } from "react";
import { Button, Carousel, Divider, Input, Rate } from "antd";
const { TextArea } = Input;
import UploadImages from "./UploadImages";
import { uploadReview } from "../../../firebase";
import Image from "../../components/Image";
import Success from "../../assets/undraw/review-success.svg";
import Fail from "../../assets/undraw/review-error.svg";
import Pending from "../../assets/undraw/review-pending.svg";
import { getSignedInUser } from "../../../firebaseAuth";

const ratingList = [
  { rating: 5, desc: "It was extrordinary" },
  { rating: 4, desc: "It was great" },
  { rating: 3, desc: "It was okay" },
  { rating: 2, desc: "It was not good" },
  { rating: 1, desc: "It was terrible" },
];

export default function AddReview({ id, setOpenModal, setReviewSubmitted }) {
  const ref = useRef(null);
  const slideRef = useRef(0);

  const [status, setStatus] = useState("PENDING");
  const [rating, setRating] = useState(null);
  const [title, setTitle] = useState(null);
  const [review, setReview] = useState(null);
  const [images, setImages] = useState(false);
  const [btnText, setBtnText] = useState("Next");
  const [disableNext, setDisableNext] = useState(true);
  const [disablePrev, setDisablePrev] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
  });
  const [signedInUser, setSignedInUser] = useState(false);
  useEffect(() => {
    getSignedInUser().then((user) => {
      if (user) {
        setSignedInUser(true);
        setUserinfo({
          name: user.displayName,
          email: user.email,
        });
      }
    });
  }, []);

  const rateProduct = (res) => {
    setRating(res.rating);
    setDisableNext(false);
  };

  const beforeChange = (from, to) => {
    slideRef.current = to;
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
    if (to === 3) {
      setBtnText("Close");
    }
  };

  const handleBtnText = (field1, field2, field3) => {
    if (!field1 && !field2 && !field3) {
      setBtnText("Skip");
    } else {
      setBtnText("Next");
    }
  };

  const imageUploaded = (images) => {
    setImages(images);
    handleBtnText(title, review, images);
  };

  const saveReview = () => {
    let images;
    if (fileList && fileList.length > 0) {
      images = fileList.map((file) => `/reviews/${file.name}`);
    }
    let name = userinfo.name;
    uploadReview(id, {
      name: name ? name : "Anonymous",
      email: userinfo.email ? userinfo.email : "",
      rating: rating ? rating : 0,
      title: title ? title : null,
      text: review ? review : null,
      images: images ? images : null,
    })
      .then((res) => {
        setStatus("SUCCESS");
        setReviewSubmitted((prev) => !prev);
      })
      .catch((err) => {
        console.error("uploadReview ", err);
        setStatus("FAIL");
      });
  };

  return (
    <div>
      <Carousel
        dots={false}
        ref={ref}
        beforeChange={beforeChange}
        infinite={false}
      >
        <Slide1
          slideNo={0}
          rating={rating}
          ratingList={ratingList}
          rateProduct={rateProduct}
        />
        <Slide2
          slideNo={1}
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
        <Slide3
          slideNo={2}
          userinfo={userinfo}
          setUserinfo={setUserinfo}
          signedInUser={signedInUser}
        />
        <Slide4 slideNo={3} status={status} />
      </Carousel>
      <div className="w-full flex justify-between">
        <Button
          onClick={() => {
            if (!disablePrev) {
              ref.current.prev();
            }
          }}
          disabled={disablePrev}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (!disableNext) {
              ref.current.next();
              if (slideRef.current === 2) {
                saveReview();
              } else if (slideRef.current === 3) {
                setOpenModal(false);
              }
            }
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
          className={`flex p-2 border w-full pl-8 xs:pl-16 justify-start my-2 hover:bg-gray-200 cursor-pointer ${
            item.rating === rating ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => rateProduct(item)}
        >
          <Rate
            style={{ color: "#815B5B", fontSize: "14px" }}
            disabled
            value={item.rating}
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

const Slide3 = ({ userinfo, setUserinfo, signedInUser }) => {
  return (
    <div className="my-8">
      <h3 className="mb-8">About you</h3>
      {!signedInUser && (
        <>
          <div className="w-full text-center">
            <Button type="primary m-auto">Login to your account</Button>
          </div>
          <Divider />
          <div className="w-full text-center text-gray-500 font-thin mb-4">
            Or continue as a guest
          </div>
        </>
      )}
      <Input
        placeholder="Name*"
        className="mb-4"
        value={userinfo.name}
        onChange={(e) => {
          setUserinfo({ ...userinfo, name: e.target.value });
        }}
        required
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

const Slide4 = ({ status }) => {
  return (
    <div className="mt-16 h-full flex flex-col items-center justify-center">
      {status === "FAIL" ? (
        <>
          <h2 className="mb-8 text-center">
            Something went wrong. Please try again!
          </h2>
          <Image height="200px" src={Fail} />
        </>
      ) : status === "SUCCESS" ? (
        <>
          <h2 className="mb-8 text-center">Your review is submitted!</h2>
          <Image height="200px" src={Success} />
        </>
      ) : (
        <>
          <h2 className="mb-8 text-center">Submitting your review...</h2>
          <Image height="200px" src={Pending} />
        </>
      )}
    </div>
  );
};
