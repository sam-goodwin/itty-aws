---
title: get-account-information
product: vercel
url: /docs/rest-api/marketplace/get-account-information
canonical_url: "https://vercel.com/docs/rest-api/marketplace/get-account-information"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-account-information on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Account Information

```http
GET /v1/installations/{integrationConfigurationId}/account
```

Fetches the best account or user’s contact info

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
    "contact",
    "url"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the team the installation is tied to."
    },
    "url": {
      "type": "string",
      "description": "A URL linking to the installation in the Vercel Dashboard."
    },
    "contact": {
      "type": "object",
      "description": "The best contact for the integration, which can change as team members and their roles change.",
      "nullable": true,
      "required": [
        "email"
      ],
      "properties": {
        "email": {
          "type": "string"
        },
        "name": {
          "type": "string"
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
