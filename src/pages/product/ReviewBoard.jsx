import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
// import { faArrowUpWideShort, faHeart } from "@fortawesome/free-regular-svg-icons";
import Masonry from "react-masonry-css";
import {
  Button,
  Upload,
  Rate,
  Divider,
  Carousel,
  Popover,
  Progress,
} from "antd";
import Christmas from "../../assets/cupcakes/christmas.webp";
import Oreo from "../../assets/cupcakes/oreo.webp";
import Rainbow from "../../assets/cupcakes/rainbow.jpeg";
import {
  CaretDownFilled,
  LeftCircleOutlined,
  RightCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import "./Masonry.css";

const data = {
  rating: 4.5,
  ratingNo: 23,
  reviewsList: [
    {
      name: "John Travolta",
      rating: 4,
      location: "Patna, Bihar",
      date: "24/10/2021",
      images: [Christmas, Oreo],
      weight: null,
      flavour: "Chocolate",
      text: "I ordered a cupcake and danced Salsa with it.I ordered a cupcake and danced Salsa with it. I ordered a cupcake and danced Salsa with it.",
    },
    {
      name: "LeBron James",
      rating: 3,
      location: "Patna, Bihar",
      date: "04/09/2021",
      images: [Rainbow],
      weight: null,
      flavour: null,
      text: "I ordered a cupcake and dunked it into the bin.",
    },
    {
      name: "Lionel Messy",
      rating: 3.5,
      location: "Kolkata, West Bengal",
      date: "20/09/2021",
      images: null,
      weight: "500gm",
      flavour: "Vanilla",
      text: "I ordered a cupcake and shot it in the goal.",
    },
    {
      name: "John Travolta",
      rating: 4,
      location: "Patna, Bihar",
      date: "24/10/2021",
      images: [Oreo],
      weight: null,
      flavour: "Chocolate",
      text: "I ordered a cupcake and danced Salsa with it.I ordered a cupcake and danced Salsa with it. I ordered a cupcake and danced Salsa with it.",
    },
  ],
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  800: 2,
  540: 1,
};

export default function ReviewBoard() {
  const [reviews, setReviews] = useState(data.reviewsList);
  const [open, setOpen] = useState(false);

  const showMore = () => {
    let newList = [...reviews, ...reviews];
    setReviews(newList);
  };

  const showReviewDetails = () => {};

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mt-4 mb-8">Customer Reviews</h2>
      <ReviewDetails />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {reviews.map((item) => (
          <CardItem data={item} />
        ))}
      </Masonry>
      <Button
        type="primary"
        className="px-8 bg-accent1 m-12"
        onClick={showMore}
      >
        Show More
      </Button>
    </div>
  );
}

const CardItem = ({ data }) => {
  const ref = useRef(null);
  return (
    <div className="w-[250px] bg-white rounded-xl shadow-lg p-3">
      {data.images && data.images.length > 0 && (
        <div className="w-full mb-4 relative">
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
                <img
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
      <div className="w-full h-full flex flex-col">
        <h4>This is a great cake!</h4>
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

const ReviewDetails = ({ open, setOpen }) => {
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div className="w-full flex justify-around items-center mb-4">
      <Popover
        content={<ReviewCount />}
        title={
          <h1 className="text-accent2">
            {data.rating} <StarFilled />
          </h1>
        }
        placement="bottomLeft"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <div
          className="text-accent1 flex cursor-pointer"
          // onClick={showReviewDetails}
        >
          <Rate
            style={{ color: "#815B5B", fontSize: "14px" }}
            allowHalf
            disabled
            defaultValue={data.rating}
          />
          <div className="px-2">({data.ratingNo} Reviews)</div>
          <CaretDownFilled />
        </div>
      </Popover>
      <div className="flex items-center">
        <Button type="default">Write a Review</Button>
        <div
          className="bg-white rounded p-2 ml-2"
          style={{ border: "1px solid #d1d1d1" }}
        >
          <FontAwesomeIcon icon={faArrowUpWideShort} />
        </div>
      </div>
    </div>
  );
};

const ReviewCount = () => {
  return (
    <div className="w-[300px] flex flex-col">
      {[5, 4, 3, 2, 1].map((item) => (
        <ReviewDetailsRow stars={item} perc={item * 10} n={item} />
      ))}
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
