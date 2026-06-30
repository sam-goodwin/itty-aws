import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface RadarStandaloneControllerDeleteRadarListEntryInput {
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
export const RadarStandaloneControllerDeleteRadarListEntryInput =
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
    T.Http({ method: "DELETE", path: "/radar/lists/{type}/{action}" }),
  ) as unknown as Schema.Codec<RadarStandaloneControllerDeleteRadarListEntryInput>;

// Output Schema
export type RadarStandaloneControllerDeleteRadarListEntryOutput = void;
export const RadarStandaloneControllerDeleteRadarListEntryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RadarStandaloneControllerDeleteRadarListEntryOutput>;

// The operation
/**
 * Remove an entry from a Radar list
 *
 * Remove an entry from a Radar list.
 *
 * @param type - The type of the Radar list (e.g. ip_address, domain, email).
 * @param action - The list action indicating whether to remove the entry from the allow or block list.
 */
export const RadarStandaloneControllerDeleteRadarListEntry =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RadarStandaloneControllerDeleteRadarListEntryInput,
    outputSchema: RadarStandaloneControllerDeleteRadarListEntryOutput,
    errors: [BadRequest, NotFound] as const,
  }));
