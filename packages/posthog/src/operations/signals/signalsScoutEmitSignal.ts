import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsScoutEmitSignalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_id: Schema.String.pipe(T.PathParam()),
    description: Schema.String,
    confidence: Schema.Number,
    evidence: Schema.Array(
      Schema.Struct({
        source_product: Schema.String,
        summary: Schema.String,
        entity_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    hypothesis: Schema.optional(Schema.NullOr(Schema.String)),
    severity: Schema.optional(Schema.Unknown),
    dedupe_keys: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    time_range: Schema.optional(Schema.Unknown),
    mcp_trace_id: Schema.optional(Schema.NullOr(Schema.String)),
    finding_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/runs/{run_id}/emit-signal/",
    }),
  );
export type SignalsScoutEmitSignalInput =
  typeof SignalsScoutEmitSignalInput.Type;

// Output Schema
export const SignalsScoutEmitSignalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finding_id: Schema.String,
    emitted: Schema.Boolean,
    skipped_reason: Schema.NullOr(Schema.String),
  });
export type SignalsScoutEmitSignalOutput =
  typeof SignalsScoutEmitSignalOutput.Type;

// The operation
/**
 * Emit a finding for a run
 *
 * Fire `emit_signal` with `source_product = signals_scout`. The `finding_id` is baked into the deterministic `Signal.source_id = run:<id>:finding:<id>` for traceability, but this is NOT idempotent — a second call with the same `finding_id` emits a second signal, so do not retry an emit that may have already succeeded.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_id - UUID of the `SignalScoutRun` bridge row.
 */
export const signalsScoutEmitSignal = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutEmitSignalInput,
    outputSchema: SignalsScoutEmitSignalOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
