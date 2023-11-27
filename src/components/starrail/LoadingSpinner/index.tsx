interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}
export default function LoadingSpinner({ size = "lg" }: LoadingSpinnerProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className={`border-r-5 animate-spin rounded-full border border-r-4 border-dotted border-neutral-700 border-r-neutral-600 ${
          size === "sm" ? "h-8 w-8" : size === "md" ? "h-16 w-16" : "h-32 w-32"
        }`}
      ></div>
    </div>
  );
}
