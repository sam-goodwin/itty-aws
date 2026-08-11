---
title: delete-an-alias
product: vercel
url: /docs/rest-api/aliases/delete-an-alias
canonical_url: "https://vercel.com/docs/rest-api/aliases/delete-an-alias"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-an-alias on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete an Alias

```http
DELETE /v2/aliases/{aliasId}
```

Delete an Alias with the specified ID.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `aliasId` | object | Yes | The ID or alias that will be removed |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The alias was successfully removed

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "status"
  ],
  "properties": {
    "status": {
      "type": "string",
      "enum": [
        "SUCCESS"
      ]
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: The alias was not found

### 410: No description

---

## Related

- [aliases endpoints](/docs/rest-api#aliases)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
