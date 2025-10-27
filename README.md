<p align="center">
  <img src="https://img.icons8.com/color/96/000000/typescript.png" alt="TypeScript" width="80" height="80">
  <h1 align="center">@dicitech/amo-kommo-types</h1>
</p>

<p align="center">
  <em>TypeScript type definitions for AmoCRM API v4 and Kommo Widgets</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@dicitech/amo-kommo-types"><img src="https://img.shields.io/npm/v/@dicitech/amo-kommo-types.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://www.npmjs.com/package/@dicitech/amo-kommo-types"><img src="https://img.shields.io/npm/dm/@dicitech/amo-kommo-types.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://github.com/DiciTechcom/amo-kommo-types/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@dicitech/amo-kommo-types.svg?style=flat-square" alt="License"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3.9+-blue.svg?style=flat-square" alt="TypeScript"></a>
</p>

<br>

## ✨ Features

- 🎯 **Full Type Coverage** — Complete TypeScript types for AmoCRM API v4 and Kommo widgets
- 🔒 **Type-Safe** — Catch errors at compile time, not runtime
- 📦 **Zero Dependencies** — No runtime dependencies
- 🔄 **Up-to-Date** — Supports latest AmoCRM API v4 and Kommo Widget API
- 🌍 **Internationalization** — 361 countries with ISO codes and localized names
- 🔌 **Widget Development** — Complete types for Kommo widget development
- 🛠️ **Extensible** — Easy to extend with custom fields and entities
- 📚 **Well Documented** — JSDoc comments and usage examples

## 📦 Installation

```bash
# npm
npm install @dicitech/amo-kommo-types

# yarn
yarn add @dicitech/amo-kommo-types

# pnpm
pnpm add @dicitech/amo-kommo-types
```

## 🚀 Quick Start

### AmoCRM REST API v4

```typescript
import { AmoLead, AmoContact, AmoLeadsList } from '@dicitech/amo-kommo-types/api';

// Type-safe lead handling
const lead: AmoLead = {
  id: 12345,
  name: 'Important Deal',
  price: 50000,
  responsible_user_id: 1,
  pipeline_id: 1,
  status_id: 142,
  custom_fields_values: [],
  // ... other fields
};

// Type-safe API responses with pagination
async function fetchLeads(): Promise<AmoLeadsList> {
  const response = await fetch('https://example.amocrm.com/api/v4/leads');
  return response.json();
}

// Autocomplete and type checking work out of the box!
const leads = await fetchLeads();
leads._embedded.leads.forEach(lead => {
  console.log(lead.name, lead.price);
});
```

### Kommo Widget Development

```typescript
import {
  KommoApp,
  KommoAbstractIntegration,
  KommoRenderCallback,
  KommoInitCallback,
} from '@dicitech/amo-kommo-types';

// Type-safe widget callbacks
export const renderCallback: KommoRenderCallback = (self) => {
  // self = KommoAbstractIntegration instance with full type safety
  const settings = self.get_settings();
  const translated = self.i18n('widget.title');

  self.render_template({
    caption: { class_name: 'my-widget' },
    body: '<div>Widget content</div>',
    render: ''
  });

  return true;
};

export const initCallback: KommoInitCallback = (self) => {
  // Access global APP object with types
  const currentArea = APP.getWidgetsArea();
  const user = APP.constant('user');

  // Make authorized requests
  self.$authorizedAjax({
    url: '/api/endpoint',
    method: 'GET'
  });

  return true;
};
```

### Widget Manifest

```typescript
import { KommoManifestJson, KommoLocale } from '@dicitech/amo-kommo-types/manifest';

const manifest: KommoManifestJson = {
  widget: {
    locale: KommoLocale.English,
    support: {
      link: 'https://example.com/support',
      email: 'support@example.com'
    }
  },
  locations: ['lcard-1', 'ccard-1', 'settings']
};
```

## 📖 Package Structure

```
@dicitech/amo-kommo-types
├── /api           - AmoCRM REST API v4 types
│   ├── /backend   - API response types (Lead, Contact, Company, etc.)
│   └── /frontend  - Frontend constants and types
├── /crm           - Kommo APP object and CRM entities
│   └── app.ts     - Global APP interface, notifications, constants
├── /integration   - Kommo widget integration API
│   └── integration.ts - AbstractIntegration, callbacks, lifecycle
├── /manifest      - Widget manifest types
│   └── manifest.ts - Manifest.json structure
└── /utils         - Utility types
    └── base.ts    - Shared utilities (StringBoolean, etc.)
```

## 🎯 Usage Examples

### Working with Custom Fields

```typescript
import { AmoEntityCustomField, AmoCustomFieldType } from '@dicitech/amo-kommo-types/api';

// Type-safe custom fields
const customFields: AmoEntityCustomField[] = [
  {
    field_id: 123,
    field_name: 'Email',
    field_code: 'EMAIL',
    field_type: 'text',
    values: [
      {
        value: 'client@example.com',
        enum_id: 1,
        enum_code: 'WORK'
      }
    ]
  }
];
```

### Pagination and List Responses

```typescript
import { AmoLeadsList, AmoContactsList } from '@dicitech/amo-kommo-types/api';

// All list responses include pagination metadata
const leadsList: AmoLeadsList = {
  _page: 1,
  _links: {
    self: { href: '/api/v4/leads?page=1' },
    next: { href: '/api/v4/leads?page=2' }
  },
  _embedded: {
    leads: [/* array of leads */]
  }
};
```

### Widget Notifications

```typescript
import { KommoShowMessageParams, KommoAddCallParams } from '@dicitech/amo-kommo-types/crm';

// Show info notification
const messageParams: KommoShowMessageParams = {
  header: 'Success',
  text: 'Operation completed successfully',
  date: Date.now() / 1000
};
APP.notifications.show_message(messageParams);

// Add call notification
const callParams: KommoAddCallParams = {
  text: 'Incoming call',
  element: {
    id: 12345,
    type: 'contact'
  },
  duration: 120
};
APP.notifications.add_call(callParams);
```

### Country Data

```typescript
import { AmoCountries, AmoCountriesIds } from '@dicitech/amo-kommo-types/api';

// Union type of all ISO country codes
const countryCode: AmoCountriesIds = 'US';

// Array of all countries (361 entries)
const countries = AmoCountries;
// [{ id: 'US', title: 'United States' }, { id: 'GB', title: 'United Kingdom' }, ...]
```

## 🔍 Type Reference

### AmoCRM API Types

**Main Entities:**
- `AmoLead` / `AmoLeadsList` - Leads with price, pipeline, status
- `AmoContact` / `AmoContactsList` - Contacts
- `AmoCompany` / `AmoCompaniesList` - Companies
- `AmoCustomer` / `AmoCustomersList` - Customers (recurring sales)
- `AmoUser` - Users/employees
- `AmoAccount` - Account settings
- `AmoPipeline` - Sales pipelines
- `AmoCustomField` - Custom field metadata
- `AmoCustomFieldGroup` - Custom field groups

**Utilities:**
- `AmoCountries` - Country data (361 countries)
- `AmoCustomFieldType` - 16 field types (text, numeric, select, etc.)
- `AmoCustomFieldCode` - System field codes (EMAIL, PHONE, WEB, etc.)
- `AmoEntities` - Valid entity names for API endpoints
- `AmoApiResponse<T>` - Generic pagination wrapper

### Kommo Widget Types

**Core Types:**
- `KommoApp` - Global APP object interface
- `KommoAbstractIntegration` - Widget integration API
- `KommoManifestJson` - Widget manifest structure
- `KommoLocale` - Supported locales (en, es, pt)

**Callback Types:**
- `KommoRenderCallback` - Must return true for widget initialization
- `KommoInitCallback` - Must return true for bind_actions to execute
- `KommoBindActionsCallback` - Event handler registration
- `KommoSettingsCallback` - Settings page handler
- `KommoOnSaveCallback` - Save button handler
- `KommoDestroyCallback` - Cleanup handler
- `KommoLeadsSelectedCallback` - Lead selection in list view
- `KommoContactsSelectedCallback` - Contact selection
- `KommoInitMenuPageCallback` - Custom menu page

**Notification Types:**
- `KommoShowMessageParams` - Info notifications
- `KommoShowMessageErrorParams` - Error notifications
- `KommoShowNotificationParams` - Pop-up notifications
- `KommoAddErrorParams` - Error notification center
- `KommoAddCallParams` - Call notifications

**CRM Entities:**
- `KommoUserConstant` - Current user info
- `KommoManager` - Manager/user details
- `KommoTaskType` - Custom task types
- `KommoUserStatus` - Online/offline status

## 💡 Best Practices

### 1. Use Specific Types

```typescript
// ❌ Don't use any
function handleLead(lead: any) {
  console.log(lead.name);
}

// ✅ Use specific types
import { AmoLead } from '@dicitech/amo-kommo-types/api';

function handleLead(lead: AmoLead) {
  console.log(lead.name); // TypeScript validates this
}
```

### 2. Leverage Type Inference

```typescript
import { AmoLeadsList } from '@dicitech/amo-kommo-types/api';

async function fetchLeads(): Promise<AmoLeadsList> {
  // Return type automatically inferred
  const response = await fetch('/api/v4/leads');
  return response.json();
}

const leads = await fetchLeads();
// TypeScript knows leads._embedded.leads is AmoLead[]
```

### 3. Widget Callback Patterns

```typescript
import { InitCallback, RenderCallback } from '@dicitech/amo-kommo-types/integration';

// Callbacks automatically receive 'self' parameter
export const init: InitCallback = (self, ...args) => {
  // self is fully typed as KommoAbstractIntegration
  const settings = self.get_settings();
  return true;
};

export const render: RenderCallback = (self) => {
  self.render_template({
    caption: { class_name: 'widget' },
    body: '<div>Content</div>',
    render: ''
  });
  return true;
};
```

## 🛠️ Development

### Build Commands

```bash
# Full build (clean dist and compile TypeScript)
npm run build

# Type-check only (no file generation)
npm run build:check
```

### Project Structure

```
src/
├── api/           # AmoCRM REST API v4 types
├── crm/           # Kommo APP object and CRM types
├── integration/   # Widget integration types
├── manifest/      # Manifest types
├── utils/         # Utility types
└── index.ts       # Main entry point
```

### TypeScript Configuration

- **Target:** ES2015
- **Module:** CommonJS
- **Strict Mode:** Enabled
- **Source Maps:** Yes
- **Declaration Maps:** Yes

## 🔗 Resources

- 📘 [AmoCRM API Documentation](https://www.amocrm.com/developers/content/crm_platform/api-reference)
- 🔌 [Kommo Widget Development](https://developers.kommo.com/)
- 🏠 [GitHub Repository](https://github.com/DiciTechcom/amo-kommo-types)
- 🐛 [Report Issues](https://github.com/DiciTechcom/amo-kommo-types/issues)
- 📦 [NPM Package](https://www.npmjs.com/package/@dicitech/amo-kommo-types)

## 📝 License

MIT License © [Dicitech](https://github.com/DiciTechcom)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/DiciTechcom">Dicitech</a> for the AmoCRM & Kommo community
</p>
