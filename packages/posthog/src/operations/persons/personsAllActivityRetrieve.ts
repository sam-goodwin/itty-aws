import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersonsAllActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persons/activity/",
    }),
  );
export type PersonsAllActivityRetrieveInput =
  typeof PersonsAllActivityRetrieveInput.Type;

// Output Schema
export const PersonsAllActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersonsAllActivityRetrieveOutput =
  typeof PersonsAllActivityRetrieveOutput.Type;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsAllActivityRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersonsAllActivityRetrieveInput,
    outputSchema: PersonsAllActivityRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
