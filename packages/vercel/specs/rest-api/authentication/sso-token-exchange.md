---
title: sso-token-exchange
product: vercel
url: /docs/rest-api/authentication/sso-token-exchange
canonical_url: "https://vercel.com/docs/rest-api/authentication/sso-token-exchange"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about sso-token-exchange on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# SSO Token Exchange

```http
POST /v1/integrations/sso/token
```

During the autorization process, Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization `code` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. Providers should not persist the returned `id_token` in a database since the token will expire. See [**Authentication with SSO**](https://vercel.com/docs/integrations/create-integration/marketplace-api#authentication-with-sso) for more details.

## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "code",
        "client_id",
        "client_secret",
        "grant_type"
      ],
      "properties": {
        "code": {
          "type": "string",
          "description": "The sensitive code received from Vercel"
        },
        "state": {
          "type": "string",
          "description": "The state received from the initialization request"
        },
        "client_id": {
          "type": "string",
          "description": "The integration client id"
        },
        "client_secret": {
          "type": "string",
          "description": "The integration client secret"
        },
        "redirect_uri": {
          "type": "string",
          "description": "The integration redirect URI"
        },
        "grant_type": {
          "type": "string",
          "description": "The grant type, when using x-www-form-urlencoded content type",
          "enum": [
            "authorization_code"
          ]
        }
      }
    },
    {
      "type": "object",
      "required": [
        "refresh_token",
        "client_id",
        "client_secret",
        "grant_type"
      ],
      "properties": {
        "refresh_token": {
          "type": "string",
          "description": "The refresh token received from previous token exchange"
        },
        "client_id": {
          "type": "string",
          "description": "The integration client id"
        },
        "client_secret": {
          "type": "string",
          "description": "The integration client secret"
        },
        "grant_type": {
          "type": "string",
          "description": "The grant type, when using x-www-form-urlencoded content type",
          "enum": [
            "refresh_token"
          ]
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
  "oneOf": [
    {
      "type": "object",
      "required": [
        "access_token",
        "id_token",
        "token_type"
      ],
      "properties": {
        "id_token": {
          "type": "string"
        },
        "token_type": {
          "type": "string",
          "nullable": true
        },
        "expires_in": {
          "type": "number"
        },
        "access_token": {
          "type": "string",
          "nullable": true
        },
        "refresh_token": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "required": [
        "access_token",
        "expires_in",
        "id_token",
        "refresh_token",
        "token_type"
      ],
      "properties": {
        "id_token": {
          "type": "string"
        },
        "token_type": {
          "type": "string"
        },
        "access_token": {
          "type": "string"
        },
        "refresh_token": {
          "type": "string"
        },
        "expires_in": {
          "type": "number"
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request body is invalid.

### 403: No description

### 500: No description

---

## Related

- [authentication endpoints](/docs/rest-api#authentication)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
