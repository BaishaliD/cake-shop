import Filter from "./Filter";
import Gallery from "./Gallery";

export default function ProductList() {
  return (
    <div className="pt-24">
      <div className="flex min-h-screen">
        <div className="w-1/5 min-h-full bg-primary1">
          <Filter />
        </div>
        <div className="w-4/5 min-h-full bg-secondary1">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
