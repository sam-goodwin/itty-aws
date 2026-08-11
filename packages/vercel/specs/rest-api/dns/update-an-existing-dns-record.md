---
title: update-an-existing-dns-record
product: vercel
url: /docs/rest-api/dns/update-an-existing-dns-record
canonical_url: "https://vercel.com/docs/rest-api/dns/update-an-existing-dns-record"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-an-existing-dns-record on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update an existing DNS record

```http
PATCH /v1/domains/records/{recordId}
```

Updates an existing DNS record for a domain name.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `recordId` | string | Yes | The id of the DNS record |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the DNS record",
      "nullable": true
    },
    "value": {
      "type": "string",
      "description": "The value of the DNS record",
      "nullable": true
    },
    "type": {
      "type": "string",
      "description": "The type of the DNS record",
      "enum": [
        "A",
        "AAAA",
        "ALIAS",
        "CAA",
        "CNAME",
        "HTTPS",
        "MX",
        "SRV",
        "TXT",
        "NS",
        null
      ],
      "maxLength": 255,
      "nullable": true
    },
    "ttl": {
      "type": "integer",
      "description": "The Time to live (TTL) value of the DNS record",
      "minimum": 60,
      "maximum": 2147483647,
      "nullable": true
    },
    "mxPriority": {
      "type": "integer",
      "description": "The MX priority value of the DNS record",
      "nullable": true
    },
    "srv": {
      "type": "object",
      "nullable": true,
      "required": [
        "target",
        "weight",
        "port",
        "priority"
      ],
      "properties": {
        "target": {
          "type": "string",
          "maxLength": 255,
          "nullable": true
        },
        "weight": {
          "type": "integer",
          "nullable": true
        },
        "port": {
          "type": "integer",
          "nullable": true
        },
        "priority": {
          "type": "integer",
          "nullable": true
        }
      }
    },
    "https": {
      "type": "object",
      "nullable": true,
      "required": [
        "priority",
        "target"
      ],
      "properties": {
        "priority": {
          "type": "integer",
          "nullable": true
        },
        "target": {
          "type": "string",
          "maxLength": 255,
          "nullable": true
        },
        "params": {
          "type": "string",
          "nullable": true
        }
      }
    },
    "comment": {
      "type": "string",
      "description": "A comment to add context on what this DNS record is for",
      "maxLength": 500
    }
  }
}
```

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
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "record",
        "record-sys"
      ]
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

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [dns endpoints](/docs/rest-api#dns)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
