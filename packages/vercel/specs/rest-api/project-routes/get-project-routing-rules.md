---
title: get-project-routing-rules
product: vercel
url: /docs/rest-api/project-routes/get-project-routing-rules
canonical_url: "https://vercel.com/docs/rest-api/project-routes/get-project-routing-rules"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-project-routing-rules on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get project routing rules

```http
GET /v1/projects/{projectId}/routes
```

Get the routing rules for a project. Supports searching by name/ID/pattern, filtering by route type, and diffing staged changes against production.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `versionId` | string | No |  |
| `q` | string | No |  |
| `filter` | string. enum: rewrite, redirect, set_status, transform | No |  |
| `diff` | object | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object"
    },
    {
      "type": "object",
      "required": [
        "diffCount",
        "routes",
        "version"
      ],
      "properties": {
        "routes": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "A routing rule with metadata for project-level routing.",
            "required": [
              "id",
              "name",
              "route"
            ]
          }
        },
        "version": {
          "type": "object",
          "description": "A version of routing rules stored in S3.",
          "required": [
            "createdBy",
            "id",
            "lastModified",
            "s3Key"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "Unique identifier for the version."
            },
            "s3Key": {
              "type": "string",
              "description": "The S3 key where the routing rules are stored."
            },
            "lastModified": {
              "type": "number",
              "description": "Timestamp of when this version was last modified."
            },
            "createdBy": {
              "type": "string",
              "description": "The user who created this version."
            },
            "isStaging": {
              "type": "boolean",
              "description": "Whether this version is staged and not yet promoted to production.",
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
            "ruleCount": {
              "type": "number",
              "description": "The number of routing rules in this version."
            },
            "alias": {
              "type": "string",
              "description": "The staging alias for previewing this version."
            }
          }
        },
        "diffCount": {
          "type": "number"
        }
      }
    },
    {
      "type": "object",
      "required": [
        "routes",
        "version"
      ],
      "properties": {
        "routes": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "A routing rule with metadata for project-level routing.",
            "required": [
              "id",
              "name",
              "route"
            ]
          }
        },
        "version": {
          "type": "object",
          "description": "A version of routing rules stored in S3.",
          "required": [
            "createdBy",
            "id",
            "lastModified",
            "s3Key"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "Unique identifier for the version."
            },
            "s3Key": {
              "type": "string",
              "description": "The S3 key where the routing rules are stored."
            },
            "lastModified": {
              "type": "number",
              "description": "Timestamp of when this version was last modified."
            },
            "createdBy": {
              "type": "string",
              "description": "The user who created this version."
            },
            "isStaging": {
              "type": "boolean",
              "description": "Whether this version is staged and not yet promoted to production.",
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
            "ruleCount": {
              "type": "number",
              "description": "The number of routing rules in this version."
            },
            "alias": {
              "type": "string",
              "description": "The staging alias for previewing this version."
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "limit",
        "routes",
        "version"
      ],
      "properties": {
        "routes": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "A routing rule with metadata for project-level routing.",
            "required": [
              "id",
              "name",
              "route"
            ]
          }
        },
        "version": {
          "type": "object",
          "description": "A version of routing rules stored in S3.",
          "required": [
            "createdBy",
            "id",
            "lastModified",
            "s3Key"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "Unique identifier for the version."
            },
            "s3Key": {
              "type": "string",
              "description": "The S3 key where the routing rules are stored."
            },
            "lastModified": {
              "type": "number",
              "description": "Timestamp of when this version was last modified."
            },
            "createdBy": {
              "type": "string",
              "description": "The user who created this version."
            },
            "isStaging": {
              "type": "boolean",
              "description": "Whether this version is staged and not yet promoted to production.",
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
            "ruleCount": {
              "type": "number",
              "description": "The number of routing rules in this version."
            },
            "alias": {
              "type": "string",
              "description": "The staging alias for previewing this version."
            }
          }
        },
        "limit": {
          "type": "object",
          "required": [
            "currentRoutes",
            "maxRoutes"
          ],
          "properties": {
            "maxRoutes": {
              "type": "number"
            },
            "currentRoutes": {
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

- [project-routes endpoints](/docs/rest-api#project-routes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
