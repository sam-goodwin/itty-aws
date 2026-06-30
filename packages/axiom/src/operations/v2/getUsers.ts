import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface GetUsersInput {}
export const GetUsersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v2/users" }),
) as unknown as Schema.Codec<GetUsersInput>;

// Output Schema
export type GetUsersOutput = {
  email: string;
  id: string;
  name: string;
  role?: { id: string; name: string };
}[];
export const GetUsersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    email: Schema.String,
    id: Schema.String,
    name: Schema.String,
    role: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
    ),
  }),
) as unknown as Schema.Codec<GetUsersOutput>;

// The operation
/**
 * Get users
 */
export const getUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUsersInput,
  outputSchema: GetUsersOutput,
}));
