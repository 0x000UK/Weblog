import { useQuery} from "@tanstack/react-query";
import { useEffect} from "react";
import { getPostByUser } from "../../../services/index/posts";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
// import {Search} from "../../../components/Search";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ArticleCard from "../../../components/ArticleCard";
import ErrorMessage from "../../../components/ErrorMessage";
// import AsyncMultiSelectTagDropdown from "../../../components/SelectAsyncPaginate";
// import { promiseOptions } from "../../../services/index/postCategories";


export default function Blogs() {

    // const queryClient = useQueryClient();
    // const [blogs, setBlogs] = useState([]);
    const userState = useSelector((state) => state.user);
    const currentPage =  1;
    const {data, isLoading, isError, isFetching, refetch} = useQuery({
        querykey : ["blogs"], 
        queryFn: ()=> getPostByUser({token: userState.userInfo.token}),
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        refetch();
    }, [currentPage, refetch]);

    // const handlePageChange = (page) => {
    //   setSearchParams({ page, search: searchKeyword });
    // };
  


  return (
    <section className="container flex flex-col px-5 py-10 mx-auto">
        {/* <div className="flex flex-col mb-10 space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:gap-x-4">
          <Search className="w-full max-w-xl" onSearchKeyword={handleSearch} />
          <AsyncMultiSelectTagDropdown
            placeholder={"Search by categories..."}
            loadOptions={promiseOptions}
            onChange={(selectedValues) => {
              setCategories(selectedValues.map((item) => item.value));
            }}
          />
        </div> */}
        <div className="flex flex-wrap pb-10 md:gap-x-5 gap-y-5">
          {isLoading || isFetching ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the posts data" />
          ) : data?.length === 0 ? (
            <div className="w-full text-center">
              <p className="text-orange-500 text-2xl">No Posts Found!</p>
              <button className="border py-2 px-4 mt-5 border-teal-400 rounded-lg text-teal-400" onClick={() =>{}}>
                Create a new post
              </button>
            </div>
          ) : (
            data?.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        {/* {!isLoading && (
          <Pagination
            onPageChange={(page) => handlePageChange(page)}
            currentPage={currentPage}
            totalPageCount={JSON.parse(data?.headers?.["x-totalpagecount"])}
          />
        )} */}
      </section>
  );
}