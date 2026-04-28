import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound, UnprocessableEntity } from "../../errors";

// Input Schema
export const UpdateMonitorInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  alertOnNoData: Schema.optional(Schema.Boolean),
  aplQuery: Schema.optional(Schema.String),
  columnName: Schema.optional(Schema.String),
  compareDays: Schema.optional(Schema.Number),
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  disabled: Schema.optional(Schema.Boolean),
  disabledUntil: Schema.optional(Schema.NullOr(Schema.String)),
  intervalMinutes: Schema.optional(Schema.Number),
  mplQuery: Schema.optional(Schema.String),
  name: Schema.String,
  notifierIds: Schema.optional(Schema.Array(Schema.String)),
  notifyByGroup: Schema.optional(Schema.Boolean),
  notifyEveryRun: Schema.optional(Schema.Boolean),
  operator: Schema.optional(
    Schema.Literals([
      "Below",
      "BelowOrEqual",
      "Above",
      "AboveOrEqual",
      "AboveOrBelow",
    ]),
  ),
  rangeMinutes: Schema.optional(Schema.Number),
  resolvable: Schema.optional(Schema.Boolean),
  secondDelay: Schema.optional(Schema.Number),
  skipResolved: Schema.optional(Schema.Boolean),
  threshold: Schema.optional(Schema.Number),
  tolerance: Schema.optional(Schema.Number),
  triggerAfterNPositiveResults: Schema.optional(Schema.Number),
  triggerFromNRuns: Schema.optional(Schema.Number),
  type: Schema.Literals(["Threshold", "MatchEvent", "AnomalyDetection"]),
}).pipe(T.Http({ method: "PUT", path: "/v2/monitors/{id}" }));
export type UpdateMonitorInput = typeof UpdateMonitorInput.Type;

// Output Schema
export const UpdateMonitorOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alertOnNoData: Schema.optional(Schema.Boolean),
  aplQuery: Schema.optional(Schema.String),
  columnName: Schema.optional(Schema.String),
  compareDays: Schema.optional(Schema.Number),
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  disabled: Schema.optional(Schema.Boolean),
  disabledUntil: Schema.optional(Schema.NullOr(Schema.String)),
  intervalMinutes: Schema.optional(Schema.Number),
  mplQuery: Schema.optional(Schema.String),
  name: Schema.String,
  notifierIds: Schema.optional(Schema.Array(Schema.String)),
  notifyByGroup: Schema.optional(Schema.Boolean),
  notifyEveryRun: Schema.optional(Schema.Boolean),
  operator: Schema.optional(
    Schema.Literals([
      "Below",
      "BelowOrEqual",
      "Above",
      "AboveOrEqual",
      "AboveOrBelow",
    ]),
  ),
  rangeMinutes: Schema.optional(Schema.Number),
  resolvable: Schema.optional(Schema.Boolean),
  secondDelay: Schema.optional(Schema.Number),
  skipResolved: Schema.optional(Schema.Boolean),
  threshold: Schema.optional(Schema.Number),
  tolerance: Schema.optional(Schema.Number),
  triggerAfterNPositiveResults: Schema.optional(Schema.Number),
  triggerFromNRuns: Schema.optional(Schema.Number),
  type: Schema.Literals(["Threshold", "MatchEvent", "AnomalyDetection"]),
  id: Schema.String,
});
export type UpdateMonitorOutput = typeof UpdateMonitorOutput.Type;

// The operation
/**
 * Update monitor
 */
export const updateMonitor = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateMonitorInput,
  outputSchema: UpdateMonitorOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
