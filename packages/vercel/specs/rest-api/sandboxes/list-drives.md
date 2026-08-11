---
title: list-drives
product: vercel
url: /docs/rest-api/sandboxes/list-drives
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/list-drives"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-drives on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List drives

```http
GET /v2/sandboxes/drives
```

Retrieves a paginated list of drives belonging to a specific project. Drives are in private beta. Register your interest to get access: https://vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | No | The project ID or name associated with the drives. Required unless using a Vercel OIDC token scoped to a project. |
| `limit` | number. min: 1; max: 50; default: 20 | No | Maximum number of drives to return in the response. Used for pagination. |
| `cursor` | string | No | Opaque pagination cursor from a previous response. |
| `sortBy` | string. enum: createdAt, updatedAt, name; default: "createdAt" | No | Field to sort drives by. |
| `namePrefix` | string | No | Filter drives whose name starts with this prefix. Only valid when sortBy=name. |
| `sortOrder` | string. enum: asc, desc; default: "desc" | No | Sort direction for results. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "drives",
    "pagination"
  ],
  "properties": {
    "drives": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "This object contains information related to a Vercel Sandbox Drive.",
        "required": [
          "createdAt",
          "maxSizeBytes",
          "name",
          "projectId",
          "region",
          "updatedAt"
        ],
        "properties": {
          "name": {
            "type": "string",
            "description": "The unique drive name within the project."
          },
          "projectId": {
            "type": "string",
            "description": "The project that owns the drive."
          },
          "maxSizeBytes": {
            "type": "number",
            "description": "The maximum drive size in bytes."
          },
          "region": {
            "type": "string",
            "description": "The region where the drive is stored."
          },
          "currentSessionId": {
            "type": "string",
            "description": "Current session ID the drive is attached to, if any."
          },
          "currentSandboxName": {
            "type": "string",
            "description": "Current sandbox name the drive is attached to, if any."
          },
          "createdAt": {
            "type": "number",
            "description": "The time when the drive was created, in milliseconds since the epoch."
          },
          "updatedAt": {
            "type": "number",
            "description": "The last time the drive was updated, in milliseconds since the epoch."
          }
        }
      }
    },
    "pagination": {
      "type": "object",
      "required": [
        "count",
        "next"
      ],
      "properties": {
        "count": {
          "type": "number"
        },
        "next": {
          "type": "string",
          "nullable": true
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

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
