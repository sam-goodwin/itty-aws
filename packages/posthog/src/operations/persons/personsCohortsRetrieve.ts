import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersonsCohortsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    person_id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persons/cohorts/",
    }),
  );
export type PersonsCohortsRetrieveInput =
  typeof PersonsCohortsRetrieveInput.Type;

// Output Schema
export const PersonsCohortsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsCohortsRetrieveOutput =
  typeof PersonsCohortsRetrieveOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param person_id - The person ID or UUID to get cohorts for.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsCohortsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersonsCohortsRetrieveInput,
    outputSchema: PersonsCohortsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
