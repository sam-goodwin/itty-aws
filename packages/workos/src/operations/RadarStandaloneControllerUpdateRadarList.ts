import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface RadarStandaloneControllerUpdateRadarListInput {
  type:
    | "ip_address"
    | "domain"
    | "email"
    | "device"
    | "user_agent"
    | "device_fingerprint"
    | "country";
  action: "block" | "allow";
  entry: string;
}
export const RadarStandaloneControllerUpdateRadarListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals([
      "ip_address",
      "domain",
      "email",
      "device",
      "user_agent",
      "device_fingerprint",
      "country",
    ]).pipe(T.PathParam()),
    action: Schema.Literals(["block", "allow"]).pipe(T.PathParam()),
    entry: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/radar/lists/{type}/{action}" }),
  ) as unknown as Schema.Codec<RadarStandaloneControllerUpdateRadarListInput>;

// Output Schema
export interface RadarStandaloneControllerUpdateRadarListOutput {
  message?: string;
}
export const RadarStandaloneControllerUpdateRadarListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RadarStandaloneControllerUpdateRadarListOutput>;

// The operation
/**
 * Add an entry to a Radar list
 *
 * Add an entry to a Radar list.
 *
 * @param type - The type of the Radar list (e.g. ip_address, domain, email).
 * @param action - The list action indicating whether to add the entry to the allow or block list.
 */
export const RadarStandaloneControllerUpdateRadarList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RadarStandaloneControllerUpdateRadarListInput,
    outputSchema: RadarStandaloneControllerUpdateRadarListOutput,
    errors: [BadRequest] as const,
  }));
