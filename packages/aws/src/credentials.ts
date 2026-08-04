import {
  fromContainerMetadata as _fromContainerMetadata,
  fromEnv as _fromEnv,
  fromIni as _fromIni,
  fromNodeProviderChain as _fromNodeProviderChain,
  fromProcess as _fromProcess,
  fromTokenFile as _fromTokenFile,
} from "@aws-sdk/credential-providers";
import * as BrowserCredentials from "./credentials.browser.ts";
export * from "./credentials.browser.ts";

import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { Auth } from "./auth.ts";
import * as Region from "./region.ts";

export const fromEnv = () =>
  BrowserCredentials.createLazyProvider(_fromEnv, "env");

export const fromChain = () =>
  BrowserCredentials.createLazyProvider(
    () => _fromNodeProviderChain(),
    "chain",
  );

// export const fromSSO = () => createLazyProvider(_fromSSO);

export const fromIni = () =>
  BrowserCredentials.createLazyProvider(_fromIni, "ini");

export const fromContainerMetadata = () =>
  BrowserCredentials.createLazyProvider(_fromContainerMetadata, "container");

export const fromProcess = () =>
  BrowserCredentials.createLazyProvider(_fromProcess, "process");

export const fromTokenFile = () =>
  BrowserCredentials.createLazyProvider(_fromTokenFile, "token-file");

/**
 * Create a lazy, cached SSO credentials provider.
 * SSO credential resolution is deferred until the Effect is run,
 * and credentials are cached until they expire.
 */
export const fromSSO = (profileName: string = "default") =>
  Layer.merge(
    Layer.effect(
      BrowserCredentials.Credentials,
      Auth.use((auth) =>
        Effect.succeed(
          BrowserCredentials.createCachedCredentialsEffect(
            auth.loadProfileCredentials(profileName),
          ),
        ),
      ),
    ),
    regionFromProfile(profileName),
  );

/**
 * The `Region` for a profile, from its configured `region` (falling back to
 * `sso_region`, which an SSO profile always carries).
 *
 * `fromSSO` merges this in, so authenticating through a profile also settles
 * the region — the profile already says which one it is, and restating it in
 * code is how the two drift apart. It stays a separate layer so a caller can
 * take the region from one profile while authenticating some other way.
 *
 * Region resolution is by precedence, not by failure: a `Region` layer
 * provided closer to the call wins, and a profile with no region at all
 * simply leaves the environment (`AWS_REGION`) to answer. Neither is an
 * error here.
 */
export const regionFromProfile = (profileName: string = "default") =>
  Layer.effect(
    Region.Region,
    // `Auth.use` rather than the module-level `loadProfile`: it reads the
    // Auth service the caller already provides for `fromSSO`, instead of
    // constructing one and dragging FileSystem/Path into this layer's
    // requirements.
    Auth.use((auth) =>
      auth.loadProfile(profileName).pipe(
        Effect.map((profile) => profile.region ?? profile.sso_region),
        // An unreadable or absent profile isn't fatal — the environment
        // still gets its turn below.
        Effect.catchCause(() => Effect.succeed(undefined)),
        Effect.map((region) =>
          region === undefined
            ? // Defer to the environment, NOT to `Region.resolve` — this
              // layer provides `Region`, so `resolve` would find it and
              // re-enter itself.
              Region.fromEnvironment
            : Effect.succeed(region as Region.RegionName),
        ),
      ),
    ),
  );
