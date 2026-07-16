import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SurveysAllActivityRetrieveInput {
  project_id: string;
}
export const SurveysAllActivityRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/activity/",
    }),
  ) as unknown as Schema.Codec<SurveysAllActivityRetrieveInput>;

// Output Schema
export type SurveysAllActivityRetrieveOutput = void;
export const SurveysAllActivityRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SurveysAllActivityRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysAllActivityRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: SurveysAllActivityRetrieveInput,
  outputSchema: SurveysAllActivityRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
