import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SignalsSourceConfigsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/signals/source_configs/{id}/",
    }),
  );
export type SignalsSourceConfigsDestroyInput =
  typeof SignalsSourceConfigsDestroyInput.Type;

// Output Schema
export const SignalsSourceConfigsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SignalsSourceConfigsDestroyOutput =
  typeof SignalsSourceConfigsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this signal source config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsSourceConfigsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsSourceConfigsDestroyInput,
    outputSchema: SignalsSourceConfigsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
