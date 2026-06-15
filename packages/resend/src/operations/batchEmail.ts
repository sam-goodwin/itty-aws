import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  Conflict,
  UnprocessableEntity,
  UnavailableForLegalReasons,
} from "../errors.ts";

// Input Schema
export const BatchEmailInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/emails/batch" }));
export type BatchEmailInput = typeof BatchEmailInput.Type;

// Output Schema
export const BatchEmailOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type BatchEmailOutput = typeof BatchEmailOutput.Type;

// The operation
/**
 * Trigger up to 100 batch emails at once.
 *
 * @param Idempotency-Key - A unique identifier for the request to ensure emails are only sent once. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)
 */
export const batchEmail = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchEmailInput,
  outputSchema: BatchEmailOutput,
  errors: [
    BadRequest,
    Forbidden,
    Conflict,
    UnprocessableEntity,
    UnavailableForLegalReasons,
  ] as const,
}));
