import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1EnvironmentVariablesByEnvVarIdInput {
  envVarId: string;
}
export const GetV1EnvironmentVariablesByEnvVarIdInput =
  /*@__PURE__*/ Schema.Struct({
    envVarId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/environment-variables/{envVarId}" }),
  ) as unknown as Schema.Codec<GetV1EnvironmentVariablesByEnvVarIdInput>;

// Output Schema
export interface GetV1EnvironmentVariablesByEnvVarIdOutput {
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
export const GetV1EnvironmentVariablesByEnvVarIdOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetV1EnvironmentVariablesByEnvVarIdOutput>;

// The operation
/**
 * Get an environment variable
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns a single environment variable's metadata. The value is not returned.
 */
export const getV1EnvironmentVariablesByEnvVarId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetV1EnvironmentVariablesByEnvVarIdInput,
    outputSchema: GetV1EnvironmentVariablesByEnvVarIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
