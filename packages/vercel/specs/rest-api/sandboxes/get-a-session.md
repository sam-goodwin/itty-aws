---
title: get-a-session
product: vercel
url: /docs/rest-api/sandboxes/get-a-session
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/get-a-session"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-session on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a session

```http
GET /v2/sandboxes/sessions/{sessionId}
```

Retrieves detailed information about a specific session, including its current status, resource configuration, and exposed routes.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `sessionId` | string | Yes | The unique identifier of the session to retrieve. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The session was retrieved successfully.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "routes",
    "session"
  ],
  "properties": {
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
    },
    "routes": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "This object represents a public route in a Vercel Sandbox.",
        "required": [
          "port",
          "subdomain",
          "url"
        ],
        "properties": {
          "url": {
            "type": "string",
            "description": "A public URL to access the corresponding port in the Sandbox."
          },
          "port": {
            "type": "number",
            "description": "The user port number that the route is mapped to."
          },
          "subdomain": {
            "type": "string",
            "description": "The subdomain assigned to this route."
          },
          "system": {
            "type": "boolean",
            "description": "Whether the route is reserved by the system (e.g. for internal use).",
            "enum": [
              true
            ]
          }
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

### 500: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
