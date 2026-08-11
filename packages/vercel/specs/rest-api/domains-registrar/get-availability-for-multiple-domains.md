---
title: get-availability-for-multiple-domains
product: vercel
url: /docs/rest-api/domains-registrar/get-availability-for-multiple-domains
canonical_url: "https://vercel.com/docs/rest-api/domains-registrar/get-availability-for-multiple-domains"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-availability-for-multiple-domains on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get availability for multiple domains

```http
POST /v1/registrar/domains/availability
```

Get availability for multiple domains. If the domains are available, they can be purchased using the [Buy a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-a-domain) endpoint or the [Buy multiple domains](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains) endpoint.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No |  |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "domains"
  ],
  "properties": {
    "domains": {
      "type": "array",
      "description": "an array of at most 50 item(s)",
      "items": {
        "type": "string",
        "description": "A valid domain name"
      }
    }
  }
}
```

## Responses

### 200: Success

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "results"
  ],
  "properties": {
    "results": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "domain",
          "available"
        ],
        "properties": {
          "domain": {
            "type": "string",
            "description": "A valid domain name"
          },
          "available": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

### 400: There was something wrong with the request

Content-Type: `application/json`

```json
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
        ],
        "properties": {
          "path": {
            "type": "array",
            "description": "The path to the property where the issue occurred"
          },
          "message": {
            "type": "string",
            "description": "A descriptive message explaining the issue"
          }
        }
      }
    },
    "message": {
      "type": "string"
    }
  }
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
