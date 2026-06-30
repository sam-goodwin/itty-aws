import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export interface SignalsScoutEmitSignalInput {
  project_id: string;
  run_id: string;
  description: string;
  confidence: number;
  evidence: {
    source_product: string;
    summary: string;
    entity_id?: string | null;
  }[];
  hypothesis?: string | null;
  severity?: "P0" | "P1" | "P2" | "P3" | "P4" | null;
  dedupe_keys?: string[];
  tags?: string[];
  time_range?: { date_from: string; date_to: string } | null;
  mcp_trace_id?: string | null;
  finding_id?: string | null;
}
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
    severity: Schema.optional(
      Schema.NullOr(Schema.Literals(["P0", "P1", "P2", "P3", "P4"])),
    ),
    dedupe_keys: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    time_range: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          date_from: Schema.String,
          date_to: Schema.String,
        }),
      ),
    ),
    mcp_trace_id: Schema.optional(Schema.NullOr(Schema.String)),
    finding_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/runs/{run_id}/emit-signal/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutEmitSignalInput>;

// Output Schema
export interface SignalsScoutEmitSignalOutput {
  finding_id: string;
  emitted: boolean;
  skipped_reason: string | null;
}
export const SignalsScoutEmitSignalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finding_id: Schema.String,
    emitted: Schema.Boolean,
    skipped_reason: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<SignalsScoutEmitSignalOutput>;

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
