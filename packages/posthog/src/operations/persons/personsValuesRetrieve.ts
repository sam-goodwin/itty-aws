import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface PersonsValuesRetrieveInput {
  project_id: string;
  format?: "csv" | "json";
  key: string;
  value?: string;
}
export const PersonsValuesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    key: Schema.String,
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persons/values/",
    }),
  ) as unknown as Schema.Codec<PersonsValuesRetrieveInput>;

// Output Schema
export type PersonsValuesRetrieveOutput = void;
export const PersonsValuesRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PersonsValuesRetrieveOutput>;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param key - The person property key to get values for (e.g., 'email', 'plan', 'role').
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param value - Optional search string to filter values (case-insensitive substring match).
 */
export const personsValuesRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: PersonsValuesRetrieveInput,
  outputSchema: PersonsValuesRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
