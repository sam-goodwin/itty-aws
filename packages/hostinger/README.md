# @distilled.cloud/hostinger

Effect-native SDK for the [Hostinger API](https://developers.hostinger.com), generated from the official [OpenAPI specification](https://github.com/hostinger/api). Covers VPS, DNS, Domains, Hosting, Billing and Reach with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/hostinger effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "@distilled.cloud/hostinger/credentials";
import { VPSGetDataCenterListV1 } from "@distilled.cloud/hostinger/operations";

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

const program = Effect.gen(function* () {
  const dataCenters = yield* VPSGetDataCenterListV1({});
  for (const dc of dataCenters) {
    console.log(`${dc.id}: ${dc.name} (${dc.city})`);
  }
});

await Effect.runPromise(program.pipe(Effect.provide(MainLayer)));
```

## Configuration

| Environment variable | Description |
|---|---|
| `HOSTINGER_API_TOKEN` | API token — create one at [hpanel.hostinger.com/profile/api](https://hpanel.hostinger.com/profile/api) |
| `HOSTINGER_API_BASE_URL` | Optional override of the API base URL (default `https://developers.hostinger.com`) |

## Error Handling

Every operation returns typed errors in the Effect error channel:

```typescript
import { Effect } from "effect";
import { VPSGetVirtualMachineV1 } from "@distilled.cloud/hostinger/operations";
import { NotFound, UnknownHostingerError, HostingerValidationError } from "@distilled.cloud/hostinger/errors";

const vm = yield* VPSGetVirtualMachineV1({ virtualMachineId: 123 }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(undefined),
    HostingerValidationError: (e) =>
      Effect.dieMessage(`Invalid input: ${JSON.stringify(e.errors)}`),
    UnknownHostingerError: (e) => Effect.dieMessage(e.message ?? "unknown"),
  }),
);
```

Validation errors (HTTP 422) are surfaced as `HostingerValidationError` with per-field details in `errors`.

## Services

- **VPS: Virtual machines** — purchase, list, get, setup, start, stop, restart, recreate, hostname, root/panel password, nameservers, metrics
- **VPS: Firewall** — create, list, delete firewalls; create/update/delete rules; activate/deactivate/sync per VM
- **VPS: Docker Manager** — compose projects: create, update, start, stop, restart, down, containers, logs
- **VPS: Snapshots** — create, get, delete, restore (one snapshot per VM)
- **VPS: Public keys / Post-install scripts / PTR records / Backups / Recovery / Malware scanner / OS templates / Data centers / Actions**
- **DNS** — get/update/delete zone records (bulk), reset, validate; snapshots: list, get, restore
- **Domains** — portfolio (purchase, nameservers, privacy, lock), forwarding, WHOIS, availability
- **Hosting** — websites, subdomains, databases, WordPress, Node.js builds, datacenters, orders
- **Billing** — catalog, subscriptions, auto-renewal, payment methods
- **Reach** — contacts, segments, profiles

## License

MIT
