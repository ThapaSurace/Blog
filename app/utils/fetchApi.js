
import { useQuery } from "@tanstack/react-query";
import newRequest from "@/libs/newRequest";

//get all posts
export function usePostQuery() {
    return useQuery({
      queryKey: ["posts"],
      queryFn: async () =>
       await newRequest.get(`/post`).then((res) => {
          return res.data;
        }),
    });
  }
  

//get single post
export function useSinglePostQuery(id) {
    return useQuery({
      queryKey: ["singlepost"],
      queryFn: async () =>
       await newRequest.get(`/post/${id}`).then((res) => {
          return res.data;
        }),
    });
  }
  