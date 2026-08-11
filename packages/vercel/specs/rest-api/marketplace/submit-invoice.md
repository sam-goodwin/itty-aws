---
title: submit-invoice
product: vercel
url: /docs/rest-api/marketplace/submit-invoice
canonical_url: "https://vercel.com/docs/rest-api/marketplace/submit-invoice"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about submit-invoice on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Submit Invoice

```http
POST /v1/installations/{integrationConfigurationId}/billing/invoices
```

This endpoint allows the partner to submit an invoice to Vercel. The invoice is created in Vercel's billing system and sent to the customer. Depending on the type of billing plan, the invoice can be sent at a time of signup, at the start of the billing period, or at the end of the billing period.<br/> <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request. <br/> There are several limitations to the invoice submission:<br/> <br/> 1. A resource can only be billed once per the billing period and the billing plan.<br/> 2. The billing plan used to bill the resource must have been active for this resource during the billing period.<br/> 3. The billing plan used must be a subscription plan.<br/> 4. The interim usage data must be sent hourly for all types of subscriptions. See [Send subscription billing and usage data](#send-subscription-billing-and-usage-data) API on how to send interim billing and usage data.<br/> 5. If provided, `externalId` must be unique for the installation.<br/>

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "invoiceDate",
    "period",
    "items"
  ],
  "properties": {
    "externalId": {
      "type": "string",
      "description": "Partner-provided invoice identifier. If provided, it must be unique for this installation."
    },
    "invoiceDate": {
      "type": "string",
      "description": "Invoice date. Must be within the period's start and end.",
      "format": "date-time"
    },
    "memo": {
      "type": "string",
      "description": "Additional memo for the invoice."
    },
    "period": {
      "type": "object",
      "description": "Subscription period for this billing cycle.",
      "required": [
        "start",
        "end"
      ],
      "properties": {
        "start": {
          "type": "string",
          "format": "date-time"
        },
        "end": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "billingPlanId",
          "name",
          "price",
          "quantity",
          "units",
          "total"
        ],
        "properties": {
          "resourceId": {
            "type": "string",
            "description": "Partner's resource ID."
          },
          "billingPlanId": {
            "type": "string",
            "description": "Partner's billing plan ID."
          },
          "start": {
            "type": "string",
            "description": "Start and end are only needed if different from the period's start/end.",
            "format": "date-time"
          },
          "end": {
            "type": "string",
            "description": "Start and end are only needed if different from the period's start/end.",
            "format": "date-time"
          },
          "name": {
            "type": "string"
          },
          "details": {
            "type": "string"
          },
          "price": {
            "type": "string",
            "description": "Currency amount as a decimal string.",
            "pattern": "^[0-9]+(\\.[0-9]+)?$"
          },
          "quantity": {
            "type": "number"
          },
          "units": {
            "type": "string"
          },
          "total": {
            "type": "string",
            "description": "Currency amount as a decimal string.",
            "pattern": "^[0-9]+(\\.[0-9]+)?$"
          }
        }
      }
    },
    "discounts": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "billingPlanId",
          "name",
          "amount"
        ],
        "properties": {
          "resourceId": {
            "type": "string",
            "description": "Partner's resource ID."
          },
          "billingPlanId": {
            "type": "string",
            "description": "Partner's billing plan ID."
          },
          "start": {
            "type": "string",
            "description": "Start and end are only needed if different from the period's start/end.",
            "format": "date-time"
          },
          "end": {
            "type": "string",
            "description": "Start and end are only needed if different from the period's start/end.",
            "format": "date-time"
          },
          "name": {
            "type": "string"
          },
          "details": {
            "type": "string"
          },
          "amount": {
            "type": "string",
            "description": "Currency amount as a decimal string.",
            "pattern": "^[0-9]+(\\.[0-9]+)?$"
          }
        }
      }
    },
    "final": {
      "type": "boolean",
      "description": "Set this to `true` if this is the final invoice for the installation. Can only be set when the installation is pending deletion."
    },
    "test": {
      "type": "object",
      "description": "Test mode",
      "properties": {
        "validate": {
          "type": "boolean"
        },
        "result": {
          "type": "string",
          "enum": [
            "paid",
            "notpaid",
            "overdue"
          ]
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
  "type": "object",
  "properties": {
    "invoiceId": {
      "type": "string"
    },
    "test": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "validationErrors": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
