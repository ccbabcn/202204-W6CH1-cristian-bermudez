import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "dormir",
          done: false,
        },
        {
          id: 2,
          name: "testear",
          done: true,
        },
      ])
    );
  }),

  rest.post(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.delete(`${process.env.REACT_APP_API_URL}0`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.put(`${process.env.REACT_APP_API_URL}0`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
