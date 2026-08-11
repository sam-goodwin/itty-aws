---
title: replacedomainsbydomainrecords
product: vercel
url: /docs/rest-api/untagged/replacedomainsbydomainrecords
canonical_url: "https://vercel.com/docs/rest-api/untagged/replacedomainsbydomainrecords"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about replacedomainsbydomainrecords on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# PUT /domains/{domain}/records

```http
PUT /domains/{domain}/records
```

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | The domain name |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "recordIds"
  ],
  "properties": {
    "recordIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
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

### 415: No description

---

## Related

- [Untagged endpoints](/docs/rest-api#untagged)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
