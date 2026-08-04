/**
 * The region an operation is dispatched to.
 *
 * {@link Region} is an OVERRIDE, not a requirement: operations don't list it
 * in their context, and {@link resolve} reads it with `Effect.serviceOption`.
 * When nothing provides it, the region falls back to the environment — the
 * same `AWS_REGION`/`AWS_DEFAULT_REGION` variables every AWS tool reads — so
 * a caller that has already authenticated through the environment or an SSO
 * profile doesn't have to state the region twice.
 *
 * Precedence, highest first:
 *
 * 1. a `Region` layer provided by the caller (`Region.fromEnv()`, or any
 *    `Layer.succeed(Region, …)`),
 * 2. a `Region` layer provided by the credentials layer — `Credentials.fromSSO`
 *    contributes the profile's configured region,
 * 3. `AWS_REGION`, then `AWS_DEFAULT_REGION`.
 *
 * With none of those, {@link resolve} dies. A missing region is a
 * configuration defect, not a recoverable API failure, and dying keeps it out
 * of every operation's error channel — the same call `fromEnv()` already made
 * for an unset variable.
 */
import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";

export class Region extends Context.Service<
  Region,
  Effect.Effect<RegionName>
>()("AWS::Region") {}

/** `AWS_REGION`, then `AWS_DEFAULT_REGION`. */
const fromEnvConfig = Config.string("AWS_REGION").pipe(
  Config.orElse(() => Config.string("AWS_DEFAULT_REGION")),
);

/**
 * The region from the environment alone, ignoring any provided {@link Region}.
 *
 * This is {@link resolve}'s last step, exported because a layer that PROVIDES
 * `Region` cannot call `resolve` to defer to the environment — `resolve` would
 * find that same layer and re-enter it forever. Such layers fall back here.
 *
 * Dies when neither variable is set: a missing region is a configuration
 * defect, not a recoverable API failure, and keeping it out of the error
 * channel is what lets every operation drop `Region` from its requirements.
 */
export const fromEnvironment: Effect.Effect<RegionName> = fromEnvConfig.pipe(
  Effect.catchCause(() =>
    Effect.die(
      new Error(
        "No AWS region configured. Set AWS_REGION (or AWS_DEFAULT_REGION), " +
          'provide one with Region.of("us-east-1"), or authenticate with a ' +
          "profile that configures a region (Credentials.fromSSO).",
      ),
    ),
  ),
);

export const fromEnv = () => Layer.succeed(Region, fromEnvironment);

/** Provide a fixed region, e.g. `Region.of("us-west-2")`. */
export const of = (region: RegionName) =>
  Layer.succeed(Region, Effect.succeed(region));

/**
 * The region for the current request: the provided {@link Region} if there is
 * one, otherwise {@link fromEnvironment}. Requires nothing — that is what
 * makes the service optional at every call site.
 */
export const resolve: Effect.Effect<RegionName> = Effect.flatMap(
  Effect.serviceOption(Region),
  Option.match({
    onSome: (region) => region,
    onNone: () => fromEnvironment,
  }),
);

export type RegionName =
  | "us-east-1"
  | "us-east-2"
  | "us-west-1"
  | "us-west-2"
  | "af-south-1"
  | "ap-east-1"
  | "ap-south-2"
  | "ap-southeast-3"
  | "ap-southeast-5"
  | "ap-southeast-4"
  | "ap-south-1"
  | "ap-southeast-6"
  | "ap-northeast-3"
  | "ap-northeast-2"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-east-2"
  | "ap-southeast-7"
  | "ap-northeast-1"
  | "ca-central-1"
  | "ca-west-1"
  | "eu-central-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-south-1"
  | "eu-west-3"
  | "eu-south-2"
  | "eu-north-1"
  | "eu-central-2"
  | "il-central-1"
  | "mx-central-1"
  | "me-south-1"
  | "me-central-1"
  | "sa-east-1"
  | (string & {});
