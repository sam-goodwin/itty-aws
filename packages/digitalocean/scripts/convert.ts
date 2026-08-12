#!/usr/bin/env bun
/**
 * convert — turn the DigitalOcean public OpenAPI spec into Smithy JSON
 * models, one per service.
 *
 * Input:  specs/DigitalOcean-public.v2.yaml  (OAS 3.0, bundled — see
 *         scripts/fetch-spec.ts)
 * Output: .generated-specs/<service>.json
 *
 * The upstream spec is one document covering every DigitalOcean product
 * (~445 paths). Each entry keeps only its service's paths before
 * conversion; add a new entry (and its path allowlist) to cover another
 * product. RFC-6902 patches in `patches/<service>/` apply to the OpenAPI
 * document before conversion.
 */
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";
import * as YAML from "yaml";

const SPEC = "specs/DigitalOcean-public.v2.yaml";

/** Drop every path not matching `keep`. Mutates the spec in place. */
const keepPaths = (keep: RegExp) => (spec: any) => {
  spec.paths = Object.fromEntries(
    Object.entries(spec.paths).filter(([p]) => keep.test(p)),
  );
};

await runOpenApiConvert({
  root: `${import.meta.dir}/..`,
  // The bundled spec leans heavily on YAML anchors — lift the alias cap.
  parse: (text) => YAML.parse(text, { maxAliasCount: -1 }),
  specs: [
    {
      name: "droplets",
      specPath: SPEC,
      // Core droplet CRUD + the action API (resize/rename/power) — not the
      // autoscale pools, backup policies, or monitoring surfaces.
      preprocess: keepPaths(
        /^\/v2\/droplets(\/\{droplet_id\})?($|\/actions|\/destroy_with_associated_resources)/,
      ),
      options: {
        namespace: "com.digitalocean.droplets",
        serviceName: "DigitalOceanDroplets",
      },
    },
    {
      name: "sshKeys",
      specPath: SPEC,
      preprocess: keepPaths(/^\/v2\/account\/keys/),
      options: {
        namespace: "com.digitalocean.sshkeys",
        serviceName: "DigitalOceanSshKeys",
      },
    },
    {
      name: "firewalls",
      specPath: SPEC,
      preprocess: keepPaths(/^\/v2\/firewalls/),
      options: {
        namespace: "com.digitalocean.firewalls",
        serviceName: "DigitalOceanFirewalls",
      },
    },
    {
      name: "reservedIps",
      specPath: SPEC,
      preprocess: keepPaths(/^\/v2\/reserved_ips/),
      options: {
        namespace: "com.digitalocean.reservedips",
        serviceName: "DigitalOceanReservedIps",
      },
    },
    {
      name: "tags",
      specPath: SPEC,
      preprocess: keepPaths(/^\/v2\/tags/),
      options: {
        namespace: "com.digitalocean.tags",
        serviceName: "DigitalOceanTags",
      },
    },
  ],
  options: {
    // DigitalOcean's per-op responses declare 401/404/422/429/500 etc.; the
    // converter's default statusToErrorClass map covers the 4xx classes and
    // these statuses fall through to the shared default error channel.
    defaultErrorStatuses: ["401", "429", "500", "502", "503", "504"],
    // Async-accept endpoints (droplet create, droplet/firewall actions)
    // answer 202 with the created resource in the body.
    successStatuses: ["200", "201", "202", "204"],
    skipDeprecated: true,
  },
});
