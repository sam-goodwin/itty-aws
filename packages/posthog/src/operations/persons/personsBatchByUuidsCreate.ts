import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersonsBatchByUuidsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    id: Schema.Number,
    name: Schema.String,
    distinct_ids: Schema.Array(Schema.String),
    properties: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    uuid: Schema.String,
    last_seen_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/persons/batch_by_uuids/",
    }),
  );
export type PersonsBatchByUuidsCreateInput =
  typeof PersonsBatchByUuidsCreateInput.Type;

// Output Schema
export const PersonsBatchByUuidsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsBatchByUuidsCreateOutput =
  typeof PersonsBatchByUuidsCreateOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsBatchByUuidsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersonsBatchByUuidsCreateInput,
    outputSchema: PersonsBatchByUuidsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
