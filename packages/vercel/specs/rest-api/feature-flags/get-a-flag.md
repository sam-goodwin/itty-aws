---
title: get-a-flag
product: vercel
url: /docs/rest-api/feature-flags/get-a-flag
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/get-a-flag"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-flag on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a flag

```http
GET /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}
```

Retrieve a specific feature flag by its ID or slug.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |
| `flagIdOrSlug` | string | Yes | The flag id or name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `ifMatch` | string | No | Etag to match, can be used interchangeably with the `if-match` header |
| `withMetadata` | boolean | No | Whether to include metadata in the response |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

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
    },
    "metadata": {
      "type": "object",
      "properties": {
        "creator": {
          "type": "object",
          "required": [
            "id",
            "name"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

### 304: No description

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [feature-flags endpoints](/docs/rest-api#feature-flags)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
