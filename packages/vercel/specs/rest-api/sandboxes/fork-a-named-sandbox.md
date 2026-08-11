---
title: fork-a-named-sandbox
product: vercel
url: /docs/rest-api/sandboxes/fork-a-named-sandbox
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/fork-a-named-sandbox"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about fork-a-named-sandbox on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Fork a named sandbox

```http
POST /v2/sandboxes/{name}/fork
```

Forks a named sandbox, creating a new named sandbox from the source's configuration. Resources, timeout, ports, tags, network policy, mounts, Connect network, image, persistence, snapshot settings and — unlike the SDK-side fork — environment variables are copied from the source automatically (`interactive` is not). When the source has a snapshot the fork starts from it; otherwise it starts from the source's runtime/image. Any field provided in the request body overrides the value copied from the source.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | string. maxLength: 128; pattern: `^[a-zA-Z0-9_-]+$` | Yes | Name of the source sandbox to fork. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string. maxLength: 128 | No | The ID of the project the source sandbox belongs to. Required unless authenticating with an OIDC token. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "networkPolicy": {
      "oneOf": [
        {
          "type": "object",
          "description": "Network access policy for the sandbox.\\n    Controls which external hosts the sandbox can communicate with.\\n    Use \\\"allow-all\\\" mode to allow all traffic, \\\"deny-all\\\" to block all traffic or \\\"custom\\\" to provide specific rules.",
          "required": [
            "mode"
          ],
          "properties": {
            "mode": {
              "type": "string",
              "description": "The network access policy mode. Use \\\"allow-all\\\" to permit all outbound traffic. Use \\\"deny-all\\\" to block all outbound traffic. Use \\\"custom\\\" to specify explicit allow/deny rules.",
              "enum": [
                "allow-all",
                "deny-all",
                "custom",
                "default-allow",
                "default-deny"
              ]
            },
            "allowedDomains": {
              "type": "array",
              "description": "List of domain names the sandbox is allowed to connect to. Only applies when mode is \\\"custom\\\". Supports wildcard patterns (e.g., \\\"*.example.com\\\" matches all subdomains)."
            },
            "allowedCIDRs": {
              "type": "array",
              "description": "List of IP address ranges (in CIDR notation) the sandbox is allowed to connect to. Traffic to these addresses bypasses domain-based restrictions."
            },
            "deniedCIDRs": {
              "type": "array",
              "description": "List of IP address ranges (in CIDR notation) the sandbox is blocked from connecting to. These rules take precedence over all allowed rules."
            },
            "injectionRules": {
              "type": "array",
              "description": "HTTP header injection rules for outgoing requests matching specific domains. Traffic to matching domains will be intercepted instead of proxied through encrypted connections."
            }
          }
        },
        {
          "type": "object",
          "properties": {
            "allow": {},
            "subnets": {
              "type": "object"
            }
          }
        }
      ]
    },
    "resources": {
      "type": "object",
      "description": "Resources to define the VM",
      "properties": {
        "vcpus": {
          "type": "integer",
          "description": "The number of virtual CPUs to allocate to the sandbox. Must be 1, or an even number.",
          "minimum": 1,
          "default": 2
        },
        "memory": {
          "type": "integer",
          "description": "The amount of memory in megabytes to allocate to the sandbox. Must equal vcpus * 2048.",
          "minimum": 2048
        }
      }
    },
    "ports": {
      "type": "array",
      "description": "List of ports to expose from the sandbox. Each port will be accessible via a unique URL. Maximum of 15 ports can be exposed.",
      "items": {
        "type": "integer",
        "description": "A port number to expose from the sandbox. Must be between 1024 and 65535.",
        "minimum": 1024,
        "maximum": 65535
      }
    },
    "image": {
      "type": "string",
      "description": "Image to use for the sandbox.",
      "maxLength": 255
    },
    "timeout": {
      "type": "integer",
      "description": "Maximum duration in milliseconds that the sandbox can run before being automatically stopped.",
      "minimum": 1000
    },
    "env": {
      "type": "object",
      "description": "Default environment variables for the sandbox. These are inherited by all commands unless overridden.",
      "default": {},
      "additionalProperties": {
        "type": "string"
      }
    },
    "mounts": {
      "type": "object",
      "description": "List of drives to mount to the sandbox at the provided path.",
      "additionalProperties": {
        "type": "object",
        "required": [
          "drive"
        ],
        "properties": {
          "drive": {
            "type": "string",
            "description": "Name of the drive to mount. The drive must already exist.",
            "pattern": "^[a-zA-Z0-9_-]+$",
            "maxLength": 64
          },
          "mode": {
            "type": "string",
            "description": "Mount the drive read-only or read-write.",
            "enum": [
              "read-only",
              "read-write"
            ],
            "default": "read-write"
          }
        }
      }
    },
    "name": {
      "type": "string",
      "description": "Name for the forked sandbox. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores). A random name is generated when omitted.",
      "pattern": "^[a-zA-Z0-9_-]+$",
      "maxLength": 128
    },
    "persistent": {
      "type": "boolean",
      "description": "Whether the sandbox persists its state across restarts via automatic snapshots. Defaults to the source sandbox setting."
    },
    "snapshotExpiration": {
      "description": "Default snapshot expiration time in milliseconds. Set to 0 to disable expiration. When set, this value is used as the default expiration for all snapshots created for this sandbox.",
      "oneOf": [
        {},
        {
          "type": "integer"
        }
      ]
    },
    "keepLastSnapshots": {
      "type": "object",
      "description": "Protect the N most recent snapshots with different expiration/deletion behavior.",
      "required": [
        "count"
      ],
      "properties": {
        "count": {
          "type": "integer",
          "description": "Number of most recent snapshots to keep.",
          "minimum": 1,
          "maximum": 10
        },
        "expiration": {
          "description": "Expiration time in milliseconds for kept snapshots. Falls back to snapshotExpiration.",
          "oneOf": [
            {},
            {
              "type": "integer"
            }
          ]
        },
        "deleteEvicted": {
          "type": "boolean",
          "description": "Whether to immediately delete evicted snapshots. Defaults to true."
        }
      }
    },
    "tags": {
      "type": "object",
      "description": "Key-value tags to associate with the sandbox. Maximum 5 tags.",
      "additionalProperties": {
        "type": "string",
        "maxLength": 256
      }
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "routes",
    "sandbox",
    "session"
  ],
  "properties": {
    "sandbox": {
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
          ],
          "properties": {
            "count": {
              "type": "number",
              "description": "Number of most recent snapshots to keep."
            },
            "expiration": {
              "type": "number",
              "description": "Expiration time in milliseconds for kept snapshots."
            },
            "deleteEvicted": {
              "type": "boolean",
              "description": "Whether to immediately delete evicted snapshots.",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "networkPolicy": {
          "type": "object",
          "description": "Network policy configuration.",
          "required": [
            "mode"
          ],
          "properties": {
            "mode": {
              "type": "string",
              "enum": [
                "allow-all",
                "custom",
                "default-allow",
                "default-deny",
                "deny-all"
              ]
            },
            "allowedDomains": {
              "type": "array"
            },
            "allowedCIDRs": {
              "type": "array"
            },
            "deniedCIDRs": {
              "type": "array"
            }
          }
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
          "description": "Key-value tags attached to the named sandbox.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "mounts": {
          "type": "object",
          "description": "Key-value pairs of mount path and drive.",
          "additionalProperties": {
            "type": "object",
            "description": "Key-value pairs of mount path and drive.",
            "required": [
              "drive"
            ]
          }
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

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 422: No description

### 429: The concurrency limit has been exceeded.

### 500: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
