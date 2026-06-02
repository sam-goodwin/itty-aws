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
  Layer.effect(
    BrowserCredentials.Credentials,
    Auth.use((auth) =>
      Effect.succeed(
        BrowserCredentials.createCachedCredentialsEffect(
          auth.loadProfileCredentials(profileName),
        ),
      ),
    ),
  );
