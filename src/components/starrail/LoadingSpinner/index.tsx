interface LoadingSpinnerProps {
  size?: number;
}
export default function LoadingSpinner({ size = 32 }: LoadingSpinnerProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className={`border-r-5 h-${size} w-${size} animate-spin rounded-full border border-r-4 border-dotted border-neutral-700 border-r-neutral-600`}
      ></div>
    </div>
  );
}
