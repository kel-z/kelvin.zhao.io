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
  doneLoading,
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
    if (loadMoreRef.current && !doneLoading) {
      observer.observe(loadMoreRef.current);
    }

    if (doneLoading) {
      observer.unobserve(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <div className={"flex flex-col overflow-auto"}>
      {children}
      <div ref={loadMoreRef}>
        <div className="flex justify-center">
          {!doneLoading && <LoadingSpinner size={16} />}
        </div>
      </div>
    </div>
  );
}
