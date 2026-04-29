import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RadarStandaloneControllerUpdateRadarAttemptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    challenge_status: Schema.optional(Schema.String),
    attempt_status: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PUT", path: "/radar/attempts/{id}" }));
export type RadarStandaloneControllerUpdateRadarAttemptInput =
  typeof RadarStandaloneControllerUpdateRadarAttemptInput.Type;

// Output Schema
export const RadarStandaloneControllerUpdateRadarAttemptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RadarStandaloneControllerUpdateRadarAttemptOutput =
  typeof RadarStandaloneControllerUpdateRadarAttemptOutput.Type;

// The operation
/**
 * Update a Radar attempt
 *
 * You may optionally inform Radar that an authentication attempt or challenge was successful using this endpoint. Some Radar controls depend on tracking recent successful attempts, such as impossible travel.
 *
 * @param id - The unique identifier of the Radar attempt to update.
 */
export const RadarStandaloneControllerUpdateRadarAttempt =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RadarStandaloneControllerUpdateRadarAttemptInput,
    outputSchema: RadarStandaloneControllerUpdateRadarAttemptOutput,
    errors: [BadRequest, NotFound] as const,
  }));
