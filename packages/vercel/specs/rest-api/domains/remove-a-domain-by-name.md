---
title: remove-a-domain-by-name
product: vercel
url: /docs/rest-api/domains/remove-a-domain-by-name
canonical_url: "https://vercel.com/docs/rest-api/domains/remove-a-domain-by-name"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about remove-a-domain-by-name on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Remove a domain by name

```http
DELETE /v6/domains/{domain}
```

Delete a previously registered domain name from Vercel. Deleting a domain will automatically remove any associated aliases.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | The name of the domain. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Successful response removing a domain.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "uid"
  ],
  "properties": {
    "uid": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [domains endpoints](/docs/rest-api#domains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
