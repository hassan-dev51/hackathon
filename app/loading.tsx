import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-wrap  gap-5 px-32 mt-12">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((ind) => (
        <div className="" key={ind}>
          <Skeleton className="h-[300px] w-[350px] bg-gray-400"></Skeleton>
          <div className="mt-6 space-y-2">
            <Skeleton className="h-6 w-full"></Skeleton>
            <Skeleton className="h-6 w-1/2"></Skeleton>
            <Skeleton className="h-6 w-1/4"></Skeleton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
