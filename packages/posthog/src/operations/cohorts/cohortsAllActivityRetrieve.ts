import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CohortsAllActivityRetrieveInput {
  project_id: string;
}
export const CohortsAllActivityRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/cohorts/activity/",
    }),
  ) as unknown as Schema.Codec<CohortsAllActivityRetrieveInput>;

// Output Schema
export type CohortsAllActivityRetrieveOutput = void;
export const CohortsAllActivityRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CohortsAllActivityRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsAllActivityRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: CohortsAllActivityRetrieveInput,
  outputSchema: CohortsAllActivityRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
