---
title: list-focus-contract-commitments
product: vercel
url: /docs/rest-api/billing/list-focus-contract-commitments
canonical_url: "https://vercel.com/docs/rest-api/billing/list-focus-contract-commitments"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-focus-contract-commitments on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List FOCUS contract commitments

```http
GET /v1/billing/contract-commitments
```

Returns commitment allocations per contract period in FOCUS v1.3 JSONL format for a specified Vercel team. The response is streamed as newline-delimited JSON (JSONL). This endpoint is only applicable to Enterprise Vercel customers. An empty response is returned for non-Enterprise (Pro/Flex) customers.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/jsonl`

```json
{
  "type": "object",
  "description": "Contract commitment information describing terms within a contract. New in FOCUS v1.3 - tracks commitment terms separate from cost/usage rows. For Vercel: - Pro: $20 monthly spend commitment - Enterprise: MIU allocation per period (usage commitment)",
  "required": [
    "BillingCurrency",
    "ContractCommitmentCategory",
    "ContractCommitmentId",
    "ContractCommitmentPeriodEnd",
    "ContractCommitmentPeriodStart",
    "ContractCommitmentType",
    "ContractCommitmentUnit",
    "ContractId",
    "ContractPeriodEnd",
    "ContractPeriodStart"
  ],
  "properties": {
    "ContractCommitmentCategory": {
      "type": "string",
      "description": "Highest-level classification of the contract commitment. 'Spend' for Pro ($20/month), 'Usage' for Enterprise (MIU allocation).",
      "enum": [
        "Spend",
        "Usage"
      ]
    },
    "ContractCommitmentCost": {
      "type": "number",
      "description": "Monetary value of the contract commitment (in BillingCurrency). Required when ContractCommitmentCategory is 'Spend'. For Pro: 20 (USD)"
    },
    "ContractCommitmentDescription": {
      "type": "string",
      "description": "Self-contained summary of the contract commitment's terms"
    },
    "ContractCommitmentId": {
      "type": "string",
      "description": "Unique identifier for a single contract term within a contract. Maps to specific commitment period or allocation ID."
    },
    "ContractCommitmentPeriodStart": {
      "type": "string",
      "description": "Inclusive start of the commitment term period (ISO 8601 UTC)"
    },
    "ContractCommitmentPeriodEnd": {
      "type": "string",
      "description": "Exclusive end of the commitment term period (ISO 8601 UTC)"
    },
    "ContractCommitmentQuantity": {
      "type": "number",
      "description": "Amount associated with the commitment (in ContractCommitmentUnit). Required when ContractCommitmentCategory is 'Usage'. For Enterprise: MIU allocation amount."
    },
    "ContractCommitmentType": {
      "type": "string",
      "description": "Service-provider-assigned name identifying the commitment type. 'Pro' or 'Enterprise' for Vercel."
    },
    "ContractCommitmentUnit": {
      "type": "string",
      "description": "Measurement unit for ContractCommitmentQuantity. 'MIUs' for Enterprise, 'USD' for Pro spend commitments."
    },
    "ContractId": {
      "type": "string",
      "description": "Service-provider-assigned identifier for a contract. Maps to Orb Subscription ID for Vercel."
    },
    "ContractPeriodStart": {
      "type": "string",
      "description": "Inclusive start of the overall contract period (ISO 8601 UTC)"
    },
    "ContractPeriodEnd": {
      "type": "string",
      "description": "Exclusive end of the overall contract period (ISO 8601 UTC)"
    },
    "BillingCurrency": {
      "type": "string"
    }
  }
}
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [billing endpoints](/docs/rest-api#billing)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
