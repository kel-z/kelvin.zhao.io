import { ReactNode, useEffect, useRef } from "react";
import LoadingSpinner from "../LoadingSpinner";

interface ScrollableProps {
  children: ReactNode;
  loadMore: () => void;
  doneLoading: boolean;
}
export default function Scrollable({
  children,
  loadMore,
  doneLoading
}: ScrollableProps) {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loadMore]);

  return (
    <div className={"flex flex-col overflow-auto"}>
      {children}
      <div ref={loadMoreRef}>
        <div className="my-2 flex justify-center overflow-hidden pb-2">
          {!doneLoading && <LoadingSpinner size="md" />}
        </div>
      </div>
      <div className="z-50 inline-flex w-full justify-center p-1 text-xs opacity-50">
        Star Rail Inventory Viewer is not affiliated with or endorsed by
        HoYoverse.
      </div>
    </div>
  );
}
