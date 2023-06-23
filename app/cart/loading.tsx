import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="md:px-32 px-7">
      <div className="flex md:flex-row border flex-col justify-between md:items-center m-4 items-start md:p-0 p-4">
        <Skeleton className="h-[300px] w-[350px] bg-gray-400"></Skeleton>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        <Skeleton className="h-6 w-full"></Skeleton>
      </div>

      <div>
        <Skeleton className="flex gap-8 md:flex-col flex-row items-center md:items-end"></Skeleton>
      </div>
    </div>
  );
};

export default Loading;
