import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSCreatePublicKeyV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    key: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/api/vps/v1/public-keys" }));
export type VPSCreatePublicKeyV1Input = typeof VPSCreatePublicKeyV1Input.Type;

// Output Schema
export const VPSCreatePublicKeyV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  });
export type VPSCreatePublicKeyV1Output = typeof VPSCreatePublicKeyV1Output.Type;

// The operation
/**
 * Create public key
 *
 * Add a new public key to your account.
 * Use this endpoint to register SSH keys for VPS authentication.
 */
export const VPSCreatePublicKeyV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSCreatePublicKeyV1Input,
    outputSchema: VPSCreatePublicKeyV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
