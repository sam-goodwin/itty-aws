import * as Schema from "effect/Schema";
import {
  DashboardFilterSchema,
  LimitContextSchema,
  RefreshTypeSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const QueryCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  async: Schema.optional(Schema.NullOr(Schema.Boolean)),
  client_query_id: Schema.optional(Schema.NullOr(Schema.String)),
  filters_override: Schema.optional(
    Schema.suspend(() => DashboardFilterSchema),
  ),
  limit_context: Schema.optional(Schema.suspend(() => LimitContextSchema)),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  query: Schema.optional(Schema.Unknown),
  refresh: Schema.optional(Schema.suspend(() => RefreshTypeSchema)),
  variables_override: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  ),
}).pipe(T.Http({ method: "POST", path: "/api/projects/{project_id}/query/" }));
export type QueryCreateInput = typeof QueryCreateInput.Type;

// Output Schema
export const QueryCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type QueryCreateOutput = typeof QueryCreateOutput.Type;

// The operation
/**
 * DRF ViewSet mixin that gates coalesced responses behind permission checks.
 * The QueryCoalescingMiddleware attaches cached response data to
 * request.META["_coalesced_response"] for followers. This mixin runs DRF's
 * initial() (auth + permissions + throttling) before returning the
 * cached response, ensuring the request is authorized.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const queryCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryCreateInput,
  outputSchema: QueryCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
