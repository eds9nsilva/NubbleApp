import {useState} from 'react';
 
 import {postCommentService} from '../postCommentService';
import { PostComment } from '../postCommentTypes';
 
 interface Options {
  onSuccess?: (data: PostComment) => void;
 }

 export function usePostCommentCreate(postId: number, options?: Options) {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<boolean | null>(null);
 
   async function createComment(message: string) {
     try {
       setLoading(true);
       setError(null);
       const postComment = await postCommentService.create(postId, message);
       if(options?.onSuccess) {
        options.onSuccess(postComment)
       }
     } catch (error) {
       setError(true);
     } finally {
       setLoading(false);
     }
   }
 
   return {
     createComment,
     loading,
     error,
   };
 }