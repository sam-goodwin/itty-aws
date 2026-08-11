---
title: getdomainsrecordsbyrecordid
product: vercel
url: /docs/rest-api/untagged/getdomainsrecordsbyrecordid
canonical_url: "https://vercel.com/docs/rest-api/untagged/getdomainsrecordsbyrecordid"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about getdomainsrecordsbyrecordid on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# GET /domains/records/{recordId}

```http
GET /domains/records/{recordId}
```

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `recordId` | string | Yes | The unique ID of the DNS record |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "creator",
    "domain",
    "id",
    "name",
    "recordType",
    "type",
    "value"
  ],
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "A",
        "AAAA",
        "ALIAS",
        "CAA",
        "CNAME",
        "HTTPS",
        "MX",
        "NS",
        "SRV",
        "TXT"
      ]
    },
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "value": {
      "type": "string"
    },
    "creator": {
      "type": "string"
    },
    "domain": {
      "type": "string"
    },
    "ttl": {
      "type": "number"
    },
    "comment": {
      "type": "string"
    },
    "recordType": {
      "type": "string",
      "enum": [
        "A",
        "AAAA",
        "ALIAS",
        "CAA",
        "CNAME",
        "HTTPS",
        "MX",
        "NS",
        "SRV",
        "TXT"
      ]
    },
    "createdAt": {
      "type": "number",
      "nullable": true
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

- [Untagged endpoints](/docs/rest-api#untagged)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
