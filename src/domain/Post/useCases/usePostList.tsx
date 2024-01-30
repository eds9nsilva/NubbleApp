import { useEffect, useState } from "react";
import { Post, postService } from "@domain";

export function usePostList() {
    const [postList, setPostList] = useState<Post[]>([]);
    const [error, setError] = useState<boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchData() {
        try {
            setLoading(true);
            const list = await postService.getList();
            setPostList(list);
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        postList,
        error,
        loading,
        refetch: fetchData
    }
}