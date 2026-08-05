import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as SchemaIssue from "effect/SchemaIssue";
import * as SchemaTransformation from "effect/SchemaTransformation";

/**
 * The Go duration grammar the collector's config loader accepts, as the
 * reflector stamps it onto every `time.Duration` field.
 *
 * Note it is narrower than Go's own `time.ParseDuration`: no sign, no decimal
 * point, and exactly one unit. That is what the reflector emits, and it is
 * what {@link DurationFromGoString} enforces.
 */
export const GO_DURATION_PATTERN = /^[0-9]+(ns|us|µs|ms|s|m|h)$/;

const NANOS_PER_UNIT: Record<string, bigint> = {
  ns: 1n,
  us: 1_000n,
  µs: 1_000n,
  ms: 1_000_000n,
  s: 1_000_000_000n,
  m: 60_000_000_000n,
  h: 3_600_000_000_000n,
};

/**
 * Render a `Duration` in the collector's Go format.
 *
 * The largest unit that divides evenly is used, so a round duration reads the
 * way it would have been written by hand (`1s`, not `1000ms`) and the emitted
 * bytes are stable for a given value — which matters when the emitted config
 * is content-hashed into an artifact.
 */
export const toGoString = (duration: Duration.Duration): string => {
  const nanos = Duration.toNanosUnsafe(duration);
  if (nanos === 0n) return "0s";
  for (const [scale, suffix] of [
    [3_600_000_000_000n, "h"],
    [60_000_000_000n, "m"],
    [1_000_000_000n, "s"],
    [1_000_000n, "ms"],
    [1_000n, "us"],
  ] as const) {
    if (nanos % scale === 0n) return `${nanos / scale}${suffix}`;
  }
  return `${nanos}ns`;
};

/**
 * A collector duration field.
 *
 * ```
 * decode:  "100ms"  ->  Duration.millis(100)
 * encode:  Duration.millis(100)  ->  "100ms"
 * ```
 *
 * The TYPE side is `Duration.Duration` rather than a string, so a collector
 * duration and an Effect duration cannot be confused for one another; the
 * ENCODED side is the Go string the collector reads. Emitting a config is
 * therefore just `Schema.encodeSync` over the component schema — the same pass
 * that validates it.
 *
 * Infinite durations fail to encode: Go's grammar has no spelling for one, so
 * silently rounding it would put a wrong value in a config file.
 */
export const DurationFromGoString = Schema.String.pipe(
  Schema.decodeTo(
    Schema.Duration,
    SchemaTransformation.transformOrFail({
      decode: (text: string) => {
        const match = GO_DURATION_PATTERN.exec(text);
        if (match === null) {
          return Effect.fail(
            new SchemaIssue.InvalidValue(Option.some(text), {
              message: `expected a Go duration such as "1s", "100ms" or "2h" (got ${JSON.stringify(text)})`,
            }),
          );
        }
        const scale = NANOS_PER_UNIT[match[1]!]!;
        return Effect.succeed(
          Duration.nanos(BigInt(text.slice(0, -match[1]!.length)) * scale),
        );
      },
      encode: (duration: Duration.Duration) =>
        Duration.isFinite(duration)
          ? Effect.succeed(toGoString(duration))
          : Effect.fail(
              new SchemaIssue.InvalidValue(Option.some(duration), {
                message:
                  "an infinite Duration has no collector representation — use a finite duration",
              }),
            ),
    }),
  ),
);
