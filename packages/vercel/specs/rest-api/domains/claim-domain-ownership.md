---
title: claim-domain-ownership
product: vercel
url: /docs/rest-api/domains/claim-domain-ownership
canonical_url: "https://vercel.com/docs/rest-api/domains/claim-domain-ownership"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about claim-domain-ownership on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Claim Domain Ownership

```http
POST /v9/domains/{domain}/claim
```

Claim ownership of a domain for the authenticated team by verifying a TXT record. The caller must first add a TXT record to `_vercel.{domain}` (obtained from GET /domains/:domain/verification), then call this endpoint to complete the ownership transfer. If the TXT record is verified, the domain ownership will be transferred to the caller's team, even if the domain is currently owned by another user or team.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | The domain name to claim ownership of |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Domain ownership successfully claimed.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "domain"
  ],
  "properties": {
    "domain": {
      "type": "object",
      "required": [
        "boughtAt",
        "createdAt",
        "creator",
        "expiresAt",
        "id",
        "intendedNameservers",
        "name",
        "nameservers",
        "serviceType",
        "teamId",
        "userId",
        "verified"
      ],
      "properties": {
        "expiresAt": {
          "type": "number",
          "description": "Timestamp in milliseconds at which the domain is set to expire. null if not bought with Vercel.",
          "nullable": true
        },
        "verified": {
          "type": "boolean",
          "description": "If the domain has the ownership verified.",
          "enum": [
            false,
            true
          ]
        },
        "nameservers": {
          "type": "array",
          "description": "A list of the current nameservers of the domain.",
          "items": {
            "type": "string"
          }
        },
        "intendedNameservers": {
          "type": "array",
          "description": "A list of the intended nameservers for the domain to point to Vercel DNS.",
          "items": {
            "type": "string"
          }
        },
        "customNameservers": {
          "type": "array",
          "description": "A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.",
          "items": {
            "type": "string"
          }
        },
        "creator": {
          "type": "object",
          "description": "An object containing information of the domain creator, including the user's id, username, and email.",
          "required": [
            "email",
            "id",
            "username"
          ],
          "properties": {
            "username": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "customerId": {
              "type": "string",
              "nullable": true
            },
            "isDomainReseller": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "id": {
              "type": "string"
            }
          }
        },
        "name": {
          "type": "string",
          "description": "The domain name."
        },
        "teamId": {
          "type": "string",
          "nullable": true
        },
        "boughtAt": {
          "type": "number",
          "description": "If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.",
          "nullable": true
        },
        "createdAt": {
          "type": "number",
          "description": "Timestamp in milliseconds when the domain was created in the registry."
        },
        "id": {
          "type": "string",
          "description": "The unique identifier of the domain."
        },
        "renew": {
          "type": "boolean",
          "description": "Indicates whether the domain is set to automatically renew.",
          "enum": [
            false,
            true
          ]
        },
        "serviceType": {
          "type": "string",
          "description": "The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.",
          "enum": [
            "external",
            "na",
            "zeit.world"
          ]
        },
        "transferredAt": {
          "type": "number",
          "description": "Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.",
          "nullable": true
        },
        "transferStartedAt": {
          "type": "number",
          "description": "If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated."
        },
        "userId": {
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

- [domains endpoints](/docs/rest-api#domains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
