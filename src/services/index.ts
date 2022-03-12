import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Board, Comments, Task } from '../constants/types';

export const boardApi = createApi({
  reducerPath: "boardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://company-lookup.herokuapp.com/api/v1',
  }),
  tagTypes: ['Boards', 'Comments', 'Tasks'],
  endpoints: (builder) => ({
    getBoards: builder.query<Board[], void>({
    query: () => ({url:"/boards", method: "GET"})
  }),
    addBoards: builder.mutation<Board[], Board[]>({
    query: () => ({url:"/boards", method: "POST"}),
      invalidatesTags: [{ type: 'Boards', id: 'LIST' }]
  }),
    getTasks: builder.query<Task[], void>({
      query: () => ({ url: "/tasks", method: 'GET' }),
      providesTags: [{ type: 'Tasks', id: 'LIST' }]
  }),
    addTasks: builder.mutation<Task[], Task[]>({
      query: () => ({ url: "/tasks", method: 'POST' }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }]
  }),
    getComments: builder.query<Comments[], void>({
      query: () => ({ url: "/comments", method: 'GET' }),
      providesTags: [{ type: 'Comments', id: 'LIST' }]
    }),
    addComments: builder.mutation<Comments[], Comments[]>({
      query: () => ({ url: "/comments", method: 'POST' }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }]
    }),
  }),
});

export const { useGetBoardsQuery, useGetCommentsQuery, useGetTasksQuery, useAddBoardsMutation, useAddCommentsMutation, useAddTasksMutation} = boardApi;