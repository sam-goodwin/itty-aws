---
title: update-a-segment
product: vercel
url: /docs/rest-api/feature-flags/update-a-segment
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/update-a-segment"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-a-segment on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update a segment

```http
PATCH /v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}
```

Update an existing feature flag segment.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |
| `segmentIdOrSlug` | string | Yes | The segment slug |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `withMetadata` | boolean. default: false | No | Whether to include metadata |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "operations": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "action",
          "field",
          "entity",
          "attribute",
          "value"
        ],
        "properties": {
          "action": {
            "type": "string",
            "enum": [
              "add",
              "remove"
            ]
          },
          "field": {
            "type": "string",
            "enum": [
              "include",
              "exclude"
            ]
          },
          "entity": {
            "type": "string"
          },
          "attribute": {
            "type": "string"
          },
          "value": {
            "type": "object",
            "required": [
              "value"
            ]
          }
        }
      }
    },
    "label": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "description": "The data of the segment",
      "properties": {
        "rules": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "conditions",
              "outcome",
              "id"
            ]
          }
        },
        "include": {
          "type": "object",
          "additionalProperties": {
            "type": "object"
          }
        },
        "exclude": {
          "type": "object",
          "additionalProperties": {
            "type": "object"
          }
        }
      }
    },
    "hint": {
      "type": "string"
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
        "data",
        "hint",
        "id",
        "label",
        "projectId",
        "slug",
        "typeName",
        "updatedAt"
      ],
      "properties": {
        "description": {
          "type": "string"
        },
        "createdBy": {
          "type": "string"
        },
        "usedByFlags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "usedBySegments": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "data": {
          "type": "object",
          "properties": {
            "rules": {
              "type": "array"
            },
            "include": {
              "type": "object"
            },
            "exclude": {
              "type": "object"
            }
          }
        },
        "id": {
          "type": "string"
        },
        "label": {
          "type": "string"
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
        "projectId": {
          "type": "string"
        },
        "typeName": {
          "type": "string",
          "enum": [
            "segment"
          ]
        },
        "hint": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "required": [
        "createdAt",
        "data",
        "hint",
        "id",
        "label",
        "projectId",
        "slug",
        "typeName",
        "updatedAt"
      ],
      "properties": {
        "description": {
          "type": "string"
        },
        "createdBy": {
          "type": "string"
        },
        "usedByFlags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "usedBySegments": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "data": {
          "type": "object",
          "properties": {
            "rules": {
              "type": "array"
            },
            "include": {
              "type": "object"
            },
            "exclude": {
              "type": "object"
            }
          }
        },
        "id": {
          "type": "string"
        },
        "label": {
          "type": "string"
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
        "projectId": {
          "type": "string"
        },
        "typeName": {
          "type": "string",
          "enum": [
            "segment"
          ]
        },
        "hint": {
          "type": "string"
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
