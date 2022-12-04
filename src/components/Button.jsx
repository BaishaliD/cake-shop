export default function Button({ theme, text, clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className="py-2 px-4 min-w-150 bg-accent1 mx-auto text-white font-semibold rounded shadow-lg hover:bg-accent2 focus:outline-none focus:ring-2 focus:accent2 focus:ring-opacity-75"
    >
      {text}
    </button>
  );
}
