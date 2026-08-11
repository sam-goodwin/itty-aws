---
title: returns-activated-waf-config-1
product: vercel
url: /docs/rest-api/security/returns-activated-waf-config-1
canonical_url: "https://vercel.com/docs/rest-api/security/returns-activated-waf-config-1"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about returns-activated-waf-config-1 on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Returns activated WAF config

```http
DELETE /v1/security/firewall/config/{configVersion}
```

Promotes a draft WAF config to an active config

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `configVersion` | string | Yes | The deployed configVersion for the firewall configuration |


## Responses

### 204: No description

Content-Type: `application/json`

```json
{
  "type": "string",
  "enum": [
    ""
  ]
}
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 500: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
