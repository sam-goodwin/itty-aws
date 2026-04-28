import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExperimentsTimeseriesResultsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    fingerprint: Schema.String,
    metric_uuid: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/{id}/timeseries_results/",
    }),
  );
export type ExperimentsTimeseriesResultsRetrieveInput =
  typeof ExperimentsTimeseriesResultsRetrieveInput.Type;

// Output Schema
export const ExperimentsTimeseriesResultsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExperimentsTimeseriesResultsRetrieveOutput =
  typeof ExperimentsTimeseriesResultsRetrieveOutput.Type;

// The operation
/**
 * Mixin for ViewSets to handle ApprovalRequired exceptions from decorated serializers.
 * This mixin intercepts ApprovalRequired exceptions raised by the @approval_gate decorator
 * on serializer methods and converts them into proper HTTP 409 Conflict responses with
 * change request details.
 *
 * @param fingerprint - Fingerprint of the metric configuration. Available alongside metric_uuid on each metric in the experiment's metrics array.
 * @param id - A unique integer value identifying this experiment.
 * @param metric_uuid - UUID of the metric to fetch timeseries for. Available on each metric in the experiment's metrics array.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsTimeseriesResultsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsTimeseriesResultsRetrieveInput,
    outputSchema: ExperimentsTimeseriesResultsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
