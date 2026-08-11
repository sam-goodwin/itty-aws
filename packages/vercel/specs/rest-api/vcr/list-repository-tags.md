---
title: list-repository-tags
product: vercel
url: /docs/rest-api/vcr/list-repository-tags
canonical_url: "https://vercel.com/docs/rest-api/vcr/list-repository-tags"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-repository-tags on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List repository tags

```http
GET /v1/vcr/repository/{idOrName}/tags
```

List a repository's tags.

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
| `cursor` | string | No |  |
| `sortBy` | string. enum: updatedAt, tag; default: "updatedAt" | No | Field to sort the non-pinned tags by. |
| `sortOrder` | string. enum: asc, desc; default: "desc" | No | Sort direction. Defaults to desc. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "tags"
  ],
  "properties": {
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "imageId",
          "kind",
          "manifestDigest",
          "sizeInBytes",
          "status",
          "tag",
          "updatedAt"
        ],
        "properties": {
          "tag": {
            "type": "string"
          },
          "manifestDigest": {
            "type": "string"
          },
          "imageId": {
            "type": "string"
          },
          "kind": {
            "type": "string",
            "enum": [
              "attestation",
              "index",
              "manifest"
            ]
          },
          "platform": {
            "type": "string"
          },
          "arch": {
            "type": "string"
          },
          "pushedBy": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "preparing",
              "ready",
              "unoptimized",
              null
            ],
            "nullable": true
          },
          "sizeInBytes": {
            "type": "number"
          },
          "createdAt": {
            "type": "string"
          },
          "updatedAt": {
            "type": "string"
          }
        }
      }
    },
    "nextCursor": {
      "type": "string"
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
