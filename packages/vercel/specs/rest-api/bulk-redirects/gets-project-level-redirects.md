---
title: gets-project-level-redirects
product: vercel
url: /docs/rest-api/bulk-redirects/gets-project-level-redirects
canonical_url: "https://vercel.com/docs/rest-api/bulk-redirects/gets-project-level-redirects"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about gets-project-level-redirects on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Gets project-level redirects.

```http
GET /v1/bulk-redirects
```

Get the version history for a project's bulk redirects

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `versionId` | string | No |  |
| `q` | string | No |  |
| `diff` | object | No |  |
| `page` | integer. min: 1 | No |  |
| `per_page` | integer. min: 10; max: 250 | No |  |
| `sort_by` | string. enum: source, destination, statusCode | No |  |
| `sort_order` | string. enum: asc, desc | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "additionalProperties": true
    },
    {
      "type": "object",
      "required": [
        "pagination",
        "redirects",
        "version"
      ],
      "properties": {
        "version": {
          "type": "object",
          "required": [
            "createdBy",
            "id",
            "key",
            "lastModified"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "The unique identifier for the version."
            },
            "key": {
              "type": "string",
              "description": "The key of the version. The key may be duplicated across versions if the contents are the same as a different version."
            },
            "lastModified": {
              "type": "number"
            },
            "createdBy": {
              "type": "string"
            },
            "name": {
              "type": "string",
              "description": "Optional name for the version. If not provided, defaults to an ISO timestamp string."
            },
            "isStaging": {
              "type": "boolean",
              "description": "Whether this version has not been promoted to production yet and is not serving end users.",
              "enum": [
                false,
                true
              ]
            },
            "isLive": {
              "type": "boolean",
              "description": "Whether this version is currently live in production.",
              "enum": [
                false,
                true
              ]
            },
            "redirectCount": {
              "type": "number",
              "description": "The number of redirects in this version."
            },
            "alias": {
              "type": "string",
              "description": "The staging link for previewing redirects in this version."
            }
          }
        },
        "redirects": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "destination",
              "source"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "required": [
            "numPages",
            "page",
            "per_page"
          ],
          "properties": {
            "page": {
              "type": "number"
            },
            "per_page": {
              "type": "number"
            },
            "numPages": {
              "type": "number"
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "pagination",
        "redirects"
      ],
      "properties": {
        "redirects": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "destination",
              "source"
            ]
          }
        },
        "version": {
          "type": "object",
          "required": [
            "createdBy",
            "id",
            "key",
            "lastModified"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "The unique identifier for the version."
            },
            "key": {
              "type": "string",
              "description": "The key of the version. The key may be duplicated across versions if the contents are the same as a different version."
            },
            "lastModified": {
              "type": "number"
            },
            "createdBy": {
              "type": "string"
            },
            "name": {
              "type": "string",
              "description": "Optional name for the version. If not provided, defaults to an ISO timestamp string."
            },
            "isStaging": {
              "type": "boolean",
              "description": "Whether this version has not been promoted to production yet and is not serving end users.",
              "enum": [
                false,
                true
              ]
            },
            "isLive": {
              "type": "boolean",
              "description": "Whether this version is currently live in production.",
              "enum": [
                false,
                true
              ]
            },
            "redirectCount": {
              "type": "number",
              "description": "The number of redirects in this version."
            },
            "alias": {
              "type": "string",
              "description": "The staging link for previewing redirects in this version."
            }
          }
        },
        "pagination": {
          "type": "object",
          "required": [
            "numPages",
            "page",
            "per_page"
          ],
          "properties": {
            "page": {
              "type": "number"
            },
            "per_page": {
              "type": "number"
            },
            "numPages": {
              "type": "number"
            }
          }
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [bulk-redirects endpoints](/docs/rest-api#bulk-redirects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
