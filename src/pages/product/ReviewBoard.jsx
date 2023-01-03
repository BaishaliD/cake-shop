import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
// import { faArrowUpWideShort, faHeart } from "@fortawesome/free-regular-svg-icons";
import Masonry from "react-masonry-css";
import { Button, Upload, Rate, Divider, Carousel, Modal, Progress } from "antd";
import {
  CaretDownFilled,
  LeftCircleOutlined,
  RightCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import "./Masonry.css";
import AddReview from "./AddReview";
import Image from "../../components/Image";

let breakpointColumnsObj = {};

export default function ReviewBoard(props) {
  const [rating, setRating] = useState();
  const [ratingNo, setRatingNo] = useState();
  const [reviews, setReviews] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setRating(props.rating > 0 ? props.rating : null);
    setRatingNo(props.ratingNo > 0 ? props.ratingNo : 0);
    setReviews(props.reviews && props.reviews.length > 0 ? props.reviews : []);
    if (props.reviews && props.reviews.length > 0) {
      breakpointColumnsObj = {
        default: Math.min(props.reviews.length, 3),
        1100: Math.min(props.reviews.length, 2),
        800: Math.min(props.reviews.length, 2),
        540: 1,
      };
    }
  }, []);

  const showMore = () => {
    let newList = [...reviews, ...reviews];
    setReviews(newList);
  };

  const addReview = () => {};

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mt-4 mb-8">Customer Reviews</h2>
      <div className="w-3/4 flex items-center justify-end mb-8">
        <Button
          type="default"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Write a Review
        </Button>
        <Modal
          centered
          footer={null}
          open={openModal}
          // onOk={handleOk}
          // confirmLoading={confirmLoading}
          onCancel={() => setOpenModal(false)}
        >
          <AddReview setOpenModal={setOpenModal} />
        </Modal>
        <div
          className="bg-white rounded p-2 ml-2"
          style={{ border: "1px solid #d1d1d1" }}
        >
          <FontAwesomeIcon icon={faArrowUpWideShort} />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-[300px] flex justify-center">
          <Ratings ratings={props.ratings} rating={props.rating} />
        </div>

        <div className="flex-grow flex-col">
          <div className="w-full flex justify-center">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {reviews.map((item) => (
                <CardItem key={item.name} data={item} />
              ))}
            </Masonry>
          </div>

          <Button
            type="primary"
            className="px-8 bg-accent1 m-12"
            onClick={showMore}
          >
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
}

const CardItem = ({ data }) => {
  const ref = useRef(null);
  return (
    <div className="w-[300px] bg-white rounded-xl shadow-lg p-3">
      {data.images && data.images.length > 0 && (
        <div className="w-full relative">
          {data.images && data.images.length > 1 && (
            <div className="flex items-center">
              <LeftCircleOutlined
                className="text-2xl text-white bg-black50 rounded-full z-10 absolute top-1/2 left-2 -translate-y-1/2"
                onClick={() => {
                  ref.current.prev();
                }}
              />
            </div>
          )}
          <Carousel ref={ref} dots={false}>
            {data.images.map((slide, index) => (
              <div
                key={index}
                className="w-[300px] w-full acme rounded-xl overflow-hidden relative"
              >
                <Image
                  height="100%"
                  width="100%"
                  src={slide}
                  className="h-full w-full rounded-xl rounded-xl object-cover"
                />
              </div>
            ))}
          </Carousel>
          {data.images && data.images.length > 1 && (
            <div className="flex items-center">
              <RightCircleOutlined
                className="text-2xl text-white bg-black50 rounded-full z-10 absolute top-1/2 right-2 -translate-y-1/2"
                onClick={() => {
                  ref.current.prev();
                }}
              />
            </div>
          )}
        </div>
      )}
      <div className="w-full h-full flex flex-col mt-4">
        <h4>{data.title}</h4>
        <Rate
          style={{ color: "#815B5B", fontSize: "14px" }}
          allowHalf
          disabled
          defaultValue={data.rating}
        />
        <Divider />
        <div className="text-md">{data.text}</div>
        <div className="mt-4 text-sm">{data.name}</div>
        <div className="text-sm text-gray-500">{data.location}</div>
        <div className="text-sm text-gray-500">{data.date}</div>
      </div>
    </div>
  );
};

const Ratings = ({ rating, ratings }) => {
  let count = 0;
  for (const i in ratings) {
    count += ratings[i];
  }
  return (
    <div className="flex flex-col">
      <h4 className="text-accent2 mb-4">Ratings ({count})</h4>
      <div className="flex items-center text-2xl text-accent2 mb-4">
        <StarFilled className="mr-2 hover:scale-110" />
        <div>{rating}</div>
      </div>
      <div className="w-[250px] flex flex-col">
        {["5", "4", "3", "2", "1"].map((item) => (
          <ReviewDetailsRow
            key={item}
            stars={parseInt(item)}
            perc={(ratings[item] * 100) / count}
            n={ratings[item]}
          />
        ))}
      </div>
    </div>
  );
};

const ReviewDetailsRow = ({ stars, perc, n }) => {
  return (
    <div className="flex w-full justify-between text-accent2">
      <Rate
        style={{ color: "#815B5B", fontSize: "12px" }}
        allowHalf
        disabled
        defaultValue={stars}
      />
      <div className="w-1/2">
        <Progress
          percent={perc}
          showInfo={false}
          size="small"
          strokeColor={{
            "0%": "#815B5B",
            "100%": "#251a1a",
          }}
        />
      </div>

      <span>({n})</span>
    </div>
  );
};
