---
title: delete-rule
product: vercel
url: /docs/rest-api/ai-gateway/delete-rule
canonical_url: "https://vercel.com/docs/rest-api/ai-gateway/delete-rule"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-rule on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete rule

```http
DELETE /v1/ai-gateway/rules
```

Delete a routing rule (soft delete)

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `ruleId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 204: No description

Content-Type: `application/json`

```json
{
  "nullable": true
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

- [ai-gateway endpoints](/docs/rest-api#ai-gateway)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
