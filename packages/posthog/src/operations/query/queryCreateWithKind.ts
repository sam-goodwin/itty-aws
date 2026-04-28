import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const QueryCreateWithKindInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query_kind: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/query/{query_kind}/",
    }),
  );
export type QueryCreateWithKindInput = typeof QueryCreateWithKindInput.Type;

// Output Schema
export const QueryCreateWithKindOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type QueryCreateWithKindOutput = typeof QueryCreateWithKindOutput.Type;

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
export const queryCreateWithKind = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryCreateWithKindInput,
  outputSchema: QueryCreateWithKindOutput,
  errors: [Forbidden, NotFound] as const,
}));
