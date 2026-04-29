import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EarlyAccessFeatureDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/early_access_feature/{id}/",
    }),
  );
export type EarlyAccessFeatureDestroyInput =
  typeof EarlyAccessFeatureDestroyInput.Type;

// Output Schema
export const EarlyAccessFeatureDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EarlyAccessFeatureDestroyOutput =
  typeof EarlyAccessFeatureDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this early access feature.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const earlyAccessFeatureDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EarlyAccessFeatureDestroyInput,
    outputSchema: EarlyAccessFeatureDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
