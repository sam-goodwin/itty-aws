import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const GetV1AppsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  projectId: Schema.optional(Schema.String),
  branchId: Schema.optional(Schema.String),
  branchGitName: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/apps" }));
export type GetV1AppsInput = typeof GetV1AppsInput.Type;

// Output Schema
export const GetV1AppsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      name: Schema.String,
      region: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
      projectId: Schema.String,
      branchId: Schema.NullOr(Schema.String),
      latestDeploymentId: Schema.NullOr(Schema.String),
      appEndpointDomain: Schema.String,
      createdAt: Schema.String,
    }),
  ),
  pagination: Schema.Struct({
    nextCursor: Schema.NullOr(Schema.String),
    hasMore: Schema.Boolean,
  }),
});
export type GetV1AppsOutput = typeof GetV1AppsOutput.Type;

// The operation
/**
 * List apps
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns all apps the token has access to, ordered by creation time (oldest first). Optionally filter by project ID. Supports cursor-based pagination.
 */
export const getV1Apps = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV1AppsInput,
  outputSchema: GetV1AppsOutput,
  errors: [Forbidden, UnprocessableEntity] as const,
}));
