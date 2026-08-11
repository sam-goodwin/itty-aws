---
title: create-event
product: vercel
url: /docs/rest-api/marketplace/create-event
canonical_url: "https://vercel.com/docs/rest-api/marketplace/create-event"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-event on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create Event

```http
POST /v1/installations/{integrationConfigurationId}/events
```

Partner notifies Vercel of any changes made to an Installation or a Resource. Vercel is expected to use `list-resources` and other read APIs to get the new state.<br/> <br/> `resource.updated` event should be dispatched when any state of a resource linked to Vercel is modified by the partner.<br/> `installation.updated` event should be dispatched when an installation's billing plan is changed via the provider instead of Vercel.<br/> <br/> Resource update use cases: <br/> <br/> - The user renames a database in the partner’s application. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource in Vercel’s datastores.<br/> - A resource has been suspended due to a lack of use. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource's status in Vercel's datastores.<br/>

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
    "event"
  ],
  "properties": {
    "event": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "installation.updated"
              ]
            },
            "billingPlanId": {
              "type": "string",
              "description": "The installation-level billing plan ID"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type",
            "resourceId"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "resource.updated"
              ]
            },
            "productId": {
              "type": "string",
              "description": "Partner-provided product slug or id"
            },
            "resourceId": {
              "type": "string",
              "description": "Partner provided resource ID"
            }
          }
        }
      ]
    }
  }
}
```

## Responses

### 201: No description

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

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
