import { SearchType } from "@/lib/search/interfaces";

const defaultStyle =
  "py-2 px-4 border rounded border-ucblue bg-ucblue cursor-pointer font-bold ";

  const converted = {
    fontSize: "0.9375em",
    textTransform: "uppercase",
    padding: "0.8em 1.5em",
    minWidth: "200px",
    marginBottom: "1em",
    letterSpacing: "0.08em",
    fontWeight: 700
  }

interface Props {
  selectedSearchType: SearchType;
  setSelectedSearchType: (searchType: SearchType) => void;
}

export const SearchTypeSelector: React.FC<Props> = ({
  selectedSearchType,
  setSelectedSearchType,
}) => {
  return (
    <div className="flex text-sm">
      <div
        className={
          defaultStyle + 
          (selectedSearchType === SearchType.AUTOMATIC
            ? "bg-ucnavy text-red border-2 border-solid border-ucnavy"
            : "bg-ucblue border-2 border-solid border-ucblue")
        }
        onClick={() => setSelectedSearchType(SearchType.AUTOMATIC)}
      >
        Auto
      </div>

      <div
        className={
          defaultStyle +
          "ml-2 " +
          (selectedSearchType === SearchType.SEMANTIC
            ? "bg-ucnavy"
            : "bg-gray-800 hover:bg-ucnavy")
        }
        onClick={() => setSelectedSearchType(SearchType.SEMANTIC)}
      >
        AI Search
      </div>

      <div
        className={
          defaultStyle +
          "ml-2 " +
          (selectedSearchType === SearchType.KEYWORD
            ? "bg-blue-500"
            : "bg-gray-800 hover:bg-ucnavy")
        }
        onClick={() => setSelectedSearchType(SearchType.KEYWORD)}
      >
        Keyword Search
      </div>
    </div>
  );
};
