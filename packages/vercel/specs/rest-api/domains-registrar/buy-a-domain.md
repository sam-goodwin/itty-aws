---
title: buy-a-domain
product: vercel
url: /docs/rest-api/domains-registrar/buy-a-domain
canonical_url: "https://vercel.com/docs/rest-api/domains-registrar/buy-a-domain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about buy-a-domain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Buy a domain

```http
POST /v1/registrar/domains/{domain}/buy
```

Buy a domain

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
    "autoRenew",
    "years",
    "expectedPrice",
    "contactInformation"
  ],
  "properties": {
    "autoRenew": {
      "type": "boolean",
      "description": "Whether the domain should be auto-renewed before it expires. This can be configured later through the Vercel Dashboard or the [Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain) endpoint."
    },
    "years": {
      "type": "number",
      "description": "The number of years to purchase the domain for."
    },
    "expectedPrice": {
      "type": "number",
      "minimum": 0.01
    },
    "contactInformation": {
      "type": "object",
      "description": "The contact information for the domain. Some TLDs require additional contact information. Use the [Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema) endpoint to retrieve the required fields.",
      "required": [
        "firstName",
        "lastName",
        "email",
        "phone",
        "address1",
        "city",
        "state",
        "zip",
        "country"
      ],
      "properties": {
        "firstName": {
          "type": "string",
          "description": "a non empty string",
          "pattern": "^\\S[\\s\\S]*\\S$|^\\S$|^$",
          "minLength": 1
        },
        "lastName": {
          "type": "string",
          "description": "a non empty string",
          "pattern": "^\\S[\\s\\S]*\\S$|^\\S$|^$",
          "minLength": 1
        },
        "email": {
          "type": "string",
          "description": "A valid RFC 5322 email address",
          "minLength": 1
        },
        "phone": {
          "type": "string",
          "description": "A valid E.164 phone number",
          "pattern": "^(?=(?:\\D*\\d){8,15}$)\\+[1-9]\\d{0,2}\\.?\\d+$",
          "minLength": 1
        },
        "address1": {
          "type": "string",
          "description": "a non empty string",
          "pattern": "^\\S[\\s\\S]*\\S$|^\\S$|^$",
          "minLength": 1
        },
        "address2": {
          "type": "string",
          "description": "a non empty string",
          "pattern": "^\\S[\\s\\S]*\\S$|^\\S$|^$",
          "minLength": 1
        },
        "city": {
          "type": "string",
          "description": "a non empty string",
          "pattern": "^\\S[\\s\\S]*\\S$|^\\S$|^$",
          "minLength": 1
        },
        "state": {
          "type": "string",
          "description": "a non empty string",
          "pattern": "^\\S[\\s\\S]*\\S$|^\\S$|^$",
          "minLength": 1
        },
        "zip": {
          "type": "string",
          "description": "a non empty string",
          "pattern": "^\\S[\\s\\S]*\\S$|^\\S$|^$",
          "minLength": 1
        },
        "country": {
          "type": "string",
          "description": "A valid ISO 3166-1 alpha-2 country code"
        },
        "companyName": {
          "type": "string",
          "description": "a non empty string",
          "pattern": "^\\S[\\s\\S]*\\S$|^\\S$|^$",
          "minLength": 1
        },
        "fax": {
          "type": "string",
          "description": "A valid E.164 phone number",
          "pattern": "^(?=(?:\\D*\\d){8,15}$)\\+[1-9]\\d{0,2}\\.?\\d+$",
          "minLength": 1
        },
        "additional": {
          "type": "object",
          "properties": {}
        }
      }
    },
    "languageCode": {
      "type": "string",
      "description": "The language code for the domain. For punycode domains, this must be provided. The list of supported language codes for a TLD can be retrieved from the [Get TLD](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-tld) endpoint."
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
    "orderId",
    "_links"
  ],
  "properties": {
    "orderId": {
      "type": "string",
      "description": "A valid order ID"
    },
    "_links": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "required": [
          "href",
          "method"
        ],
        "properties": {
          "href": {
            "type": "string"
          },
          "method": {
            "type": "string",
            "enum": [
              "GET",
              "POST",
              "PUT",
              "DELETE",
              "PATCH"
            ]
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
  "anyOf": [
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
      "description": "The total price of the order is too high.",
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
            "order_too_expensive"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "description": "Additional contact information provided for the TLD is invalid.",
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
            "invalid_additional_contact_info"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "description": "Additional contact information is required for the TLD.",
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
            "additional_contact_info_required"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "description": "The expected price passed does not match the actual price.",
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
            "expected_price_mismatch"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "description": "(4 more variants — see OpenAPI spec)"
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
