import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FlagValueValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    key: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/flag_value/values/",
    }),
  );
export type FlagValueValuesRetrieveInput =
  typeof FlagValueValuesRetrieveInput.Type;

// Output Schema
export const FlagValueValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        name: Schema.Unknown,
      }),
    ),
    refreshing: Schema.Boolean,
  });
export type FlagValueValuesRetrieveOutput =
  typeof FlagValueValuesRetrieveOutput.Type;

// The operation
/**
 * Get possible values for a feature flag.
 * Query parameters:
 * - key: The flag ID (required)
 * Returns:
 * - Array of objects with 'name' field containing possible values
 *
 * @param key - The flag ID
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const flagValueValuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FlagValueValuesRetrieveInput,
    outputSchema: FlagValueValuesRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
