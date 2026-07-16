import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersGithubLoginRetrieveInput {
  uuid: string;
}
export const UsersGithubLoginRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{uuid}/github_login/" }),
  ) as unknown as Schema.Codec<UsersGithubLoginRetrieveInput>;

// Output Schema
export type UsersGithubLoginRetrieveOutput = void;
export const UsersGithubLoginRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersGithubLoginRetrieveOutput>;

// The operation
export const usersGithubLoginRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersGithubLoginRetrieveInput,
  outputSchema: UsersGithubLoginRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
