export default function LoadingSpinner() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="border-r-5 h-32 w-32 animate-spin rounded-full border border-r-4 border-neutral-700 border-r-neutral-600"></div>
    </div>
  );
}
