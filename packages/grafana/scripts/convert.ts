#!/usr/bin/env bun
/**
 * Convert Grafana's stable, self-hosted `/apis` OpenAPI snapshots into
 * Smithy JSON models consumed by scripts/generate.ts.
 *
 * The old aggregate `public/openapi3.json` and `public/api-merged.json` files
 * are deliberately not inputs here. They describe the legacy `/api` surface.
 * Every source file is pinned and checked in under `specs/` so conversion is
 * reproducible without a network connection.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import {
  convertOpenApiToSmithy,
  type SmithyModel,
} from "@distilled.cloud/core/codegen/openapi";

const root = path.resolve(import.meta.dir, "..");
const specsDir = path.join(root, "specs");
const outDir = path.join(root, ".generated-specs");

interface GrafanaApi {
  readonly name: string;
  readonly file: string;
  readonly serviceName: string;
  readonly namespace: string;
  readonly group: string;
  readonly version: string;
}

const APIS: readonly GrafanaApi[] = [
  {
    name: "dashboard",
    file: "dashboard.grafana.app-v2.json",
    serviceName: "Dashboard",
    namespace: "com.grafana.dashboard.v2",
    group: "dashboard.grafana.app",
    version: "v2",
  },
  {
    name: "folder",
    file: "folder.grafana.app-v1.json",
    serviceName: "Folder",
    namespace: "com.grafana.folder.v1",
    group: "folder.grafana.app",
    version: "v1",
  },
  {
    name: "playlist",
    file: "playlist.grafana.app-v1.json",
    serviceName: "Playlist",
    namespace: "com.grafana.playlist.v1",
    group: "playlist.grafana.app",
    version: "v1",
  },
  {
    name: "alertingRules",
    file: "rules.alerting.grafana.app-v0alpha1.json",
    serviceName: "AlertingRules",
    namespace: "com.grafana.rules.alerting.v0alpha1",
    group: "rules.alerting.grafana.app",
    version: "v0alpha1",
  },
  {
    name: "alertingNotifications",
    file: "notifications.alerting.grafana.app-v1beta1.json",
    serviceName: "AlertingNotifications",
    namespace: "com.grafana.notifications.alerting.v1beta1",
    group: "notifications.alerting.grafana.app",
    version: "v1beta1",
  },
];

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;
const PATCH_MEDIA_TYPES = [
  "application/apply-patch+yaml",
  "application/json-patch+json",
  "application/merge-patch+json",
  "application/strategic-merge-patch+json",
] as const;
const PATCH_BODY_REF = "#/components/schemas/GrafanaPatchBody";

/**
 * The per-API snapshots are rooted at `/`. Grafana serves namespaced
 * resources below `/apis/<group>/<version>/namespaces/<namespace>` while the
 * discovery document is rooted directly at `/apis/<group>/<version>`.
 */
const prefixPaths = (spec: any, api: GrafanaApi): void => {
  const prefix = `/apis/${api.group}/${api.version}`;
  const paths: Record<string, unknown> = {};
  for (const [route, item] of Object.entries<Record<string, unknown>>(
    spec.paths ?? {},
  )) {
    const pathItem = { ...(item as Record<string, unknown>) };
    const pathParameters = pathItem.parameters;
    const namespaced = route !== "/";
    const target = namespaced
      ? `${prefix}/namespaces/{namespace}${route}`
      : prefix;
    paths[target] = pathItem;
    // A namespace label belongs on every namespaced operation. Keeping it as
    // a path-level parameter avoids duplicating the same OpenAPI parameter in
    // every operation and lets the shared converter carry it to each input.
    if (namespaced) {
      pathItem.parameters = [
        {
          name: "namespace",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
        ...(Array.isArray(pathParameters) ? pathParameters : []),
      ];
    }
  }
  spec.paths = paths;
  delete spec.servers;
};

/** Fail early if a supposedly new snapshot contains a legacy route. */
const assertNewApi = (spec: any, api: GrafanaApi): void => {
  for (const route of Object.keys(spec.paths ?? {})) {
    if (route.startsWith("/api/") || route === "/api") {
      throw new Error(
        `${api.name}: legacy /api route found in source snapshot: ${route}`,
      );
    }
  }
  for (const [route, item] of Object.entries<Record<string, any>>(
    spec.paths ?? {},
  )) {
    for (const method of HTTP_METHODS) {
      const operation = item[method];
      if (operation?.deprecated === true) {
        throw new Error(
          `${api.name}: deprecated operation found: ${method.toUpperCase()} ${route}`,
        );
      }
    }
  }
};

/**
 * The structured API accepts either an RFC 6902 array or an RFC 7386/
 * strategic object for PATCH. The upstream document gives those media types
 * a property-less `Patch` schema and does not include `application/json`,
 * which is the shared converter's JSON-body entry point. Add a local,
 * explicit union only for conversion; the operation trait below still keeps
 * Grafana's actual media-type default and the protocol can override it.
 */
const normalizePatchBodies = (spec: any): void => {
  spec.components ??= {};
  spec.components.schemas ??= {};
  spec.components.schemas.GrafanaPatchBody = {
    description: "A Grafana structured API patch document.",
    oneOf: [
      { type: "object", additionalProperties: true },
      { type: "array", items: {} },
    ],
  };
  for (const item of Object.values<Record<string, any>>(spec.paths ?? {})) {
    for (const operation of Object.values<any>(item)) {
      if (!operation || typeof operation !== "object") continue;
      const content = operation.requestBody?.content;
      if (!content || typeof content !== "object") continue;
      const mediaTypes = Object.keys(content);
      if (
        !mediaTypes.some((mediaType) =>
          PATCH_MEDIA_TYPES.includes(
            mediaType as (typeof PATCH_MEDIA_TYPES)[number],
          ),
        )
      ) {
        continue;
      }
      content["application/json"] = { schema: { $ref: PATCH_BODY_REF } };
    }
  }
};

/**
 * A few stable subresources publish a wildcard content type for their JSON
 * response. The core converter intentionally accepts only an explicit JSON
 * media type, so copy that schema to `application/json` without changing the
 * checked-in source.
 */
const normalizeWildcardResponses = (spec: any): void => {
  for (const item of Object.values<Record<string, any>>(spec.paths ?? {})) {
    for (const operation of Object.values<any>(item)) {
      if (!operation || typeof operation !== "object") continue;
      for (const response of Object.values<any>(operation.responses ?? {})) {
        const content = response?.content;
        if (
          content &&
          content["application/json"] === undefined &&
          content["*/*"] !== undefined
        ) {
          content["application/json"] = content["*/*"];
        }
      }
    }
  }
};

/**
 * The receiver test subresource has a required JSON body in Grafana's Go API,
 * but the generated OpenAPI snapshot omits it. Keep the SDK contract aligned
 * with the server's v1beta1 request type instead of generating a bodyless POST.
 *
 * The request is deliberately modeled separately from ReceiverIntegration:
 * testing a new or partially edited integration accepts optional `uid` and
 * `secureFields`, while the alert payload always carries labels and annotations.
 */
const normalizeReceiverTestBody = (spec: any): void => {
  spec.components ??= {};
  spec.components.schemas ??= {};
  spec.components.schemas.CreateReceiverIntegrationTestRequestIntegration = {
    type: "object",
    required: ["type", "version", "settings"],
    properties: {
      uid: { type: "string" },
      type: { type: "string" },
      version: { type: "string" },
      disableResolveMessage: { type: "boolean" },
      settings: { type: "object", additionalProperties: true },
      secureFields: {
        type: "object",
        additionalProperties: { type: "boolean" },
      },
    },
    additionalProperties: false,
  };
  spec.components.schemas.CreateReceiverIntegrationTestRequestAlert = {
    type: "object",
    required: ["labels", "annotations"],
    properties: {
      labels: { type: "object", additionalProperties: { type: "string" } },
      annotations: {
        type: "object",
        additionalProperties: { type: "string" },
      },
    },
    additionalProperties: false,
  };
  spec.components.schemas.CreateReceiverIntegrationTestRequestBody = {
    type: "object",
    required: ["integration", "alert"],
    properties: {
      integration: {
        $ref: "#/components/schemas/CreateReceiverIntegrationTestRequestIntegration",
      },
      alert: {
        $ref: "#/components/schemas/CreateReceiverIntegrationTestRequestAlert",
      },
    },
    additionalProperties: false,
  };

  for (const item of Object.values<Record<string, any>>(spec.paths ?? {})) {
    const operation = item.post;
    if (operation?.operationId !== "createReceiverTest") continue;
    operation.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/CreateReceiverIntegrationTestRequestBody",
          },
        },
      },
    };
  }
};

/** Add the Kubernetes-style continue token to the model's list operations. */
const addPaginationTraits = (
  model: SmithyModel,
  operations: ReadonlySet<string>,
): void => {
  const shapes = model.shapes;
  for (const opName of operations) {
    const op = shapes[opName];
    if (!op || op.type !== "operation") continue;
    const input = shapes[op.input?.target];
    const output = shapes[op.output?.target];
    if (!input || !output) continue;
    const hasContinue = Object.prototype.hasOwnProperty.call(
      input.members ?? {},
      "continue",
    );
    const hasItems = Object.prototype.hasOwnProperty.call(
      output.members ?? {},
      "items",
    );
    const metadataTarget = output.members?.metadata?.target;
    const metadata = metadataTarget ? shapes[metadataTarget] : undefined;
    const hasMetadataContinue = Object.prototype.hasOwnProperty.call(
      metadata?.members ?? {},
      "continue",
    );
    if (!hasContinue || !hasItems || !hasMetadataContinue) continue;
    op.traits ??= {};
    op.traits["smithy.api#paginated"] = {
      mode: "cursor",
      inputToken: "continue",
      outputToken: "metadata.continue",
      items: "items",
    };
  }
};

/**
 * The OpenAPI snapshots describe PATCH with four non-JSON media types. The
 * shared converter intentionally ignores those bodies, so preserve the
 * payload as an opaque JSON document and carry the default media type on the
 * operation's HTTP trait for GrafanaProtocol to override when requested.
 */
const addPatchBodies = (
  model: SmithyModel,
  operations: ReadonlySet<string>,
): void => {
  for (const opName of operations) {
    const op = model.shapes[opName];
    if (!op || op.type !== "operation") continue;
    const input = model.shapes[op.input?.target];
    if (!input || input.type !== "structure") continue;
    input.members ??= {};
    // Keep the converter's typed union when available. This fallback makes
    // the pipeline robust if a future converter stops materializing the
    // synthetic schema as a named shape.
    input.members.body ??= {
      target: "smithy.api#Document",
      traits: {
        "smithy.api#httpPayload": {},
        "smithy.api#required": {},
      },
    };
    op.traits ??= {};
    op.traits["smithy.api#http"].patchMediaType =
      "application/merge-patch+json";
  }
};

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const api of APIS) {
  const sourcePath = path.join(specsDir, api.file);
  const spec = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  assertNewApi(spec, api);
  normalizePatchBodies(spec);
  normalizeReceiverTestBody(spec);
  normalizeWildcardResponses(spec);
  prefixPaths(spec, api);

  const model = convertOpenApiToSmithy(spec, {
    namespace: api.namespace,
    serviceName: api.serviceName,
    skipDeprecated: true,
  });
  const listOperations = new Set<string>();
  const patchOperations = new Set<string>();
  for (const item of Object.values<Record<string, any>>(spec.paths)) {
    for (const method of HTTP_METHODS) {
      const operation = item[method];
      if (!operation?.operationId) continue;
      const operationName = `${api.namespace}#${operation.operationId[0].toUpperCase()}${operation.operationId.slice(1)}`;
      if (operation.operationId.startsWith("list")) {
        listOperations.add(operationName);
      }
      if (
        method === "patch" &&
        Object.keys(operation.requestBody?.content ?? {}).some(
          (contentType) =>
            contentType.endsWith("patch+json") ||
            contentType.endsWith("patch+yaml"),
        )
      ) {
        patchOperations.add(operationName);
      }
    }
  }
  addPaginationTraits(model, listOperations);
  addPatchBodies(model, patchOperations);
  const operations = Object.values(model.shapes).filter(
    (shape: any) => shape.type === "operation",
  ).length;
  fs.writeFileSync(
    path.join(outDir, `${api.name}.json`),
    JSON.stringify(model, null, 2) + "\n",
  );
  console.log(`✅ ${api.name}: ${operations} operations`);
}
