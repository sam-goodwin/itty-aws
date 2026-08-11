---
title: add-an-existing-domain-to-the-vercel-platform
product: vercel
url: /docs/rest-api/domains/add-an-existing-domain-to-the-vercel-platform
canonical_url: "https://vercel.com/docs/rest-api/domains/add-an-existing-domain-to-the-vercel-platform"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about add-an-existing-domain-to-the-vercel-platform on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Add an existing domain to the Vercel platform

```http
POST /v7/domains
```

This endpoint is used for adding a new apex domain name with Vercel for the authenticating user. Note: This endpoint is no longer used for initiating domain transfers from external registrars to Vercel. For this, please use the endpoint [Transfer-in a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain).

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "properties": {
    "method": {
      "type": "string",
      "description": "The domain operation to perform. It can be either `add` or `move-in`."
    }
  },
  "oneOf": [
    {
      "type": "object",
      "description": "add",
      "required": [
        "name"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "The domain name you want to add."
        },
        "cdnEnabled": {
          "type": "boolean",
          "description": "Whether the domain has the Vercel Edge Network enabled or not."
        },
        "zone": {
          "type": "boolean",
          "description": "Whether to create a DNS zone on Vercel. Set `true` if using Vercel nameservers."
        },
        "method": {
          "type": "string",
          "description": "The domain operation to perform."
        }
      }
    },
    {
      "type": "object",
      "description": "move-in",
      "required": [
        "method",
        "name"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "The domain name you want to add."
        },
        "method": {
          "type": "string",
          "description": "The domain operation to perform."
        },
        "token": {
          "type": "string",
          "description": "The move-in token from Move Requested email."
        }
      }
    }
  ]
}
```

## Responses

### 200: No description

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

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: The domain is not allowed to be used

### 410: No description

---

## Related

- [domains endpoints](/docs/rest-api#domains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
