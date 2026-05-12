import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceJobInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/instances/jobs/{jobId}" }));
export type GetInstanceJobInput = typeof GetInstanceJobInput.Type;

// Output Schema
export const GetInstanceJobOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  job: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      vps_id: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      state: Schema.optional(Schema.String),
      info: Schema.optional(Schema.String),
      added_at: Schema.optional(Schema.String),
      updated_at: Schema.optional(Schema.String),
    }),
  ),
});
export type GetInstanceJobOutput = typeof GetInstanceJobOutput.Type;

// The operation
/**
 * Get Instance Job
 *
 * Get available information for an Instance job
 *
 * @param jobId - The [Job ID](#operation/update-instance).
 */
export const getInstanceJob = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceJobInput,
  outputSchema: GetInstanceJobOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
