import { Search } from "lucide-react"
import toast from "react-hot-toast";
import { useState } from "react";
import { useFriendStore } from "../store/useFriendStore";

const Searchbar = () => {

  const {search, searchResult, currentPage, totalPages} = useFriendStore()

  console.log({searchResult})
  console.log({totalPages})

  const [formData, setFormData] = useState({
    fullName: "",
    nativeLang: "",
    langToLearn: "",
  });

  const validateForm = () => {
    if (!formData.fullName.trim() && !formData.nativeLang.trim() && !formData.langToLearn.trim()) return toast.error("Please select at least one filter")
  return true;
  };

  console.log({formData})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      search(formData, 1); // Reset to page 1 for new searches
    }
  };

  const handlePageChange = (page) => {
    search(formData, page); // Fetch the desired page
  };

  return (
    <div className="space-y-4">
        <h3 className="text-center text-lg font-semibold">Search filters</h3>
        {/* <p className="text-center">Add at least one filter</p> */}
    <div className="flex items-center gap-4">
        <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-full" 
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
        <input type="text" placeholder="Native Language" className="input input-bordered w-full max-w-full"
          value={formData.nativeLang}
          onChange={(e) => setFormData({ ...formData, nativeLang: e.target.value })} />
        <input type="text" placeholder="language to Learn" className="input input-bordered w-full max-w-full"
        value={formData.langToLearn}
        onChange={(e) => setFormData({ ...formData, langToLearn: e.target.value })} />
        <button type="submit" className="btn btn-primary w-full">
          <Search/>
        </button>
         {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-center">
            Search Result {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
        </form>
    </div>
    </div>
  )
}

export default Searchbar