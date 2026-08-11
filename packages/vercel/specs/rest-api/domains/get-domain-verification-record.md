---
title: get-domain-verification-record
product: vercel
url: /docs/rest-api/domains/get-domain-verification-record
canonical_url: "https://vercel.com/docs/rest-api/domains/get-domain-verification-record"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-domain-verification-record on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Domain Verification Record

```http
GET /v9/domains/{domain}/verification
```

Get the TXT verification record needed to claim ownership of a domain for the authenticated team. The caller must add this TXT record to `_vercel.{domain}` in their DNS configuration, then call POST /domains/:domain/claim to complete the ownership transfer.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | The domain name to get the verification record for |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Returns the TXT record needed to verify domain ownership.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "txtRecord",
    "verificationDomain"
  ],
  "properties": {
    "txtRecord": {
      "type": "string"
    },
    "verificationDomain": {
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

- [domains endpoints](/docs/rest-api#domains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
