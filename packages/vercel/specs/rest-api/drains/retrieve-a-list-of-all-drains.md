---
title: retrieve-a-list-of-all-drains
product: vercel
url: /docs/rest-api/drains/retrieve-a-list-of-all-drains
canonical_url: "https://vercel.com/docs/rest-api/drains/retrieve-a-list-of-all-drains"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-a-list-of-all-drains on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve a list of all Drains

```http
GET /v1/drains
```

Allows to retrieve the list of Drains of the authenticated team.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | No |  |
| `includeMetadata` | boolean. default: false | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "drains"
  ],
  "properties": {
    "drains": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "createdAt",
              "delivery",
              "id",
              "name",
              "ownerId",
              "schemas",
              "source",
              "updatedAt"
            ]
          }
        },
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "createdAt",
              "delivery",
              "id",
              "name",
              "ownerId",
              "schemas",
              "source",
              "updatedAt"
            ]
          }
        }
      ]
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

- [drains endpoints](/docs/rest-api#drains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
