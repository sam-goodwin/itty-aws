---
title: delete-an-existing-experimentation-item
product: vercel
url: /docs/rest-api/marketplace/delete-an-existing-experimentation-item
canonical_url: "https://vercel.com/docs/rest-api/marketplace/delete-an-existing-experimentation-item"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-an-existing-experimentation-item on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete an existing experimentation item

```http
DELETE /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}
```

Delete an existing experimentation item

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `resourceId` | string | Yes |  |
| `itemId` | string | Yes |  |


## Responses

### 204: The item was deleted

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
