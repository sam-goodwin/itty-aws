import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const QueryCheckAuthForAsyncCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/query/check_auth_for_async/",
    }),
  );
export type QueryCheckAuthForAsyncCreateInput =
  typeof QueryCheckAuthForAsyncCreateInput.Type;

// Output Schema
export const QueryCheckAuthForAsyncCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type QueryCheckAuthForAsyncCreateOutput =
  typeof QueryCheckAuthForAsyncCreateOutput.Type;

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
export const queryCheckAuthForAsyncCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QueryCheckAuthForAsyncCreateInput,
    outputSchema: QueryCheckAuthForAsyncCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
