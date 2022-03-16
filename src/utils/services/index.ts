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
    }),
    addBoards: builder.mutation<Board[], Board[]>({
      query: () => ({ url: '/boards', method: 'POST' }),
      invalidatesTags: [{ type: 'Boards', id: 'LIST' }],
    }),
    getTasks: builder.query<Task[], void>({
      query: () => ({ url: '/tasks', method: 'GET' }),
      providesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    addTasks: builder.mutation<Task, Task>({
      query: (task) => ({ url: '/tasks', method: 'POST',body: task}),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    updateTasks: builder.mutation<Task, Partial<Task> & Pick<Task, 'id'>>({
      query: ({ id, ...patch }) => ({ url: `/tasks/${id}`, method: 'PATCH',body: patch}),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    getComments: builder.query<Comments[], void>({
      query: () => ({ url: '/comments', method: 'GET' }),
      providesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
    addComments: builder.mutation<Comments[], Comments>({
      query: () => ({ url: '/comments', method: 'POST' }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useGetCommentsQuery,
  useGetTasksQuery,
  useAddBoardsMutation,
  useAddCommentsMutation,
  useAddTasksMutation,
  useUpdateTasksMutation
} = boardApi;
