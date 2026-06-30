import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const GetV1EnvironmentVariablesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    projectId: Schema.optional(Schema.String),
    class: Schema.optional(Schema.Literals(["production", "preview"])),
    key: Schema.optional(Schema.String),
    branchId: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/environment-variables" }));
export type GetV1EnvironmentVariablesInput =
  typeof GetV1EnvironmentVariablesInput.Type;

// Output Schema
export const GetV1EnvironmentVariablesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        url: Schema.String,
        projectId: Schema.String,
        branchId: Schema.NullOr(Schema.String),
        class: Schema.Literals(["production", "preview"]),
        key: Schema.String,
        valueKid: Schema.String,
        isManagedBySystem: Schema.Boolean,
        createdAt: Schema.String,
        updatedAt: Schema.String,
      }),
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  });
export type GetV1EnvironmentVariablesOutput =
  typeof GetV1EnvironmentVariablesOutput.Type;

// The operation
/**
 * List environment variables
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns a paginated list of environment variables. All filters are optional; combine `projectId`, `class`, and `key` to look up a specific variable by name.
 */
export const getV1EnvironmentVariables = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1EnvironmentVariablesInput,
    outputSchema: GetV1EnvironmentVariablesOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
