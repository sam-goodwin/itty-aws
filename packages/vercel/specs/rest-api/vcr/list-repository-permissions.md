---
title: list-repository-permissions
product: vercel
url: /docs/rest-api/vcr/list-repository-permissions
canonical_url: "https://vercel.com/docs/rest-api/vcr/list-repository-permissions"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-repository-permissions on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List repository permissions

```http
GET /v1/vcr/repository/{idOrName}/permissions
```

List the teams a VCR repository is shared with.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string. maxLength: 255 | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `limit` | integer. min: 1; max: 100 | No |  |
| `cursor` | string. maxLength: 1024 | No | Opaque pagination cursor returned by a previous list response. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "A paginated list of Vercel Container Registry repository permissions.",
  "required": [
    "permissions"
  ],
  "properties": {
    "permissions": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "A team's access grant to a Vercel Container Registry repository.",
        "required": [
          "createdAt",
          "repositoryId",
          "teamId",
          "teamSlug"
        ],
        "properties": {
          "repositoryId": {
            "type": "string",
            "description": "Identifier of the repository the permission grants access to."
          },
          "teamId": {
            "type": "string",
            "description": "Identifier of the team that is granted access to the repository."
          },
          "teamSlug": {
            "type": "string",
            "description": "Slug of the team that is granted access to the repository."
          },
          "createdAt": {
            "type": "string",
            "description": "ISO 8601 timestamp of when the permission was created."
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
