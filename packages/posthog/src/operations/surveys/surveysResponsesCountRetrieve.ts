import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SurveysResponsesCountRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/surveys/responses_count/",
    }),
  );
export type SurveysResponsesCountRetrieveInput =
  typeof SurveysResponsesCountRetrieveInput.Type;

// Output Schema
export const SurveysResponsesCountRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SurveysResponsesCountRetrieveOutput =
  typeof SurveysResponsesCountRetrieveOutput.Type;

// The operation
/**
 * Get response counts for all surveys.
 * Args:
 * exclude_archived: Optional boolean to exclude archived responses (default: false, includes archived)
 * survey_ids: Optional comma-separated list of survey IDs to filter by
 * Returns:
 * Dictionary mapping survey IDs to response counts
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysResponsesCountRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SurveysResponsesCountRetrieveInput,
    outputSchema: SurveysResponsesCountRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
