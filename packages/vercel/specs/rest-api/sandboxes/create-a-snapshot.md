---
title: create-a-snapshot
product: vercel
url: /docs/rest-api/sandboxes/create-a-snapshot
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/create-a-snapshot"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-snapshot on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a snapshot

```http
POST /v2/sandboxes/sessions/{sessionId}/snapshot
```

Creates a point-in-time snapshot of a running session's filesystem. Snapshots can be used to quickly restore a session to a previous state or to create new sessions with pre-configured environments. The session must be running and able to accept commands for a snapshot to be created. The session will be terminated after the snapshot is created.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `sessionId` | string | Yes | The unique identifier of the session to snapshot. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "expiration": {
      "description": "The number of milliseconds after which the snapshot will expire and be deleted. Use 0 for no expiration.",
      "oneOf": [
        {},
        {
          "type": "integer"
        }
      ]
    }
  }
}
```

## Responses

### 201: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "session",
    "snapshot"
  ],
  "properties": {
    "snapshot": {
      "type": "object",
      "description": "This object contains information related to a Snapshot of a Vercel Sandbox session (v2 API).",
      "required": [
        "createdAt",
        "id",
        "lastUsedAt",
        "sizeBytes",
        "sourceSessionId",
        "status",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "The unique identifier of the snapshot."
        },
        "sourceSessionId": {
          "type": "string",
          "description": "The unique identifier of the session from which the snapshot was created."
        },
        "region": {
          "type": "string",
          "description": "The region where the snapshot is stored."
        },
        "status": {
          "type": "string",
          "description": "The status of the snapshot.",
          "enum": [
            "created",
            "deleted",
            "failed"
          ]
        },
        "sizeBytes": {
          "type": "number",
          "description": "The size of the snapshot in bytes."
        },
        "expiresAt": {
          "type": "number",
          "description": "The time when the snapshot will expire, in milliseconds since the epoch. If not set, the snapshot does not have any expiration."
        },
        "createdAt": {
          "type": "number",
          "description": "The time when the snapshot was created, in milliseconds since the epoch."
        },
        "updatedAt": {
          "type": "number",
          "description": "The last time the snapshot was updated, in milliseconds since the epoch."
        },
        "lastUsedAt": {
          "type": "number",
          "description": "The last time the snapshot was used (e.g. to resume or create a sandbox), in milliseconds since the epoch. Falls back to `createdAt` for older snapshots that predate this field."
        },
        "creationMethod": {
          "type": "string",
          "description": "The method used to create the snapshot.",
          "enum": [
            "automatic",
            "manual"
          ]
        },
        "parentId": {
          "type": "string",
          "description": "The unique identifier of the parent snapshot, if this snapshot was created from another snapshot."
        }
      }
    },
    "session": {
      "type": "object",
      "description": "This object contains information related to a Vercel Sandbox Session. v2 endpoints return \"session\" instead of \"sandbox\" as the response wrapper key.",
      "required": [
        "createdAt",
        "cwd",
        "id",
        "memory",
        "projectId",
        "region",
        "requestedAt",
        "runtime",
        "sourceSandboxName",
        "status",
        "timeout",
        "updatedAt",
        "vcpus"
      ],
      "properties": {
        "sourceSandboxName": {
          "type": "string",
          "description": "The name of the source sandbox."
        },
        "projectId": {
          "type": "string",
          "description": "The unique identifier of the project associated with this session."
        },
        "id": {
          "type": "string",
          "description": "The unique identifier of the sandbox."
        },
        "memory": {
          "type": "number",
          "description": "Memory allocated to this sandbox in MB."
        },
        "vcpus": {
          "type": "number",
          "description": "Number of vCPUs allocated to this sandbox."
        },
        "region": {
          "type": "string",
          "description": "The region where the sandbox is hosted."
        },
        "runtime": {
          "type": "string",
          "description": "The runtime of the sandbox."
        },
        "timeout": {
          "type": "number",
          "description": "The maximum amount of time the sandbox will run for in milliseconds."
        },
        "status": {
          "type": "string",
          "description": "The status of the sandbox.",
          "enum": [
            "aborted",
            "failed",
            "pending",
            "running",
            "snapshotting",
            "stopped",
            "stopping"
          ]
        },
        "requestedAt": {
          "type": "number",
          "description": "The time when the sandbox was requested, in milliseconds since the epoch."
        },
        "startedAt": {
          "type": "number",
          "description": "The time when the sandbox was started, in milliseconds since the epoch."
        },
        "cwd": {
          "type": "string",
          "description": "The working directory of the sandbox."
        },
        "requestedStopAt": {
          "type": "number",
          "description": "The time when the sandbox was requested to stop, in milliseconds since the epoch."
        },
        "stoppedAt": {
          "type": "number",
          "description": "The time when the sandbox was stopped, in milliseconds since the epoch."
        },
        "abortedAt": {
          "type": "number",
          "description": "The time when the sandbox was aborted, in milliseconds since the epoch."
        },
        "duration": {
          "type": "number",
          "description": "The duration of the sandbox in milliseconds."
        },
        "sourceSnapshotId": {
          "type": "string",
          "description": "The unique identifier of the snapshot associated with this sandbox, if any."
        },
        "snapshottedAt": {
          "type": "number",
          "description": "The time when a snapshot was requested, in milliseconds since the epoch."
        },
        "createdAt": {
          "type": "number",
          "description": "The time when the sandbox was created, in milliseconds since the epoch."
        },
        "updatedAt": {
          "type": "number",
          "description": "The last time the sandbox was updated, in milliseconds since the epoch."
        },
        "networkPolicy": {
          "type": "object",
          "description": "The network policy applied to this sandbox, if any.",
          "required": [
            "mode"
          ],
          "properties": {
            "mode": {
              "type": "string",
              "description": "The network policy mode. - 'allow-all': All traffic is allowed. - 'deny-all': All traffic is blocked. - 'custom': Traffic is controlled by explicit allow/deny rules.",
              "enum": [
                "allow-all",
                "custom",
                "deny-all"
              ]
            },
            "allowedDomains": {
              "type": "array",
              "description": "List of domain names the sandbox is allowed to connect to. Supports wildcard patterns (e.g., \"*.vercel.com\" matches all subdomains)."
            },
            "allowedCIDRs": {
              "type": "array",
              "description": "List of IP address ranges (in CIDR notation) the sandbox is allowed to connect to."
            },
            "deniedCIDRs": {
              "type": "array",
              "description": "List of IP address ranges (in CIDR notation) the sandbox is blocked from connecting to. These rules take precedence over all allowed rules."
            },
            "injectionRules": {
              "type": "array",
              "description": "HTTP header injection rules for outgoing requests matching specific domains."
            }
          }
        },
        "activeCpuDurationMs": {
          "type": "number",
          "description": "The amount of CPU time the sandbox consumed, if available, in milliseconds. This value is only available once the sandbox is stopped, and only if it stopped successfully."
        },
        "networkTransfer": {
          "type": "object",
          "description": "The quantity of data transfered to and from the sandbox, in bytes. This value is only available once the sandbox is stopped, and only if it stopped successfully.",
          "required": [
            "egress",
            "ingress"
          ],
          "properties": {
            "ingress": {
              "type": "number"
            },
            "egress": {
              "type": "number"
            }
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 422: No description

### 429: No description

### 500: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
