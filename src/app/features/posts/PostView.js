import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
      const { isLoding, error, posts } = useSelector((state) => state.posts);
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(fetchPosts())
      }, []);
      // console.log(posts)
      return (
            <div>
                  <h1>All Posts List show below</h1>
                  <hr />
                  {isLoding && <h1>Loading.........</h1>}
                  {error && <h1>Something Wrong</h1>}
                  {posts && posts.map((data) => {
                        return <Fragment key={data.id}>
                              <h3>{data.title}</h3>
                              <p>{data.body}</p>
                        </Fragment>
                  })}


            </div>
      )
}

export default PostView