const reviewList = [
  {
    message:
      "I have been using The Bubble Shop products for the last 2 years, and I must day that the variety and quality of products they provide is unmatched. ",
    name: "Riddhima Shah",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    message:
      "The Bubble Shop is my favourite. The products are classy, unique and affordableas well - a rare combination.",
    name: "Raj Pratap",
    location: "Cuttack, Orissa",
  },
  {
    message:
      "I love everything about The Bubble Shop soaps. My particular favourite is their Earth Collection, and their Bath Bombs.",
    name: "Dhruv Sharma",
    location: "Kolkata, West Bengal",
  },
  //   {
  //     message:
  //       "I love everything about The Bubble Shop soaps. My particular favourite is their Earth Collection, and their Bath Bombs.",
  //     name: "Mariyam Khatun",
  //     location: "Delhi",
  //   },
];

export default function ReviewBoard() {
  return (
    <div className="w-full bg-accent2 flex flex-wrap p-8">
      {reviewList.map((review) => (
        <Card review={review} />
      ))}
    </div>
  );
}

const Card = ({ review }) => {
  const { message, name, location } = review;
  return (
    <div className="w-1/3 flex flex-col justify-center mx-auto p-8">
      <div className="flex flex-col bg-reviewCard text-secondary1 p-8 roboto">
        <div className="font-thin">"{message}"</div>
        <div className="mt-4 font-bold">{name}</div>
        <div className="text-primary2">{location}</div>
      </div>
    </div>
  );
};
