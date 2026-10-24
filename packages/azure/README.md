# @distilled.cloud/azure

Effect-native SDK for [azure](https://www.npmjs.com/package/@distilled.cloud/azure).

## Installation

```bash
npm install @distilled.cloud/azure effect
```

## Quick start

```ts
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/http/FetchHttpClient";
import * as Azure from "@distilled.cloud/azure";

const program = Effect.gen(function* () {
  const result = yield* Azure.resources.ResourceGroupsList({});
  return result;
});

const Live = Layer.mergeAll(
  FetchHttpClient.layer,
  Azure.CredentialsFromEnv,
  Azure.AzureProtocol,
);

program.pipe(Effect.provide(Live), Effect.runPromise);
```

## Auth

Each layer mints Microsoft Entra ID tokens for ARM and for each data plane's audience, caches them per scope, and refreshes them 5 minutes before they expire:

- `Azure.fromClientSecret({ tenantId, clientId, clientSecret, subscriptionId })` -- a service principal.
- `Azure.fromManagedIdentity({ clientId? })` -- the host's managed identity (App Service, Functions, Container Apps, VMs, AKS).
- `Azure.fromStaticToken({ bearerToken, subscriptionId })` / `Azure.CredentialsFromEnv` -- one pre-acquired token (`AZURE_BEARER_TOKEN`, `AZURE_SUBSCRIPTION_ID`; optional `AZURE_TENANT_ID`, `AZURE_API_BASE_URL`).
- `Azure.fromEnv()` -- `AZURE_TENANT_ID` + `AZURE_CLIENT_ID` + `AZURE_CLIENT_SECRET`, else a managed identity, else `AZURE_BEARER_TOKEN`.

Failures are typed: `InvalidClientSecret`, `ManagedIdentityUnavailable`, `TokenRequestFailed`.
