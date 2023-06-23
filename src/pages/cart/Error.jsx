export default function Error() {
  return (
    <div className="w-full text-center pt-4 text-2xl px-16 text-gray-500">
      <div>
        Oops, seems like something is not right. We are working on fixing it.
      </div>
      <a href="/products">
        <span className="underline text-accent1 cursor-pointer">
          Till then, explore our collection.
        </span>
      </a>
    </div>
  );
}
