---
title: update-a-flag
product: vercel
url: /docs/rest-api/feature-flags/update-a-flag
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/update-a-flag"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-a-flag on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update a flag

```http
PATCH /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}
```

Update an existing feature flag. This endpoint supports partial updates, allowing you to modify specific properties like variants, environments, or state without providing the full flag configuration.

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


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "createdBy": {
      "type": "string",
      "description": "The user who created this patch"
    },
    "message": {
      "type": "string",
      "description": "Additional message for this version"
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

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
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
              "type": "array"
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
              "type": "array"
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
            ]
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
    },
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
              "type": "array"
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
              "type": "array"
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
            ]
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
              ]
            }
          }
        }
      }
    }
  ]
}
```

### 304: No description

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
