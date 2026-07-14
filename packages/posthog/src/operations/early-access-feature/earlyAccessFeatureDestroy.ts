import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EarlyAccessFeatureDestroyInput {
  id: string;
  project_id: string;
}
export const EarlyAccessFeatureDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/early_access_feature/{id}/",
    }),
  ) as unknown as Schema.Codec<EarlyAccessFeatureDestroyInput>;

// Output Schema
export type EarlyAccessFeatureDestroyOutput = void;
export const EarlyAccessFeatureDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EarlyAccessFeatureDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this early access feature.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const earlyAccessFeatureDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: EarlyAccessFeatureDestroyInput,
  outputSchema: EarlyAccessFeatureDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
