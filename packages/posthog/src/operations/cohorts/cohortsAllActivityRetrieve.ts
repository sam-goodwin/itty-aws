import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CohortsAllActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/cohorts/activity/",
    }),
  );
export type CohortsAllActivityRetrieveInput =
  typeof CohortsAllActivityRetrieveInput.Type;

// Output Schema
export const CohortsAllActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CohortsAllActivityRetrieveOutput =
  typeof CohortsAllActivityRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsAllActivityRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CohortsAllActivityRetrieveInput,
    outputSchema: CohortsAllActivityRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
