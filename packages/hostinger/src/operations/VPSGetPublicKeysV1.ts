import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetPublicKeysV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/api/vps/v1/public-keys" }));
export type VPSGetPublicKeysV1Input = typeof VPSGetPublicKeysV1Input.Type;

// Output Schema
export const VPSGetPublicKeysV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          key: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type VPSGetPublicKeysV1Output = typeof VPSGetPublicKeysV1Output.Type;

// The operation
/**
 * Get public keys
 *
 * Retrieve public keys associated with your account.
 * Use this endpoint to view available SSH keys for VPS authentication.
 *
 * @param page - Page number
 */
export const VPSGetPublicKeysV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetPublicKeysV1Input,
  outputSchema: VPSGetPublicKeysV1Output,
}));
