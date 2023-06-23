import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-7 md:px-32 px-4 mt-12">
      <Skeleton className="h-[300px] w-[350px] bg-gray-300"></Skeleton>
      <div className="mt-6 space-y-2">
        <Skeleton className="h-6 w-full"></Skeleton>
        <Skeleton className="h-6 w-1/2"></Skeleton>
        <Skeleton className="h-6 w-1/4"></Skeleton>
      </div>
    </div>
  );
};

export default Loading;
