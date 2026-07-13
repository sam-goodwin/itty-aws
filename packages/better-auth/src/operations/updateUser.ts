import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Unauthorized } from "../errors.ts";

// Input Schema
export interface UpdateUserInput {
  name?: string;
  image?: string | null;
}
export const UpdateUserInput = /*@__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  image: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/update-user" }),
) as unknown as Schema.Codec<UpdateUserInput>;

// Output Schema
export interface UpdateUserOutput {
  status: boolean;
}
export const UpdateUserOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
}) as unknown as Schema.Codec<UpdateUserOutput>;

/**
 * Update the current user's profile fields.
 *
 * Requires an authenticated session. Email is not changeable here — use
 * `changeEmail`. Additional configured user fields may also be passed.
 *
 * @param name - Optional new display name.
 * @param image - Optional new avatar URL (or `null` to clear).
 */
export const updateUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateUserInput,
  outputSchema: UpdateUserOutput,
  errors: [BadRequest, Unauthorized] as const,
}));
