---
title: list-snapshots
product: vercel
url: /docs/rest-api/sandboxes/list-snapshots
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/list-snapshots"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-snapshots on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List snapshots

```http
GET /v2/sandboxes/snapshots
```

Retrieves a paginated list of snapshots for a specific project.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `project` | string | No | The unique identifier or name of the project to list snapshots for. |
| `name` | string. maxLength: 128; pattern: `^[a-zA-Z0-9_-]+$` | No | Name for the sandbox. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores). |
| `limit` | number. min: 1; max: 50; default: 20 | No | Maximum number of snapshots to return in the response. Used for pagination. |
| `cursor` | string | No | Opaque pagination cursor from a previous response. |
| `sortOrder` | string. enum: asc, desc; default: "desc" | No | Sort direction for results by creation time. |
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
        "pagination",
        "snapshots"
      ],
      "properties": {
        "snapshots": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "This object contains information related to a Snapshot of a Vercel Sandbox session (v2 API).",
            "required": [
              "createdAt",
              "id",
              "lastUsedAt",
              "sizeBytes",
              "sourceSessionId",
              "status",
              "updatedAt"
            ]
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
  ]
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
