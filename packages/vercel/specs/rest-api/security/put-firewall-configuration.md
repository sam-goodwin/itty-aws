---
title: put-firewall-configuration
product: vercel
url: /docs/rest-api/security/put-firewall-configuration
canonical_url: "https://vercel.com/docs/rest-api/security/put-firewall-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about put-firewall-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Put Firewall Configuration

```http
PUT /v1/security/firewall/config
```

Set the firewall configuration to provided rules and settings. Creates or overwrite the existing firewall configuration.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "firewallEnabled"
  ],
  "properties": {
    "firewallEnabled": {
      "type": "boolean"
    },
    "managedRules": {
      "type": "object"
    },
    "crs": {
      "type": "object",
      "description": "Custom Ruleset",
      "properties": {
        "sd": {
          "type": "object",
          "description": "Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "ma": {
          "type": "object",
          "description": "Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "lfi": {
          "type": "object",
          "description": "Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "rfi": {
          "type": "object",
          "description": "Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "rce": {
          "type": "object",
          "description": "Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "php": {
          "type": "object",
          "description": "PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "gen": {
          "type": "object",
          "description": "Generic Attack - Provide broad protection from various undefined or novel attack vectors.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "xss": {
          "type": "object",
          "description": "XSS Attack - Prevent injection of malicious scripts into trusted webpages.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "sqli": {
          "type": "object",
          "description": "SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "sf": {
          "type": "object",
          "description": "Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "java": {
          "type": "object",
          "description": "Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.",
          "required": [
            "active",
            "action"
          ],
          "properties": {
            "active": {
              "type": "boolean"
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        }
      }
    },
    "rules": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "name",
          "active",
          "conditionGroup",
          "action"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string",
            "maxLength": 160
          },
          "description": {
            "type": "string",
            "maxLength": 256
          },
          "active": {
            "type": "boolean"
          },
          "conditionGroup": {
            "type": "array"
          },
          "action": {
            "type": "object"
          },
          "valid": {
            "type": "boolean"
          },
          "validationErrors": {}
        }
      }
    },
    "rulesets": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "name",
              "active",
              "conditionGroup"
            ]
          }
        },
        {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "required": [
              "action"
            ]
          }
        }
      ]
    },
    "ips": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "hostname",
          "ip",
          "action"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "hostname": {
            "type": "string"
          },
          "ip": {
            "type": "string"
          },
          "notes": {
            "type": "string"
          },
          "action": {
            "type": "string",
            "enum": [
              "deny",
              "challenge",
              "log",
              "bypass"
            ]
          }
        }
      }
    },
    "botIdEnabled": {
      "type": "boolean"
    },
    "logHeaders": {
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      ]
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "active"
  ],
  "properties": {
    "active": {
      "type": "object",
      "required": [
        "changes",
        "firewallEnabled",
        "id",
        "ips",
        "ownerId",
        "projectKey",
        "rules",
        "updatedAt",
        "version"
      ],
      "properties": {
        "ownerId": {
          "type": "string"
        },
        "projectKey": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "version": {
          "type": "number"
        },
        "updatedAt": {
          "type": "string"
        },
        "firewallEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "crs": {
          "type": "object",
          "description": "Custom Ruleset",
          "required": [
            "gen",
            "java",
            "lfi",
            "ma",
            "php",
            "rce",
            "rfi",
            "sd",
            "sf",
            "sqli",
            "xss"
          ],
          "properties": {
            "sd": {
              "type": "object",
              "description": "Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.",
              "required": [
                "action",
                "active"
              ]
            },
            "ma": {
              "type": "object",
              "description": "Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.",
              "required": [
                "action",
                "active"
              ]
            },
            "lfi": {
              "type": "object",
              "description": "Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.",
              "required": [
                "action",
                "active"
              ]
            },
            "rfi": {
              "type": "object",
              "description": "Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.",
              "required": [
                "action",
                "active"
              ]
            },
            "rce": {
              "type": "object",
              "description": "Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.",
              "required": [
                "action",
                "active"
              ]
            },
            "php": {
              "type": "object",
              "description": "PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.",
              "required": [
                "action",
                "active"
              ]
            },
            "gen": {
              "type": "object",
              "description": "Generic Attack - Provide broad protection from various undefined or novel attack vectors.",
              "required": [
                "action",
                "active"
              ]
            },
            "xss": {
              "type": "object",
              "description": "XSS Attack - Prevent injection of malicious scripts into trusted webpages.",
              "required": [
                "action",
                "active"
              ]
            },
            "sqli": {
              "type": "object",
              "description": "SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.",
              "required": [
                "action",
                "active"
              ]
            },
            "sf": {
              "type": "object",
              "description": "Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.",
              "required": [
                "action",
                "active"
              ]
            },
            "java": {
              "type": "object",
              "description": "Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.",
              "required": [
                "action",
                "active"
              ]
            }
          }
        },
        "rules": {
          "type": "array",
          "items": {}
        },
        "ips": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "action",
              "hostname",
              "id",
              "ip"
            ]
          }
        },
        "rulesets": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "object"
            }
          ]
        },
        "changes": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "managedRules": {
          "type": "object",
          "properties": {
            "bot_protection": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "ai_bots": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "owasp": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "vercel_ruleset": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "traffic_sources": {
              "type": "object",
              "required": [
                "active"
              ]
            }
          }
        },
        "botIdEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "logHeaders": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "string",
              "enum": [
                "*"
              ]
            }
          ]
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

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
