import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PatchV1EnvironmentVariablesByEnvVarIdInput {
  envVarId: string;
  value: string;
}
export const PatchV1EnvironmentVariablesByEnvVarIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    envVarId: Schema.String.pipe(T.PathParam()),
    value: Schema.String,
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/environment-variables/{envVarId}" }),
  ) as unknown as Schema.Codec<PatchV1EnvironmentVariablesByEnvVarIdInput>;

// Output Schema
export interface PatchV1EnvironmentVariablesByEnvVarIdOutput {
  data: {
    id: string;
    type: string;
    url: string;
    projectId: string;
    branchId: string | null;
    class: "production" | "preview";
    key: string;
    valueKid: string;
    isManagedBySystem: boolean;
    createdAt: string;
    updatedAt: string;
  };
}
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
  }) as unknown as Schema.Codec<PatchV1EnvironmentVariablesByEnvVarIdOutput>;

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
