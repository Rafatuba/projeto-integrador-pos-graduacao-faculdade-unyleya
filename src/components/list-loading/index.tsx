import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ListLoading() {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: 6 }).map(() => (
        <div className="flex flex-col justify-around items-center gap-4 w-3xs h-96 shadow-lg p-7 bg-white rounded-lg">
          <Skeleton height={30} width={150} />
          <Skeleton height={150} width={150} />
          <div className="flex flex-col gap-2 self-start">
            <Skeleton height={15} width={150} />
            <Skeleton height={20} width={120} />
          </div>
        </div>
      ))}
    </div>
  );
}
