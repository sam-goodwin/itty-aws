import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const UsersGithubLoginRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/api/users/{uuid}/github_login/" }));
export type UsersGithubLoginRetrieveInput =
  typeof UsersGithubLoginRetrieveInput.Type;

// Output Schema
export const UsersGithubLoginRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersGithubLoginRetrieveOutput =
  typeof UsersGithubLoginRetrieveOutput.Type;

// The operation
export const usersGithubLoginRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersGithubLoginRetrieveInput,
    outputSchema: UsersGithubLoginRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
