import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DeleteV1EnvironmentVariablesByEnvVarIdInput {
  envVarId: string;
}
export const DeleteV1EnvironmentVariablesByEnvVarIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    envVarId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/environment-variables/{envVarId}" }),
  ) as unknown as Schema.Codec<DeleteV1EnvironmentVariablesByEnvVarIdInput>;

// Output Schema
export type DeleteV1EnvironmentVariablesByEnvVarIdOutput = void;
export const DeleteV1EnvironmentVariablesByEnvVarIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1EnvironmentVariablesByEnvVarIdOutput>;

// The operation
/**
 * Delete an environment variable
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Removes an environment variable. A second delete of the same variable returns 404.
 */
export const deleteV1EnvironmentVariablesByEnvVarId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteV1EnvironmentVariablesByEnvVarIdInput,
    outputSchema: DeleteV1EnvironmentVariablesByEnvVarIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
