---
title: invoice-actions
product: vercel
url: /docs/rest-api/marketplace/invoice-actions
canonical_url: "https://vercel.com/docs/rest-api/marketplace/invoice-actions"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about invoice-actions on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Invoice Actions

```http
POST /v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}/actions
```

This endpoint allows the partner to request a refund for an invoice to Vercel. The invoice is created using the [Submit Invoice API](#submit-invoice-api).

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `invoiceId` | string | Yes |  |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "action",
        "reason",
        "total"
      ],
      "properties": {
        "action": {
          "type": "string",
          "enum": [
            "refund"
          ]
        },
        "reason": {
          "type": "string",
          "description": "Refund reason."
        },
        "total": {
          "type": "string",
          "description": "The total amount to be refunded. Must be less than or equal to the total amount of the invoice.",
          "pattern": "^[0-9]+(\\.[0-9]+)?$"
        }
      }
    }
  ]
}
```

## Responses

### 204: No description

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
