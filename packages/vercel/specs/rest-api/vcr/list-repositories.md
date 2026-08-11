---
title: list-repositories
product: vercel
url: /docs/rest-api/vcr/list-repositories
canonical_url: "https://vercel.com/docs/rest-api/vcr/list-repositories"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-repositories on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List repositories

```http
GET /v1/vcr/repository
```

List container registry repositories for a project.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `limit` | integer. min: 1; max: 1000 | No |  |
| `cursor` | string. maxLength: 1024 | No | Opaque pagination cursor returned by a previous list response. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "A paginated list of Vercel Container Registry repositories.",
  "required": [
    "repositories"
  ],
  "properties": {
    "repositories": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "A Vercel Container Registry repository.",
        "required": [
          "createdAt",
          "id",
          "name",
          "projectId",
          "public",
          "updatedAt"
        ],
        "properties": {
          "id": {
            "type": "string",
            "description": "Unique identifier of the repository."
          },
          "projectId": {
            "type": "string",
            "description": "Identifier of the project the repository belongs to."
          },
          "name": {
            "type": "string",
            "description": "Name of the repository."
          },
          "public": {
            "type": "boolean",
            "description": "Whether the repository is public. Images in public repositories can be pulled by anyone. Defaults to `false` (private).",
            "enum": [
              false,
              true
            ]
          },
          "createdAt": {
            "type": "string",
            "description": "ISO 8601 timestamp of when the repository was created."
          },
          "updatedAt": {
            "type": "string",
            "description": "ISO 8601 timestamp of when the repository was last updated."
          }
        }
      }
    },
    "nextCursor": {
      "type": "string",
      "description": "Cursor to fetch the next page of results, when more are available."
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [vcr endpoints](/docs/rest-api#vcr)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
