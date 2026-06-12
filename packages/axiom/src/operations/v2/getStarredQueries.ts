import * as Schema from "effect/Schema";
import { StarredQueryWithIdSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetStarredQueriesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    dataset: Schema.optional(Schema.String),
    who: Schema.optional(Schema.String),
    qs: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/v2/apl-starred-queries" }));
export type GetStarredQueriesInput = typeof GetStarredQueriesInput.Type;

// Output Schema
export const GetStarredQueriesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => StarredQueryWithIdSchema),
);
export type GetStarredQueriesOutput = typeof GetStarredQueriesOutput.Type;

// The operation
/**
 *
 * @param who - - If the value of `who` is undefined, the request returns queries starred by the authenticated user.
- If the value of `who` is a user ID, the request returns queries starred by the user with this ID (this request requires elevated privileges). For example, `&who='abc123'`.
- If the value of `who` is `team`, the request returns queries starred by the team apart from the authenticated user.For example, `&who=team`.
- If the value of `who` is `all`, the request returns queries starred by all users in the team, including the authenticated user. For example, `&who=all`.
 */
export const getStarredQueries = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetStarredQueriesInput,
  outputSchema: GetStarredQueriesOutput,
}));
