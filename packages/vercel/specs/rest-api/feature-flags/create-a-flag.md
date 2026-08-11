---
title: create-a-flag
product: vercel
url: /docs/rest-api/feature-flags/create-a-flag
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/create-a-flag"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-flag on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a flag

```http
PUT /v1/projects/{projectIdOrName}/feature-flags/flags
```

Create a new feature flag for a project. The flag must have a unique slug within the project and specify its kind (boolean, string, number, or json).

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |


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
  "required": [
    "slug",
    "kind",
    "environments"
  ],
  "properties": {
    "slug": {
      "type": "string",
      "description": "A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores",
      "pattern": "^[a-zA-Z0-9_-]{1,512}$"
    },
    "kind": {
      "description": "The kind of flag",
      "enum": [
        "boolean",
        "string",
        "number",
        "json"
      ]
    },
    "variants": {
      "type": "array",
      "description": "The variants of the flag",
      "items": {
        "type": "object",
        "required": [
          "id",
          "value"
        ],
        "properties": {
          "id": {
            "type": "string",
            "description": "The id of the variant"
          },
          "label": {
            "type": "string",
            "description": "A label for the variant"
          },
          "description": {
            "type": "string",
            "description": "A description of the variant"
          },
          "value": {}
        }
      }
    },
    "environments": {
      "type": "object",
      "description": "The configuration for the flag in different environments",
      "additionalProperties": {
        "type": "object",
        "required": [
          "active",
          "pausedOutcome",
          "rules",
          "fallthrough"
        ],
        "properties": {
          "active": {
            "type": "boolean"
          },
          "reuse": {
            "type": "object",
            "description": "Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration",
            "required": [
              "active",
              "environment"
            ]
          },
          "targets": {
            "type": "object",
            "description": "Allows assigning targets to variants while bypassing the flag's rules"
          },
          "pausedOutcome": {
            "type": "object",
            "required": [
              "type",
              "variantId"
            ]
          },
          "rules": {
            "type": "array"
          },
          "fallthrough": {},
          "revision": {
            "type": "number",
            "description": "The revision of the environment config"
          }
        }
      }
    },
    "seed": {
      "type": "number",
      "description": "A random seed to prevent split points in different flags from having the same targets",
      "minimum": 0,
      "maximum": 100000
    },
    "description": {
      "type": "string",
      "description": "A description of the flag"
    },
    "state": {
      "type": "string",
      "enum": [
        "active",
        "archived"
      ]
    },
    "maintainerIds": {
      "type": "array",
      "description": "The user ids of the maintainers of the flag",
      "items": {
        "type": "string",
        "maxLength": 24
      }
    },
    "permanent": {
      "type": "boolean",
      "description": "Whether this flag is marked as permanent, indicating it should not be removed"
    },
    "tags": {
      "type": "array",
      "description": "Tags for categorizing the flag",
      "items": {
        "type": "string",
        "maxLength": 64
      }
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
    "createdAt",
    "createdBy",
    "environments",
    "id",
    "kind",
    "ownerId",
    "projectId",
    "revision",
    "seed",
    "slug",
    "state",
    "typeName",
    "updatedAt",
    "variants"
  ],
  "properties": {
    "description": {
      "type": "string"
    },
    "maintainerIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "permanent": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "experiment": {
      "type": "object",
      "required": [
        "allocationUnit",
        "primaryMetrics",
        "status"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "numVariants": {
          "type": "number"
        },
        "surfaceArea": {
          "type": "string"
        },
        "stickyRequirement": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "layer": {
          "type": "string"
        },
        "guardrailMetrics": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "directionality",
              "metricType",
              "metricUnit",
              "name"
            ]
          }
        },
        "hypothesis": {
          "type": "string"
        },
        "device": {
          "type": "string",
          "enum": [
            "android",
            "desktop",
            "ios",
            "mweb"
          ]
        },
        "controlVariantId": {
          "type": "string"
        },
        "startedAt": {
          "type": "number"
        },
        "endedAt": {
          "type": "number"
        },
        "decision": {
          "type": "string"
        },
        "decisionReason": {
          "type": "string"
        },
        "duration": {
          "type": "number"
        },
        "durationUnit": {
          "type": "string",
          "enum": [
            "days",
            "exposures"
          ]
        },
        "allocationPercent": {
          "type": "number"
        },
        "allocationUnit": {
          "type": "string",
          "enum": [
            "cookieId",
            "userId",
            "visitorId"
          ]
        },
        "primaryMetrics": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "directionality",
              "metricType",
              "metricUnit",
              "name"
            ]
          }
        },
        "status": {
          "type": "string",
          "enum": [
            "closed",
            "draft",
            "paused",
            "running"
          ]
        }
      }
    },
    "updatedBy": {
      "type": "string"
    },
    "variants": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "id": {
      "type": "string"
    },
    "environments": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "required": [
          "active",
          "fallthrough",
          "pausedOutcome",
          "rules"
        ],
        "properties": {
          "reuse": {
            "type": "object",
            "required": [
              "active",
              "environment"
            ]
          },
          "targets": {
            "type": "object"
          },
          "revision": {
            "type": "number"
          },
          "pausedOutcome": {
            "type": "object",
            "required": [
              "type",
              "variantId"
            ]
          },
          "fallthrough": {},
          "active": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "rules": {
            "type": "array"
          }
        }
      }
    },
    "kind": {
      "type": "string",
      "enum": [
        "boolean",
        "json",
        "number",
        "string"
      ]
    },
    "revision": {
      "type": "number"
    },
    "seed": {
      "type": "number"
    },
    "state": {
      "type": "string",
      "enum": [
        "active",
        "archived"
      ]
    },
    "slug": {
      "type": "string"
    },
    "createdAt": {
      "type": "number"
    },
    "updatedAt": {
      "type": "number"
    },
    "createdBy": {
      "type": "string"
    },
    "ownerId": {
      "type": "string"
    },
    "projectId": {
      "type": "string"
    },
    "typeName": {
      "type": "string",
      "enum": [
        "flag"
      ]
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

---

## Related

- [feature-flags endpoints](/docs/rest-api#feature-flags)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
