import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const UpdateCommunicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blocked_country_codes: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
  }).pipe(T.Http({ method: "PATCH", path: "/instance/communication" }));
export type UpdateCommunicationInput = typeof UpdateCommunicationInput.Type;

// Output Schema
export const UpdateCommunicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["instance_communication"]),
    blocked_country_codes: Schema.Array(Schema.String),
  });
export type UpdateCommunicationOutput = typeof UpdateCommunicationOutput.Type;

// The operation
/**
 * Update instance communication settings
 *
 * Replaces the SMS country blocklist for this instance. Pass the full set of ISO 3166-1
 * alpha-2 country codes that should be blocked; codes that aren't recognized as SMS-tier
 * countries are silently dropped from the persisted list. Omitting `blocked_country_codes`
 * is a no-op.
 */
export const updateCommunication = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateCommunicationInput,
  outputSchema: UpdateCommunicationOutput,
  errors: [UnprocessableEntity] as const,
}));
