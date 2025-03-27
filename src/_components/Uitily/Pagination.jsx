import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const Pagination = ({ pageCount, onPress }) => {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel={<MoreHorizontal className="w-5 h-5 text-black/60" />}
      nextLabel={
        <span className="flex items-center">
          Next
          <ChevronRight className="ml-2 w-5 h-5" />
        </span>
      }
      previousLabel={
        <span className="flex items-center">
          <ChevronLeft className="mr-2 w-5 h-5" />
          Prev
        </span>
      }
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      containerClassName="flex items-center justify-center space-x-2 p-4"
      pageClassName="transition-all duration-300 ease-in-out w-10 h-10 flex items-center justify-center rounded-full text-black hover:bg-black/10 cursor-pointer"
      pageLinkClassName="w-full h-full flex items-center justify-center text-center"
      activeClassName="bg-black text-white hover:bg-black/90"
      previousClassName="mr-4 flex items-center text-black hover:text-black/70 transition-colors duration-300 cursor-pointer"
      nextClassName="ml-4 flex items-center text-black hover:text-black/70 transition-colors duration-300 cursor-pointer"
      disabledClassName="opacity-50 cursor-not-allowed"
      breakClassName="flex items-center justify-center text-black/60"
    />
  );
};

export default Pagination;
