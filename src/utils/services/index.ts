import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Board, Comments, Task } from '../constants/types';

export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tosin-fake-server.herokuapp.com/',headers:{'content-type':'application/json'}
  }),
  tagTypes: ['Boards', 'Comments', 'Tasks'],
  endpoints: (builder) => ({
    getBoards: builder.query<Board[], void>({
      query: () => ({ url: '/boards', method: 'GET' }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tasks' as const, id })),
              { type: 'Boards', id: 'LIST' },
            ]
          : [{ type: 'Boards', id: 'LIST' }],
    }),
    getABoards: builder.query<Board, number>({
      query: (id) => ({ url: `/boards/${id}`, method: 'GET' }),
      providesTags: (result, error, id) => [{ type: 'Boards', id }],
    }),
    addBoards: builder.mutation<Board, Board>({
      query: (board) => ({ url: '/boards', method: 'POST', body: board }),
      invalidatesTags: [{ type: 'Boards', id: 'LIST' }],
    }),
    updateBoard: builder.mutation<Board, Partial<Board> & Pick<Board, 'id'>>({
      query: ({ id, ...patch }) => ({ url: `/Boards/${id}`, method: 'PATCH',body: patch}),
      invalidatesTags: (result, error, { id }) => [{ type: 'Boards', id }],
    }),
    deleteBoard: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Boards/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Boards', id }],
    }),
    getTasks: builder.query<Task[], void>({
      query: () => ({ url: '/tasks', method: 'GET' }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tasks' as const, id })),
              { type: 'Tasks', id: 'LIST' },
            ]
          : [{ type: 'Tasks', id: 'LIST' }],
    }),
    addTasks: builder.mutation<Task, Task>({
      query: (task) => ({ url: '/tasks', method: 'POST',body: task}),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    updateTasks: builder.mutation<Task, Partial<Task> & Pick<Task, 'id'>>({
      query: ({ id, ...patch }) => ({ url: `/tasks/${id}`, method: 'PATCH',body: patch}),
      invalidatesTags: (result, error, { id }) => [{ type: 'Tasks', id }],
    }),
    deleteTask: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Tasks/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Tasks', id }],
    }),
    getComments: builder.query<Comments[], void>({
      query: () => ({ url: '/comments', method: 'GET' }),
      providesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
    addComment: builder.mutation<Comments, Comments>({
      query: (comment) => ({ url: '/comments', method: 'POST', body: comment }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
    updateComment: builder.mutation<Comments, Partial<Comments> & Pick<Comments, 'id'>>({
      query: ({ id, ...patch }) => ({ url: `/tasks/${id}`, method: 'PATCH',body: patch}),
      invalidatesTags: (result, error, { id }) => [{ type: 'Comments', id }],
    }),
    deleteComment: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Tasks/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Comments', id }],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useGetABoardsQuery,
  useGetCommentsQuery,
  useGetTasksQuery,
  useAddBoardsMutation,
  useAddCommentMutation,
  useAddTasksMutation,
  useUpdateTasksMutation,
  useUpdateBoardMutation,
  useUpdateCommentMutation,
  useDeleteTaskMutation,
  useDeleteBoardMutation,
  useDeleteCommentMutation
} = boardApi;
