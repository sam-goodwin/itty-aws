import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SurveysArchivedResponseUuidsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/{id}/archived-response-uuids/",
    }),
  );
export type SurveysArchivedResponseUuidsRetrieveInput =
  typeof SurveysArchivedResponseUuidsRetrieveInput.Type;

// Output Schema
export const SurveysArchivedResponseUuidsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SurveysArchivedResponseUuidsRetrieveOutput =
  typeof SurveysArchivedResponseUuidsRetrieveOutput.Type;

// The operation
/**
 * Get list of archived response UUIDs for HogQL filtering.
 * Returns list of UUIDs that the frontend can use to filter out archived responses
 * in HogQL queries.
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysArchivedResponseUuidsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SurveysArchivedResponseUuidsRetrieveInput,
    outputSchema: SurveysArchivedResponseUuidsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
