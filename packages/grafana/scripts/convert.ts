#!/usr/bin/env bun
/**
 * convert — turn the Grafana OpenAPI spec into a Smithy 2.0 JSON model.
 *
 * Input:  specs/spec-mirror-grafana/specs/*.json  (spec submodule)
 *         patches/*.patch.json  (RFC-6902 patches to the OpenAPI document)
 * Output: .generated-specs/grafana.json
 *
 * The OpenAPI→Smithy converter lives in
 * `@distilled.cloud/core/codegen/openapi`; this script is Grafana's pipeline
 * config. `scripts/generate.ts` compiles the model into src/services.
 */
import * as path from "node:path";
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";

type ApiSpec = {
  paths?: Record<string, Record<string, unknown>>;
};

const legacyApi = (spec: ApiSpec) => {
  spec.paths = Object.fromEntries(
    Object.entries(spec.paths ?? {}).map(([route, pathItem]) => [
      route.startsWith("/api/") ? route : `/api${route}`,
      pathItem,
    ]),
  );
};

const structuredApi = (group: string, version: string) => (spec: ApiSpec) => {
  const prefix = `/apis/${group}/${version}`;
  const paths: Record<string, Record<string, unknown>> = {};

  for (const [route, pathItem] of Object.entries(spec.paths ?? {})) {
    const publishedPath = route.startsWith("/apis/");
    const uri = publishedPath
      ? route
      : route === "/"
        ? prefix
        : `${prefix}/namespaces/{namespace}${route}`;
    paths[uri] = {
      ...pathItem,
      ...(publishedPath
        ? {}
        : {
            parameters: [
              ...(Array.isArray(pathItem.parameters)
                ? pathItem.parameters
                : []),
              {
                name: "namespace",
                in: "path",
                required: true,
                schema: { type: "string" },
              },
            ],
          }),
    };
  }

  spec.paths = paths;
};

await runOpenApiConvert({
  root: path.resolve(import.meta.dir, ".."),
  specs: [
    {
      name: "grafana",
      specPath: "specs/spec-mirror-grafana/specs/openapi3.json",
      preprocess: legacyApi,
    },
    {
      name: "dashboard",
      specPath: "specs/spec-mirror-grafana/specs/dashboard.grafana.app-v2.json",
      preprocess: structuredApi("dashboard.grafana.app", "v2"),
      options: {
        namespace: "com.grafana.dashboard",
        serviceName: "Dashboard",
      },
    },
    {
      name: "folder",
      specPath: "specs/spec-mirror-grafana/specs/folder.grafana.app-v1.json",
      preprocess: structuredApi("folder.grafana.app", "v1"),
      options: {
        namespace: "com.grafana.folder",
        serviceName: "Folder",
      },
    },
    {
      name: "playlist",
      specPath: "specs/spec-mirror-grafana/specs/playlist.grafana.app-v1.json",
      preprocess: structuredApi("playlist.grafana.app", "v1"),
      options: {
        namespace: "com.grafana.playlist",
        serviceName: "Playlist",
      },
    },
    {
      name: "alertingRules",
      specPath:
        "specs/spec-mirror-grafana/specs/rules.alerting.grafana.app-v0alpha1.json",
      preprocess: structuredApi("rules.alerting.grafana.app", "v0alpha1"),
      options: {
        namespace: "com.grafana.alerting.rules",
        serviceName: "AlertingRules",
      },
    },
    {
      name: "alertingNotifications",
      specPath:
        "specs/spec-mirror-grafana/specs/notifications.alerting.grafana.app-v1beta1.json",
      preprocess: structuredApi(
        "notifications.alerting.grafana.app",
        "v1beta1",
      ),
      options: {
        namespace: "com.grafana.alerting.notifications",
        serviceName: "AlertingNotifications",
      },
    },
    {
      name: "alertEnrichment",
      specPath:
        "specs/spec-mirror-grafana/specs/alertenrichment.grafana.app-v1beta1.json",
      preprocess: structuredApi("alertenrichment.grafana.app", "v1beta1"),
      options: {
        namespace: "com.grafana.alerting.enrichment",
        serviceName: "AlertEnrichment",
      },
    },
    {
      name: "banners",
      specPath:
        "specs/spec-mirror-grafana/specs/banners.grafana.app-v0alpha1.json",
      preprocess: structuredApi("banners.grafana.app", "v0alpha1"),
      options: {
        namespace: "com.grafana.banners",
        serviceName: "Banners",
      },
    },
    {
      name: "secrets",
      specPath:
        "specs/spec-mirror-grafana/specs/secret.grafana.app-v1beta1.json",
      preprocess: structuredApi("secret.grafana.app", "v1beta1"),
      options: {
        namespace: "com.grafana.secrets",
        serviceName: "Secrets",
      },
    },
  ],
  // OpenAPI-document patches (v0 layout: flat patches/*.patch.json). The
  // smithy-model patch chain in generate.ts is disabled (`patchesDir: false`).
  patchesDir: "patches",
  options: {
    namespace: "com.grafana.api",
    serviceName: "Grafana",
    skipDeprecated: true,
  },
});
