---
title: get-integration-resources
product: vercel
url: /docs/rest-api/marketplace/get-integration-resources
canonical_url: "https://vercel.com/docs/rest-api/marketplace/get-integration-resources"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-integration-resources on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Integration Resources

```http
GET /v1/installations/{integrationConfigurationId}/resources
```

Get all resources for a given installation ID.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "resources"
  ],
  "properties": {
    "resources": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "internalId",
          "name",
          "partnerId",
          "productId"
        ],
        "properties": {
          "partnerId": {
            "type": "string",
            "description": "The ID provided by the partner for the given resource"
          },
          "internalId": {
            "type": "string",
            "description": "The ID assigned by Vercel for the given resource"
          },
          "name": {
            "type": "string",
            "description": "The name of the resource as it is recorded in Vercel"
          },
          "status": {
            "type": "string",
            "description": "The current status of the resource",
            "enum": [
              "error",
              "onboarding",
              "pending",
              "ready",
              "resumed",
              "suspended",
              "uninstalled"
            ]
          },
          "productId": {
            "type": "string",
            "description": "The ID of the product the resource is derived from"
          },
          "protocolSettings": {
            "type": "object",
            "description": "Any settings provided for the resource to support its product's protocols"
          },
          "notification": {
            "type": "object",
            "description": "The notification, if set, displayed to the user when viewing the resource in Vercel",
            "required": [
              "level",
              "title"
            ]
          },
          "billingPlanId": {
            "type": "string",
            "description": "The ID of the billing plan the resource is subscribed to, if applicable"
          },
          "metadata": {
            "type": "object",
            "description": "The configured metadata for the resource as defined by its product's Metadata Schema"
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
