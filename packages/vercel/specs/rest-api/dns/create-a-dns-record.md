---
title: create-a-dns-record
product: vercel
url: /docs/rest-api/dns/create-a-dns-record
canonical_url: "https://vercel.com/docs/rest-api/dns/create-a-dns-record"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-dns-record on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a DNS record

```http
POST /v2/domains/{domain}/records
```

Creates a DNS record for a domain.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | The domain used to create the DNS record. |


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
  "required": [
    "type"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "The type of record, it could be one of the valid DNS records.",
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
        "NS"
      ]
    }
  },
  "anyOf": [
    {
      "type": "object",
      "required": [
        "type",
        "value",
        "name"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "A subdomain name or an empty string for the root domain."
        },
        "type": {
          "type": "string",
          "description": "Must be of type `A`.",
          "enum": [
            "A"
          ]
        },
        "ttl": {
          "type": "number",
          "description": "The TTL value. Must be a number between 60 and 2147483647. Default value is 60.",
          "minimum": 60,
          "maximum": 2147483647
        },
        "value": {
          "type": "string",
          "description": "The record value must be a valid IPv4 address.",
          "format": "ipv4"
        },
        "comment": {
          "type": "string",
          "description": "A comment to add context on what this DNS record is for",
          "maxLength": 500
        }
      }
    },
    {
      "type": "object",
      "required": [
        "type",
        "value",
        "name"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "A subdomain name or an empty string for the root domain."
        },
        "type": {
          "type": "string",
          "description": "Must be of type `AAAA`.",
          "enum": [
            "AAAA"
          ]
        },
        "ttl": {
          "type": "number",
          "description": "The TTL value. Must be a number between 60 and 2147483647. Default value is 60.",
          "minimum": 60,
          "maximum": 2147483647
        },
        "value": {
          "type": "string",
          "description": "An AAAA record pointing to an IPv6 address.",
          "format": "ipv6"
        },
        "comment": {
          "type": "string",
          "description": "A comment to add context on what this DNS record is for",
          "maxLength": 500
        }
      }
    },
    {
      "type": "object",
      "required": [
        "type",
        "value",
        "name"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "A subdomain name or an empty string for the root domain."
        },
        "type": {
          "type": "string",
          "description": "Must be of type `ALIAS`.",
          "enum": [
            "ALIAS"
          ]
        },
        "ttl": {
          "type": "number",
          "description": "The TTL value. Must be a number between 60 and 2147483647. Default value is 60.",
          "minimum": 60,
          "maximum": 2147483647
        },
        "value": {
          "type": "string",
          "description": "An ALIAS virtual record pointing to a hostname resolved to an A record on server side."
        },
        "comment": {
          "type": "string",
          "description": "A comment to add context on what this DNS record is for",
          "maxLength": 500
        }
      }
    },
    {
      "type": "object",
      "required": [
        "type",
        "value",
        "name"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "A subdomain name or an empty string for the root domain."
        },
        "type": {
          "type": "string",
          "description": "Must be of type `CAA`.",
          "enum": [
            "CAA"
          ]
        },
        "ttl": {
          "type": "number",
          "description": "The TTL value. Must be a number between 60 and 2147483647. Default value is 60.",
          "minimum": 60,
          "maximum": 2147483647
        },
        "value": {
          "type": "string",
          "description": "A CAA record to specify which Certificate Authorities (CAs) are allowed to issue certificates for the domain."
        },
        "comment": {
          "type": "string",
          "description": "A comment to add context on what this DNS record is for",
          "maxLength": 500
        }
      }
    },
    {
      "type": "object",
      "required": [
        "type",
        "name"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "A subdomain name or an empty string for the root domain."
        },
        "type": {
          "type": "string",
          "description": "Must be of type `CNAME`.",
          "enum": [
            "CNAME"
          ]
        },
        "ttl": {
          "type": "number",
          "description": "The TTL value. Must be a number between 60 and 2147483647. Default value is 60.",
          "minimum": 60,
          "maximum": 2147483647
        },
        "value": {
          "type": "string",
          "description": "A CNAME record mapping to another domain name."
        },
        "comment": {
          "type": "string",
          "description": "A comment to add context on what this DNS record is for",
          "maxLength": 500
        }
      }
    },
    {
      "description": "(5 more variants — see OpenAPI spec)"
    }
  ]
}
```

## Responses

### 200: Successful response showing the uid of the newly created DNS record.

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "uid",
        "updated"
      ],
      "properties": {
        "uid": {
          "type": "string"
        },
        "updated": {
          "type": "number"
        }
      }
    },
    {
      "type": "object",
      "required": [
        "uid"
      ],
      "properties": {
        "uid": {
          "type": "string",
          "description": "The id of the newly created DNS record"
        }
      }
    }
  ]
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
