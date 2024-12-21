import Result from "../components/Result";
import Searchbar from "../components/Searchbar"
import Suggested from "../components/Suggested";
import { useFriendStore } from "../store/useFriendStore"

const SearchPage = () => {

    const {searchResult} =useFriendStore();

    console.log({searchResult})

  return (
    <div>
    <div className="pt-20">
      <div className="max-w-2xl mx-auto p-4 py-2">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
            <Searchbar/>
        </div>
      </div>
    </div>

    <div className="h-screen pt-0">
    <div className="max-w-2xl mx-auto p-4 py-8">
      <div className="bg-base-200 rounded-xl p-6 space-y-8">
        {searchResult && searchResult.length > 0 ? <Result/> : <Suggested/>}
      </div>
    </div>
  </div>
  </div>
  )
}

export default SearchPage