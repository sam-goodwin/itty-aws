---
title: get-invoice
product: vercel
url: /docs/rest-api/marketplace/get-invoice
canonical_url: "https://vercel.com/docs/rest-api/marketplace/get-invoice"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-invoice on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Invoice

```http
GET /v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}
```

Get Invoice details and status for a given invoice ID.<br/> <br/> See [Billing Events with Webhooks documentation](https://vercel.com/docs/integrations/create-integration/marketplace-api#working-with-billing-events-through-webhooks) on how to receive invoice events. This endpoint is used to retrieve the invoice details.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `invoiceId` | string | Yes |  |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "created",
    "invoiceDate",
    "invoiceId",
    "items",
    "period",
    "state",
    "total",
    "updated"
  ],
  "properties": {
    "test": {
      "type": "boolean",
      "description": "Whether the invoice is in the testmode (no real transaction created).",
      "enum": [
        false,
        true
      ]
    },
    "invoiceId": {
      "type": "string",
      "description": "Vercel Marketplace Invoice ID."
    },
    "externalId": {
      "type": "string",
      "description": "Partner-supplied Invoice ID, if applicable."
    },
    "state": {
      "type": "string",
      "description": "Invoice state.",
      "enum": [
        "draft",
        "invoiced",
        "notpaid",
        "overdue",
        "paid",
        "pending",
        "refund_requested",
        "refunded",
        "scheduled"
      ]
    },
    "invoiceNumber": {
      "type": "string",
      "description": "User-readable invoice number."
    },
    "invoiceDate": {
      "type": "string",
      "description": "Invoice date. ISO 8601 timestamp."
    },
    "period": {
      "type": "object",
      "description": "Subscription period for this billing cycle. ISO 8601 timestamps.",
      "required": [
        "end",
        "start"
      ],
      "properties": {
        "start": {
          "type": "string"
        },
        "end": {
          "type": "string"
        }
      }
    },
    "paidAt": {
      "type": "string",
      "description": "Moment the invoice was paid. ISO 8601 timestamp."
    },
    "refundedAt": {
      "type": "string",
      "description": "Most recent moment the invoice was refunded. ISO 8601 timestamp."
    },
    "memo": {
      "type": "string",
      "description": "Additional memo for the invoice."
    },
    "items": {
      "type": "array",
      "description": "Invoice items.",
      "items": {
        "type": "object",
        "description": "Invoice items.",
        "required": [
          "billingPlanId",
          "name",
          "price",
          "quantity",
          "total",
          "units"
        ],
        "properties": {
          "billingPlanId": {
            "type": "string",
            "description": "Partner's billing plan ID."
          },
          "resourceId": {
            "type": "string",
            "description": "Partner's resource ID. If not specified, indicates installation-wide item."
          },
          "start": {
            "type": "string",
            "description": "Start and end are only needed if different from the period's start/end. ISO 8601 timestamp."
          },
          "end": {
            "type": "string",
            "description": "Start and end are only needed if different from the period's start/end. ISO 8601 timestamp."
          },
          "name": {
            "type": "string",
            "description": "Invoice item name."
          },
          "details": {
            "type": "string",
            "description": "Additional item details."
          },
          "price": {
            "type": "string",
            "description": "Item price. A dollar-based decimal string."
          },
          "quantity": {
            "type": "number",
            "description": "Item quantity."
          },
          "units": {
            "type": "string",
            "description": "Units for item's quantity."
          },
          "total": {
            "type": "string",
            "description": "Item total. A dollar-based decimal string."
          }
        }
      }
    },
    "discounts": {
      "type": "array",
      "description": "Invoice discounts.",
      "items": {
        "type": "object",
        "description": "Invoice discounts.",
        "required": [
          "amount",
          "billingPlanId",
          "name"
        ],
        "properties": {
          "billingPlanId": {
            "type": "string",
            "description": "Partner's billing plan ID."
          },
          "resourceId": {
            "type": "string",
            "description": "Partner's resource ID. If not specified, indicates installation-wide discount."
          },
          "start": {
            "type": "string",
            "description": "Start and end are only needed if different from the period's start/end. ISO 8601 timestamp."
          },
          "end": {
            "type": "string",
            "description": "Start and end are only needed if different from the period's start/end. ISO 8601 timestamp."
          },
          "name": {
            "type": "string",
            "description": "Discount name."
          },
          "details": {
            "type": "string",
            "description": "Additional discount details."
          },
          "amount": {
            "type": "string",
            "description": "Discount amount. A dollar-based decimal string."
          }
        }
      }
    },
    "total": {
      "type": "string",
      "description": "Invoice total amount. A dollar-based decimal string."
    },
    "refundReason": {
      "type": "string",
      "description": "The reason for refund. Only applicable for states \"refunded\" or \"refund_request\"."
    },
    "refundTotal": {
      "type": "string",
      "description": "Refund amount. Only applicable for states \"refunded\" or \"refund_request\". A dollar-based decimal string."
    },
    "created": {
      "type": "string",
      "description": "System creation date. ISO 8601 timestamp."
    },
    "updated": {
      "type": "string",
      "description": "System update date. ISO 8601 timestamp."
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 429: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
