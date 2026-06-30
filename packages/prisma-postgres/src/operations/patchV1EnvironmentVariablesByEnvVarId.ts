import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const PatchV1EnvironmentVariablesByEnvVarIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    envVarId: Schema.String.pipe(T.PathParam()),
    value: Schema.String,
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/environment-variables/{envVarId}" }),
  );
export type PatchV1EnvironmentVariablesByEnvVarIdInput =
  typeof PatchV1EnvironmentVariablesByEnvVarIdInput.Type;

// Output Schema
export const PatchV1EnvironmentVariablesByEnvVarIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
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
  });
export type PatchV1EnvironmentVariablesByEnvVarIdOutput =
  typeof PatchV1EnvironmentVariablesByEnvVarIdOutput.Type;

// The operation
/**
 * Update an environment variable's value
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Replaces the value of an existing environment variable. Only the value is mutable — the project, environment, key, and branch are fixed at create-time.
 */
export const patchV1EnvironmentVariablesByEnvVarId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchV1EnvironmentVariablesByEnvVarIdInput,
    outputSchema: PatchV1EnvironmentVariablesByEnvVarIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
