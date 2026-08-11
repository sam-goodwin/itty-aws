---
title: delete-a-check
product: vercel
url: /docs/rest-api/checks-v2/delete-a-check
canonical_url: "https://vercel.com/docs/rest-api/checks-v2/delete-a-check"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-check on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a check

```http
DELETE /v2/projects/{projectIdOrName}/checks/{checkId}
```

Delete an existing check and all of its runs.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes |  |
| `checkId` | string | Yes |  |


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
  "type": "object",
  "required": [
    "success"
  ],
  "properties": {
    "success": {
      "type": "boolean",
      "enum": [
        true
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

### 500: No description

---

## Related

- [checks-v2 endpoints](/docs/rest-api#checks-v2)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
