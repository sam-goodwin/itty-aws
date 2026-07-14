import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface RadarStandaloneControllerUpdateRadarAttemptInput {
  id: string;
  challenge_status?: string;
  attempt_status?: string;
}
export const RadarStandaloneControllerUpdateRadarAttemptInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    challenge_status: Schema.optional(Schema.String),
    attempt_status: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PUT", path: "/radar/attempts/{id}" }),
  ) as unknown as Schema.Codec<RadarStandaloneControllerUpdateRadarAttemptInput>;

// Output Schema
export type RadarStandaloneControllerUpdateRadarAttemptOutput = void;
export const RadarStandaloneControllerUpdateRadarAttemptOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RadarStandaloneControllerUpdateRadarAttemptOutput>;

// The operation
/**
 * Update a Radar attempt
 *
 * You may optionally inform Radar that an authentication attempt or challenge was successful using this endpoint. Some Radar controls depend on tracking recent successful attempts, such as impossible travel.
 *
 * @param id - The unique identifier of the Radar attempt to update.
 */
export const RadarStandaloneControllerUpdateRadarAttempt =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RadarStandaloneControllerUpdateRadarAttemptInput,
    outputSchema: RadarStandaloneControllerUpdateRadarAttemptOutput,
    errors: [BadRequest, NotFound] as const,
  }));
