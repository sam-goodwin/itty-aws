/**
 * Sensitive data schemas for handling credentials and secrets.
 *
 * This module provides schemas that wrap sensitive data in Effect's Redacted type,
 * preventing accidental logging of secrets like passwords and tokens.
 *
 * @example
 * ```ts
 * import { SensitiveString, SensitiveOutputString } from "@distilled.cloud/core/sensitive";
 *
 * // Inputs: use Sensitive* — accepts plain string OR Redacted (convenience).
 * const CreateInput = Schema.Struct({ plain_text: SensitiveString });
 * API.create({ plain_text: "my-secret" });             // ok
 * API.create({ plain_text: Redacted.make("my-secret") }); // also ok
 *
 * // Outputs: use SensitiveOutput* — decoded type is strictly Redacted, so
 * // consumers never need to coerce.
 * const CreateOutput = Schema.Struct({ plain_text: SensitiveOutputString });
 * console.log(result.plain_text); // Redacted<string>, logs "<redacted>"
 * ```
 */
import * as Redacted from "effect/Redacted";
import * as S from "effect/Schema";
import * as SchemaTransformation from "effect/SchemaTransformation";

/**
 * Sensitive (input-friendly) - Marks data as sensitive, wrapping in Redacted.
 *
 * Use for **request body** / **input** fields. The decoded TypeScript type is
 * `A | Redacted<A>` so callers can pass either a plain value or a Redacted one.
 * On the wire, plain values are sent through and Redacted values are unwrapped
 * back to their underlying value. Decoded responses are always Redacted.
 *
 * For **output** / **response** fields use {@link SensitiveOutput} instead —
 * its decoded type is strictly `Redacted<A>`, removing the need for callers to
 * narrow / coerce on every read site.
 */
export const Sensitive = <A>(
  schema: S.Schema<A>,
): S.Schema<A | Redacted.Redacted<A>> =>
  schema
    .pipe(
      S.decodeTo(
        S.Union([S.toType(schema), S.Redacted(S.toType(schema))]),
        SchemaTransformation.transform({
          // Decode: wire format -> always wrap in Redacted
          decode: (a) => Redacted.make(a) as any,
          // Encode: accept both raw and Redacted -> extract raw value
          encode: (v) => (Redacted.isRedacted(v) ? Redacted.value(v) : v),
        }),
      ),
    )
    .annotate({
      identifier: `Sensitive<${schema.ast.annotations?.identifier ?? "unknown"}>`,
    });

/**
 * Sensitive string (input-friendly).
 * Wire format: plain string. Decoded TypeScript type: `string | Redacted<string>`.
 * Decoded runtime values are always `Redacted<string>`.
 *
 * Prefer {@link SensitiveOutputString} on response schemas — its static type
 * matches the runtime (strict `Redacted<string>`).
 */
export const SensitiveString = Sensitive(S.String).annotate({
  identifier: "SensitiveString",
});

/**
 * Sensitive nullable string (input-friendly).
 * Wire format: `string | null`. Decoded type: `string | null | Redacted<string>`.
 * Prefer {@link SensitiveOutputNullableString} on response schemas.
 */
export const SensitiveNullableString = S.NullOr(SensitiveString).annotate({
  identifier: "SensitiveNullableString",
});

/**
 * SensitiveOutput - strict variant of {@link Sensitive} for response fields.
 *
 * Decoded TypeScript type is `Redacted<A>` (no union). Wire format is the
 * underlying `A`. Use on response schemas so consumers don't have to narrow
 * `string | Redacted<string>` at every read site.
 */
export const SensitiveOutput = <A>(
  schema: S.Schema<A>,
): S.Schema<Redacted.Redacted<A>> =>
  schema
    .pipe(
      S.decodeTo(
        S.Redacted(S.toType(schema)),
        SchemaTransformation.transform({
          decode: (a) => Redacted.make(a),
          encode: (v) => Redacted.value(v),
        }),
      ),
    )
    .annotate({
      identifier: `SensitiveOutput<${schema.ast.annotations?.identifier ?? "unknown"}>`,
    });

/**
 * SensitiveOutput string - strict variant of {@link SensitiveString} for
 * response fields. Decoded type is `Redacted<string>`.
 */
export const SensitiveOutputString = SensitiveOutput(S.String).annotate({
  identifier: "SensitiveOutputString",
});

/**
 * SensitiveOutput nullable string - strict variant of
 * {@link SensitiveNullableString} for response fields. Decoded type is
 * `Redacted<string> | null`.
 */
export const SensitiveOutputNullableString = S.NullOr(
  SensitiveOutputString,
).annotate({
  identifier: "SensitiveOutputNullableString",
});
