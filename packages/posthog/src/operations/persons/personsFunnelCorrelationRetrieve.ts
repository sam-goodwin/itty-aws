import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersonsFunnelCorrelationRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persons/funnel/correlation/",
    }),
  );
export type PersonsFunnelCorrelationRetrieveInput =
  typeof PersonsFunnelCorrelationRetrieveInput.Type;

// Output Schema
export const PersonsFunnelCorrelationRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsFunnelCorrelationRetrieveOutput =
  typeof PersonsFunnelCorrelationRetrieveOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsFunnelCorrelationRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PersonsFunnelCorrelationRetrieveInput,
    outputSchema: PersonsFunnelCorrelationRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
