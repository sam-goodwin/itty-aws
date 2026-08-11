---
title: delete-a-dns-record
product: vercel
url: /docs/rest-api/dns/delete-a-dns-record
canonical_url: "https://vercel.com/docs/rest-api/dns/delete-a-dns-record"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-dns-record on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a DNS record

```http
DELETE /v2/domains/{domain}/records/{recordId}
```

Removes an existing DNS record from a domain name.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes |  |
| `recordId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Successful response by removing the specified DNS record.

Content-Type: `application/json`

```json
{
  "type": "object"
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [dns endpoints](/docs/rest-api#dns)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
