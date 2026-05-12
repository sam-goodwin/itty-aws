# @distilled.cloud/vultr

Effect-native Vultr SDK generated from the [Vultr API v2 OpenAPI specification](https://www.vultr.com/api/). Manage instances, bare metal servers, Kubernetes clusters, block storage, object storage, DNS, firewalls, load balancers, databases, and more with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/vultr effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { listInstances } from "@distilled.cloud/vultr/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/vultr";

const program = Effect.gen(function* () {
  const result = yield* listInstances({});
  return result.instances;
});

const VultrLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(VultrLive), Effect.runPromise);
```

## Configuration

Set the following environment variable:

```bash
VULTR_API_KEY=your-api-key
```

Create an API key in the [Vultr customer portal](https://my.vultr.com/settings/#settingsapi) under **Account > API**.

## Error Handling

```typescript
import { getInstance } from "@distilled.cloud/vultr/Operations";

getInstance({ instanceId: "missing" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    UnknownVultrError: (e) => Effect.fail(new Error(`Unknown: ${e.message}`)),
  }),
);
```

## Services

- **Instances** — list, create, get, update, delete cloud compute instances; manage IPv4/IPv6 addresses, reverse DNS, ISOs, backup schedules, and restore points
- **Bare Metal** — provision and manage dedicated bare metal servers, IPs, VPC attachments, and bandwidth usage
- **Kubernetes (VKE)** — manage clusters, node pools, nodes, and kubeconfig
- **Block Storage** — create, attach, detach, and delete block volumes
- **Object Storage** — manage S3-compatible object storage subscriptions and credentials
- **Snapshots & ISOs** — create snapshots, upload custom ISOs, list public ISOs
- **VPCs & Private Networks** — create VPC (v1 and v2) networks and attach nodes
- **DNS** — manage domains, records, and DNSSEC info
- **Firewalls** — create firewall groups and rules
- **Load Balancers** — create, configure, and delete load balancers, forwarding rules, and SSL
- **Reserved IPs** — reserve, attach, detach, and convert IPs
- **Databases** — managed Postgres/MySQL/Redis databases, users, replicas, backups, migrations, and connection pools
- **Container Registry** — manage registries, repositories, robots, and Docker credentials
- **Marketplace** — list and configure marketplace apps
- **Operating Systems & Plans** — list available OS images, plans, and regions
- **Billing** — list invoices, items, and pending charges
- **Account & Users** — get account info, manage sub-users and SSH keys
- **Startup Scripts** — manage cloud-init style startup scripts

## License

MIT
