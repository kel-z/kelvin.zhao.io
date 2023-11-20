interface FilterBarProps {
  setSortBy: (sortBy: string) => void;
  sortAsc: boolean;
  setSortAsc: (sortAsc: boolean) => void;
  sortOptions: {
    displayName: string;
    value: string;
  }[];
}

export default function FilterBar({
  setSortBy,
  sortAsc,
  setSortAsc,
  sortOptions,
}: FilterBarProps) {
  return (
    <div className="flex items-center justify-end bg-neutral-800 px-10 py-5">
      <div className="flex h-full flex-row items-center gap-2 ">
        <p>Sort by</p>
        <select
          className="h-8 w-36 cursor-pointer rounded-bl-md rounded-tl-md bg-neutral-900 px-3 transition duration-100 ease-in-out hover:bg-neutral-700 active:bg-neutral-800"
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.displayName}
            </option>
          ))}
        </select>
      </div>
      <label
        className={`flex h-8 cursor-pointer items-center rounded-br-md rounded-tr-md bg-neutral-900 px-3 transition duration-100 ease-in-out hover:bg-neutral-700 active:bg-neutral-800`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={sortAsc}
          onChange={() => setSortAsc(!sortAsc)}
        />
        <p>{sortAsc ? "↑" : "↓"}</p>
      </label>
    </div>
  );
}
