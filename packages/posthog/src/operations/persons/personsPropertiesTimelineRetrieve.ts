import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersonsPropertiesTimelineRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persons/{id}/properties_timeline/",
    }),
  );
export type PersonsPropertiesTimelineRetrieveInput =
  typeof PersonsPropertiesTimelineRetrieveInput.Type;

// Output Schema
export const PersonsPropertiesTimelineRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsPropertiesTimelineRetrieveOutput =
  typeof PersonsPropertiesTimelineRetrieveOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param id - A unique integer value identifying this person.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsPropertiesTimelineRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PersonsPropertiesTimelineRetrieveInput,
    outputSchema: PersonsPropertiesTimelineRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
