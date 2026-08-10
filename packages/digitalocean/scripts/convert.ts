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
 * (~445 paths). Each service entry below slices it to that service's paths
 * via `preprocess` before conversion, so we only generate the services
 * alchemy actually consumes. Add a new entry (and its path allowlist) to
 * cover another product.
 */
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";
import * as YAML from "yaml";

const SPEC = "specs/DigitalOcean-public.v2.yaml";

/** Keep only the paths matching `keep`; drop everything else. */
const slice = (keep: RegExp) => (spec: any) => {
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
      preprocess: slice(
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
      preprocess: slice(/^\/v2\/account\/keys/),
      options: {
        namespace: "com.digitalocean.sshkeys",
        serviceName: "DigitalOceanSshKeys",
      },
    },
    {
      name: "firewalls",
      specPath: SPEC,
      preprocess: slice(/^\/v2\/firewalls/),
      options: {
        namespace: "com.digitalocean.firewalls",
        serviceName: "DigitalOceanFirewalls",
      },
    },
    {
      name: "reservedIps",
      specPath: SPEC,
      preprocess: slice(/^\/v2\/reserved_ips/),
      options: {
        namespace: "com.digitalocean.reservedips",
        serviceName: "DigitalOceanReservedIps",
      },
    },
  ],
  options: {
    // DigitalOcean's per-op responses declare 401/404/422/429/500 etc.; the
    // converter's default statusToErrorClass map covers the 4xx classes and
    // these statuses fall through to the shared default error channel.
    defaultErrorStatuses: ["401", "429", "500", "502", "503", "504"],
    skipDeprecated: true,
  },
});
