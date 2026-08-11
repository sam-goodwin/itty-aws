---
title: update-nameservers-for-a-domain
product: vercel
url: /docs/rest-api/domains-registrar/update-nameservers-for-a-domain
canonical_url: "https://vercel.com/docs/rest-api/domains-registrar/update-nameservers-for-a-domain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-nameservers-for-a-domain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update nameservers for a domain

```http
PATCH /v1/registrar/domains/{domain}/nameservers
```

Update the nameservers for a domain. Pass an empty array to use Vercel's default nameservers.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes |  |


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
    "nameservers"
  ],
  "properties": {
    "nameservers": {
      "type": "array",
      "items": {
        "type": "string",
        "description": "A valid nameserver"
      }
    }
  }
}
```

## Responses

### 204: Success

### 400: There was something wrong with the request

Content-Type: `application/json`

```json
{
  "anyOf": [
    {
      "type": "object",
      "description": "The domain is not registered with Vercel.",
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
            "domain_not_registered"
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
    },
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
            "forbidden"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    }
  ]
}
```

### 404: The domain was not found in our system.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "The domain was not found in our system.",
  "required": [
    "status",
    "code",
    "message"
  ],
  "properties": {
    "status": {
      "type": "number",
      "enum": [
        404
      ]
    },
    "code": {
      "type": "string",
      "enum": [
        "domain_not_found"
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
