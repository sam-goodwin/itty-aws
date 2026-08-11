---
title: list-sandboxes
product: vercel
url: /docs/rest-api/sandboxes/list-sandboxes
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/list-sandboxes"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-sandboxes on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List sandboxes

```http
GET /v2/sandboxes
```

Retrieves a paginated list of named sandboxes belonging to a specific project. Results can be sorted by creation time or name, and optionally filtered by name prefix or status.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `project` | string | No | The unique identifier or name of the project to list named sandboxes for. |
| `limit` | number. min: 1; max: 50; default: 20 | No | Maximum number of named sandboxes to return in the response. Used for pagination. |
| `sortBy` | string. enum: createdAt, name, statusUpdatedAt, currentSnapshotId; default: "createdAt" | No | Field to sort by. |
| `namePrefix` | string | No | Filter named sandboxes whose name starts with this prefix. Only valid when sortBy=name. |
| `cursor` | string | No | Opaque pagination cursor from a previous response. |
| `sortOrder` | string. enum: asc, desc; default: "desc" | No | Sort direction. Defaults to desc. |
| `status` | string. enum: running, stopping, stopped | No | Filter named sandboxes by status. Only valid when sortBy is createdAt. |
| `tags` | object | No | Filter sandboxes by tag. Format: \"key:value\". Only one tag filter is supported at a time. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "pagination",
    "sandboxes"
  ],
  "properties": {
    "sandboxes": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "This object contains information related to a Vercel NamedSandbox.",
        "required": [
          "createdAt",
          "currentSessionId",
          "name",
          "persistent",
          "status",
          "statusUpdatedAt",
          "updatedAt"
        ],
        "properties": {
          "name": {
            "type": "string",
            "description": "The unique identifier of the sandbox."
          },
          "currentSnapshotId": {
            "type": "string",
            "description": "Current snapshot ID that the named sandbox is pointing to."
          },
          "currentSessionId": {
            "type": "string",
            "description": "Current session ID the sandbox is pointing to."
          },
          "status": {
            "type": "string",
            "description": "The status of the current sandbox.",
            "enum": [
              "running",
              "stopped",
              "stopping"
            ]
          },
          "statusUpdatedAt": {
            "type": "number",
            "description": "The time when the sandbox status was last updated, in milliseconds since the epoch."
          },
          "persistent": {
            "type": "boolean",
            "description": "Whether the sandbox persists its state across restarts via automatic snapshots.",
            "enum": [
              false,
              true
            ]
          },
          "region": {
            "type": "string",
            "description": "The region the sandbox is configured to run in: the region set on the sandbox, otherwise the project-level default, then the platform default. Where a running session actually landed is reported by `session.region`."
          },
          "vcpus": {
            "type": "number",
            "description": "Number of virtual CPUs allocated."
          },
          "memory": {
            "type": "number",
            "description": "Memory allocated in MB."
          },
          "runtime": {
            "type": "string",
            "description": "Runtime identifier."
          },
          "image": {
            "type": "string",
            "description": "Digest-pinned reference of the container image the sandbox was created from, when it was created from an image (\"{repository}@{manifestDigest}\")."
          },
          "timeout": {
            "type": "number",
            "description": "Timeout in milliseconds."
          },
          "snapshotExpiration": {
            "type": "number",
            "description": "Default snapshot expiration time in milliseconds. 0 means no expiration."
          },
          "keepLastSnapshots": {
            "type": "object",
            "description": "Keep-last snapshot configuration.",
            "required": [
              "count",
              "deleteEvicted"
            ]
          },
          "networkPolicy": {
            "type": "object",
            "description": "Network policy configuration.",
            "required": [
              "mode"
            ]
          },
          "totalEgressBytes": {
            "type": "number",
            "description": "Cumulative egress bytes across all sandbox runs."
          },
          "totalIngressBytes": {
            "type": "number",
            "description": "Cumulative ingress bytes across all sandbox runs."
          },
          "totalActiveCpuDurationMs": {
            "type": "number",
            "description": "Cumulative active CPU duration in milliseconds across all sandbox runs."
          },
          "totalDurationMs": {
            "type": "number",
            "description": "Cumulative wall-clock duration in milliseconds across all sandbox runs."
          },
          "cwd": {
            "type": "string",
            "description": "The working directory of the sandbox."
          },
          "tags": {
            "type": "object",
            "description": "Key-value tags attached to the named sandbox."
          },
          "mounts": {
            "type": "object",
            "description": "Key-value pairs of mount path and drive."
          },
          "createdAt": {
            "type": "number",
            "description": "The time when the named sandbox was created, in milliseconds since the epoch."
          },
          "updatedAt": {
            "type": "number",
            "description": "The time when the named sandbox was last updated, in milliseconds since the epoch."
          },
          "expiresAt": {
            "type": "number",
            "description": "The time at which the currently running sandbox will time out, in milliseconds since the epoch. Only present while a session is running."
          }
        }
      }
    },
    "pagination": {
      "type": "object",
      "required": [
        "count",
        "next"
      ],
      "properties": {
        "count": {
          "type": "number"
        },
        "next": {
          "type": "string",
          "nullable": true
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 429: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
