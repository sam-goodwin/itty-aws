---
title: get-global-config-backup
product: vercel
url: /docs/rest-api/global-config/get-global-config-backup
canonical_url: "https://vercel.com/docs/rest-api/global-config/get-global-config-backup"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-global-config-backup on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Global Config backup

```http
GET /v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}
```

Retrieves a specific version of a Global Config from backup storage.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `edgeConfigId` | string | Yes |  |
| `edgeConfigBackupVersionId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
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
      "description": "The object the API responds with when requesting an Edge Config backup",
      "required": [
        "backup",
        "id",
        "lastModified",
        "metadata"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "lastModified": {
          "type": "number"
        },
        "backup": {
          "type": "object",
          "required": [
            "digest",
            "items",
            "slug",
            "updatedAt"
          ],
          "properties": {
            "slug": {
              "type": "string",
              "description": "Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores)."
            },
            "updatedAt": {
              "type": "number"
            },
            "items": {
              "type": "object"
            },
            "digest": {
              "type": "string"
            }
          }
        },
        "metadata": {
          "type": "object",
          "properties": {
            "updatedAt": {
              "type": "string"
            },
            "updatedBy": {
              "type": "string"
            },
            "itemsCount": {
              "type": "number"
            },
            "itemsBytes": {
              "type": "number"
            }
          }
        },
        "user": {
          "type": "object",
          "required": [
            "email",
            "id",
            "username"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "backup",
        "id",
        "lastModified",
        "metadata",
        "user"
      ],
      "properties": {
        "user": {
          "type": "object",
          "required": [
            "email",
            "id",
            "username"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          }
        },
        "id": {
          "type": "string"
        },
        "lastModified": {
          "type": "number"
        },
        "backup": {
          "type": "object",
          "required": [
            "digest",
            "items",
            "slug",
            "updatedAt"
          ],
          "properties": {
            "slug": {
              "type": "string",
              "description": "Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores)."
            },
            "updatedAt": {
              "type": "number"
            },
            "items": {
              "type": "object"
            },
            "digest": {
              "type": "string"
            }
          }
        },
        "metadata": {
          "type": "object",
          "properties": {
            "updatedAt": {
              "type": "string"
            },
            "updatedBy": {
              "type": "string"
            },
            "itemsCount": {
              "type": "number"
            },
            "itemsBytes": {
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

- [global-config endpoints](/docs/rest-api#global-config)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
