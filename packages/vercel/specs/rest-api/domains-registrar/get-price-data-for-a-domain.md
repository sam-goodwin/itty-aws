---
title: get-price-data-for-a-domain
product: vercel
url: /docs/rest-api/domains-registrar/get-price-data-for-a-domain
canonical_url: "https://vercel.com/docs/rest-api/domains-registrar/get-price-data-for-a-domain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-price-data-for-a-domain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get price data for a domain

```http
GET /v1/registrar/domains/{domain}/price
```

Get price data for a specific domain

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `years` | string | No | The number of years to get the price for. If not provided, the minimum number of years for the TLD will be used. |
| `teamId` | string | No |  |


## Responses

### 200: Success

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "years",
    "purchasePrice",
    "renewalPrice",
    "transferPrice"
  ],
  "properties": {
    "years": {
      "type": "number"
    },
    "purchasePrice": {
      "anyOf": [
        {
          "type": "number",
          "minimum": 0.01
        },
        {
          "type": "string"
        }
      ]
    },
    "renewalPrice": {
      "anyOf": [
        {
          "type": "number",
          "minimum": 0.01
        },
        {
          "type": "string"
        }
      ]
    },
    "transferPrice": {
      "anyOf": [
        {
          "type": "number",
          "minimum": 0.01
        },
        {
          "type": "string"
        }
      ]
    }
  }
}
```

### 400: There was something wrong with the request

Content-Type: `application/json`

```json
{
  "anyOf": [
    {
      "type": "object",
      "required": [
        "status",
        "code",
        "message"
      ],
      "properties": {
        "status": {
          "type": "number",
          "enum": [
            400
          ]
        },
        "code": {
          "type": "string",
          "enum": [
            "bad_request"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "description": "The domain name (excluding the TLD) is too short.",
      "required": [
        "status",
        "code",
        "message"
      ],
      "properties": {
        "status": {
          "type": "number",
          "enum": [
            400
          ]
        },
        "code": {
          "type": "string",
          "enum": [
            "domain_too_short"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "description": "The TLD is not currently supported.",
      "required": [
        "status",
        "code",
        "message"
      ],
      "properties": {
        "status": {
          "type": "number",
          "enum": [
            400
          ]
        },
        "code": {
          "type": "string",
          "enum": [
            "tld_not_supported"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "description": "The request did not match the expected schema",
      "required": [
        "issues",
        "message"
      ],
      "properties": {
        "issues": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "Represents an error encountered while parsing a value to match the schema",
            "required": [
              "path",
              "message"
            ]
          }
        },
        "message": {
          "type": "string"
        }
      }
    }
  ]
}
```

### 401: Unauthorized

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "status",
    "code",
    "message"
  ],
  "properties": {
    "status": {
      "type": "number",
      "enum": [
        401
      ]
    },
    "code": {
      "type": "string",
      "enum": [
        "unauthorized"
      ]
    },
    "message": {
      "type": "string"
    },
    "reason": {
      "type": "string"
    }
  }
}
```

### 403: NotAuthorizedForScope

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "status",
    "code",
    "message"
  ],
  "properties": {
    "status": {
      "type": "number",
      "enum": [
        403
      ]
    },
    "code": {
      "type": "string",
      "enum": [
        "not_authorized_for_scope"
      ]
    },
    "message": {
      "type": "string"
    }
  }
}
```

### 429: TooManyRequests

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "status",
    "code",
    "message",
    "retryAfter",
    "limit"
  ],
  "properties": {
    "status": {
      "type": "number",
      "enum": [
        429
      ]
    },
    "code": {
      "type": "string",
      "enum": [
        "too_many_requests"
      ]
    },
    "message": {
      "type": "string"
    },
    "retryAfter": {
      "type": "object",
      "required": [
        "value",
        "str"
      ],
      "properties": {
        "value": {
          "type": "number"
        },
        "str": {
          "type": "string"
        }
      }
    },
    "limit": {
      "type": "object",
      "required": [
        "total",
        "remaining",
        "reset"
      ],
      "properties": {
        "total": {
          "type": "number"
        },
        "remaining": {
          "type": "number"
        },
        "reset": {
          "type": "number"
        }
      }
    }
  }
}
```

### 500: InternalServerError

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "status",
    "code",
    "message"
  ],
  "properties": {
    "status": {
      "type": "number",
      "enum": [
        500
      ]
    },
    "code": {
      "type": "string",
      "enum": [
        "internal_server_error"
      ]
    },
    "message": {
      "type": "string"
    }
  }
}
```

---

## Related

- [domains-registrar endpoints](/docs/rest-api#domains-registrar)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
