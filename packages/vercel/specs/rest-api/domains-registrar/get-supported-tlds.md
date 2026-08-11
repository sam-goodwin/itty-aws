---
title: get-supported-tlds
product: vercel
url: /docs/rest-api/domains-registrar/get-supported-tlds
canonical_url: "https://vercel.com/docs/rest-api/domains-registrar/get-supported-tlds"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-supported-tlds on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get supported TLDs

```http
GET /v1/registrar/tlds/supported
```

Get a list of TLDs supported by Vercel

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No |  |


## Responses

### 200: A list of the TLDs supported by Vercel.

Content-Type: `application/json`

```json
{
  "type": "array",
  "description": "A list of the TLDs supported by Vercel.",
  "items": {
    "type": "string",
    "description": "A valid TLD name"
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
