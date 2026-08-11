---
title: delete-project-level-redirects
product: vercel
url: /docs/rest-api/bulk-redirects/delete-project-level-redirects
canonical_url: "https://vercel.com/docs/rest-api/bulk-redirects/delete-project-level-redirects"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-project-level-redirects on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete project-level redirects.

```http
DELETE /v1/bulk-redirects
```

Deletes the provided redirects from the latest version of the projects' bulk redirects. Stages a new change with the new redirects and returns the alias for the new version in the response.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "redirects"
  ],
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 256
    },
    "redirects": {
      "type": "array",
      "description": "The redirects to delete. The source of the redirect is used to match the redirect to delete.",
      "items": {
        "type": "string"
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
        "version"
      ],
      "properties": {
        "alias": {
          "type": "string"
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
        }
      }
    },
    {
      "type": "object",
      "required": [
        "alias",
        "version"
      ],
      "properties": {
        "alias": {
          "nullable": true
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
        }
      }
    },
    {
      "type": "object",
      "required": [
        "alias",
        "version"
      ],
      "properties": {
        "alias": {
          "type": "string",
          "nullable": true
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
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 500: No description

---

## Related

- [bulk-redirects endpoints](/docs/rest-api#bulk-redirects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
