---
title: check-registry-api-version-support
product: vercel
url: /docs/rest-api/vcr/check-registry-api-version-support
canonical_url: "https://vercel.com/docs/rest-api/vcr/check-registry-api-version-support"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about check-registry-api-version-support on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Check registry API version support

```http
GET /v2/
```

GET /v2/ Docker Registry v2 version check. Returns a 401 challenge when no credentials are provided, prompting the Docker client to send auth. With valid credentials, returns 200 so the client can proceed.

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object"
}
```

### 400: No description

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

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
