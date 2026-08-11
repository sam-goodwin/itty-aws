---
title: purchase-credits
product: vercel
url: /docs/rest-api/billing/purchase-credits
canonical_url: "https://vercel.com/docs/rest-api/billing/purchase-credits"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about purchase-credits on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Purchase credits

```http
POST /v1/billing/buy
```

Purchases credits for a Vercel team using the default payment method on file. The purchase is charged immediately via Stripe invoice. Supported credit types are `v0`, `gateway`, and `agent`. The `amount` field specifies the number of credits to purchase and must be a positive integer. An optional `source` query parameter can be provided to identify the caller. Defaults to `api` if not specified. This is only available for Owner, Member, Developer, Security, and Billing roles for the supplied team.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `source` | string | No | The source of the purchase request. Defaults to `api` if not specified. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "item"
  ],
  "properties": {
    "item": {
      "type": "object",
      "required": [
        "type",
        "creditType",
        "amount"
      ],
      "properties": {
        "type": {
          "type": "string",
          "description": "The type of item to purchase.",
          "enum": [
            "credits"
          ]
        },
        "creditType": {
          "type": "string",
          "description": "The type of credits to purchase.",
          "enum": [
            "v0",
            "gateway",
            "agent"
          ]
        },
        "amount": {
          "type": "integer",
          "description": "The amount of credits to purchase.",
          "minimum": 1
        }
      }
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "checkoutSessionId",
        "checkoutSessionUrl"
      ],
      "properties": {
        "checkoutSessionId": {
          "type": "string"
        },
        "checkoutSessionUrl": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "required": [
        "purchaseIntent"
      ],
      "properties": {
        "purchaseIntent": {
          "type": "object",
          "description": "The created purchase intent",
          "required": [
            "configuration",
            "createdAt",
            "currency",
            "id",
            "ownerId",
            "provider",
            "status",
            "subtotal",
            "tax",
            "total",
            "updatedAt"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "The unique ID of a Purchase Intent. Uses the format `pur_*`"
            },
            "configuration": {},
            "createdAt": {
              "type": "string",
              "description": "The datetime when the Purchase Intent was created."
            },
            "currency": {
              "type": "string",
              "description": "The currency for the purchase intent",
              "enum": [
                "miu",
                "usd"
              ]
            },
            "ownerId": {
              "type": "string",
              "description": "The ID of the owner of the Purchase Intent."
            },
            "provider": {
              "type": "object",
              "required": [
                "resourceId",
                "type"
              ]
            },
            "status": {
              "type": "string",
              "description": "The status of the Purchase Intent.",
              "enum": [
                "failed",
                "pending",
                "succeeded"
              ]
            },
            "subtotal": {
              "type": "string",
              "description": "The subtotal of the Purchase Intent."
            },
            "tax": {
              "type": "string",
              "description": "The tax due on the Purchase Intent."
            },
            "total": {
              "type": "string",
              "description": "The total balance due on the Purchase Intent."
            },
            "updatedAt": {
              "type": "string",
              "description": "The datetime when the Purchase Intent was last updated."
            },
            "dispute": {
              "type": "object",
              "description": "The dispute details, if any.",
              "required": [
                "amount",
                "createdAt",
                "currency",
                "id",
                "providerId",
                "reason",
                "status",
                "updatedAt"
              ]
            },
            "lineItems": {
              "type": "array",
              "description": "The line items that make up the Purchase Intent."
            },
            "metadata": {
              "type": "object",
              "description": "Optional metadata associated with the purchase intent"
            },
            "refund": {
              "type": "string",
              "description": "The amount of the purchase intent that has been refunded"
            },
            "returnUrl": {
              "type": "string",
              "description": "The URL to redirect to after the purchase is complete"
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "orbSubscriptionIntent"
      ],
      "properties": {
        "orbSubscriptionIntent": {
          "type": "object",
          "required": [
            "configuration",
            "createdAt",
            "id",
            "orbSubscriptionId",
            "ownerId",
            "status",
            "updatedAt"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "The ID of the Orb subscription intent with the format `orbsubint_`."
            },
            "configuration": {},
            "createdAt": {
              "type": "string",
              "description": "The ISO 8601 date-time that the intent was created."
            },
            "orbSubscriptionId": {
              "type": "string",
              "description": "The Orb subscription ID this intent is associated with."
            },
            "ownerId": {
              "type": "string",
              "description": "The owner ID for this intent (e.g., team or user ID)."
            },
            "status": {
              "type": "string",
              "description": "The status of the Orb subscription intent.",
              "enum": [
                "failed",
                "pending",
                "succeeded"
              ]
            },
            "updatedAt": {
              "type": "string",
              "description": "The ISO 8601 date-time that the intent was last updated."
            },
            "purchaseIntentId": {
              "type": "string",
              "description": "Optional purchase intent ID if this is associated with a purchase."
            }
          }
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 500: No description

---

## Related

- [billing endpoints](/docs/rest-api#billing)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
