---
title: get-member-information
product: vercel
url: /docs/rest-api/marketplace/get-member-information
canonical_url: "https://vercel.com/docs/rest-api/marketplace/get-member-information"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-member-information on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Member Information

```http
GET /v1/installations/{integrationConfigurationId}/member/{memberId}
```

Returns the member role and other information for a given member ID ("user_id" claim in the SSO OIDC token).

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `memberId` | string | Yes |  |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "id",
    "role"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "role": {
      "type": "string",
      "description": "\"The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles.\"",
      "enum": [
        "ADMIN",
        "USER"
      ]
    },
    "globalUserId": {
      "type": "string"
    },
    "userEmail": {
      "type": "string"
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
