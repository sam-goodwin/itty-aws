import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteV1EnvironmentVariablesByEnvVarIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    envVarId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/environment-variables/{envVarId}" }),
  );
export type DeleteV1EnvironmentVariablesByEnvVarIdInput =
  typeof DeleteV1EnvironmentVariablesByEnvVarIdInput.Type;

// Output Schema
export const DeleteV1EnvironmentVariablesByEnvVarIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteV1EnvironmentVariablesByEnvVarIdOutput =
  typeof DeleteV1EnvironmentVariablesByEnvVarIdOutput.Type;

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
