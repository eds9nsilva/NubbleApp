import { apiAdapter } from '@api';
import { Page } from '@types';

import { postCommentAdapter } from './postCommentAdapter';
import { postCommentApi } from './postCommentApi';
import { PostComment } from './postCommentTypes';

const PER_PAGE = 10;
async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);
  return response.message;
}

function isAllowToDelete(userId: number, postComment: PostComment, postAuthorId: number): boolean {
  return userId === postComment.author.id || userId === postAuthorId;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};