#!/usr/bin/env bun
/**
 * fetch-spec — download DigitalOcean's bundled public OpenAPI spec.
 *
 * DigitalOcean maintains its spec as a multi-file $ref tree
 * (github.com/digitalocean/openapi) and publishes the single-file bundle from
 * spec CI. We vendor the bundle (not the source tree) because the shared
 * converter consumes one document; re-run this script to pick up upstream
 * changes, then re-run convert + generate and review the diff.
 */
const BUNDLE_URL =
  "https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml";

const out = `${import.meta.dir}/../specs/DigitalOcean-public.v2.yaml`;
const res = await fetch(BUNDLE_URL);
if (!res.ok) throw new Error(`fetch failed: ${res.status} ${res.statusText}`);
await Bun.write(out, await res.text());
console.log(`✅ wrote ${out}`);
