import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetInstanceCommunicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/instance/communication" }),
  );
export type GetInstanceCommunicationInput =
  typeof GetInstanceCommunicationInput.Type;

// Output Schema
export const GetInstanceCommunicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["instance_communication"]),
    blocked_country_codes: Schema.Array(Schema.String),
  });
export type GetInstanceCommunicationOutput =
  typeof GetInstanceCommunicationOutput.Type;

// The operation
/**
 * Get instance communication settings
 *
 * Retrieves the per-instance SMS communication settings, including the SMS country blocklist.
 */
export const GetInstanceCommunication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetInstanceCommunicationInput,
    outputSchema: GetInstanceCommunicationOutput,
  }),
);
