# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@dicitech/amo-kommo-types` - a TypeScript type definitions library for AmoCRM API v4 and Kommo Widgets. The package provides comprehensive type safety for working with AmoCRM REST API v4 responses, custom fields, entities, and Kommo widget development.

**Package Details:**
- Published to npm as `@dicitech/amo-kommo-types`
- Current version: 1.0.0
- Output: CommonJS modules with TypeScript declarations
- Repository: https://github.com/DiciTechcom/amo-kommo-types
- NPM: https://www.npmjs.com/package/@dicitech/amo-kommo-types

## Build Commands

```bash
# Build the package (clean dist and compile TypeScript)
npm run build

# Type-check without emitting files (useful for validation)
npm run build:check
```

## Package Architecture

### Top-Level Structure

The package is organized into five main categories exported from `src/index.ts`:

1. **`api/`** - AmoCRM REST API v4 types (backend + frontend)
2. **`crm/`** - Kommo Widget CRM types (APP object, constants)
3. **`integration/`** - Kommo Widget integration types (callbacks, lifecycle)
4. **`manifest/`** - Kommo Widget manifest configuration types
5. **`utils/`** - Shared utility types

### AmoCRM REST API Types (`src/api/`)

#### Backend API v4 - `src/api/amocrm/backend/v4/`

Type definitions for AmoCRM REST API v4 responses. All entity types follow the API response structure with `_links` and `_embedded` metadata.

**Core Entity Types:**
- `AmoLead` / `AmoLeadsList` - Lead entities with price, pipeline, status
- `AmoContact` / `AmoContactsList` - Contact entities
- `AmoCompany` / `AmoCompaniesList` - Company entities
- `AmoCustomer` / `AmoCustomersList` - Customer entities
- `AmoUser` - User/employee data
- `AmoAccount` - Account information
- `AmoPipeline` - Sales pipeline definitions
- `AmoCustomField` - Custom field metadata
- `AmoCustomFieldGroup` - Custom field groupings

**Key Patterns:**
- All entities use `number | string` union types for IDs (API flexibility)
- List responses wrapped in `AmoApiResponse<Entity>` with pagination metadata
- Custom fields use `AmoEntityCustomField[]` array with typed values
- Embedded relations (tags, contacts, companies) in `_embedded` object

**Important Utilities (`utils.ts`):**
- `AmoCountriesIds` - ISO country code union type
- `AmoCountries` - Country ID to localized name mapping (361 countries)
- `AmoLegacyFieldTypes` - Numeric codes for legacy field types
- `AmoCustomFieldType` - 16 field type variants (text, numeric, select, etc.)
- `AmoCustomFieldCode` - System field codes (EMAIL, PHONE, WEB, etc.)
- `AmoEntities` - Valid entity names for API endpoints

#### Frontend - `src/api/amocrm/frontend/`

Types for AmoCRM JavaScript SDK and frontend constants. Contains:
- `AmoGlobalObject` - Interface for AmoCRM global object in widgets
- `constants/` - Frontend constant types (User, TaskType, Manager, Account)

### Kommo Widget Types

#### CRM Types (`src/crm/`)

Global APP object and CRM entities accessible in Kommo widgets:
- `KommoApp` - Global APP object interface with environment variables and API methods
- Notification types - All APP.notifications API types
- Constants - User, managers, groups, task types
- User status - Online/offline status tracking

#### Integration Types (`src/integration/`)

Widget integration API and callbacks:
- `KommoAbstractIntegration` - Widget integration API (render, settings, i18n, AJAX)
- All callback types (render, init, bind_actions, settings, etc.)
- `KommoContextWrapper` - Type transformer for callback context injection

#### Manifest Types (`src/manifest/`)

Widget manifest.json structure:
- `KommoManifestJson` - Complete manifest structure
- `KommoLocale` - Supported locales (en, es, pt)
- `KommoLocationWithAdditionalProps` - Special locations requiring extra config
- Location-specific configs (dp, advanced, mobile, sms, salesbot, left_menu)

### Utility Types (`src/utils/`)

Shared utilities:
- `StringBoolean` - Enum for 'Y'/'N' string booleans (common in AmoCRM/Kommo)

## Development Patterns

### Adding New AmoCRM Entity Types

1. Create entity type file in `src/api/amocrm/backend/v4/[Entity].ts`
2. Import utilities: `import { AmoEntityCustomField, AmoApiResponse } from './utils'`
3. Define entity type with API response structure:
   ```typescript
   export type Amo[Entity] = {
     id: number | string
     // ... entity fields
     custom_fields_values: AmoEntityCustomField[]
     _links: { self: { href: string } }
     _embedded?: { /* relations */ }
   }
   ```
4. Create list type: `export type Amo[Entity]sList = AmoApiResponse<Amo[Entity]>`
5. Export from `src/api/amocrm/backend/v4/index.ts`

### Adding New Kommo Widget Types

1. Add to appropriate module (`crm/`, `integration/`, or `manifest/`)
2. Include JSDoc comments with links to Kommo documentation
3. Export from module's index.ts
4. Consider adding usage examples in README.md

### ID Type Conventions

Use `number | string` for all ID fields to handle both numeric and string representations from the API.

### Custom Fields

All entities with custom fields include:
```typescript
custom_fields_values: AmoEntityCustomField[]
```

This provides type-safe access to custom field values with field metadata (field_id, field_name, field_code, field_type).

## TypeScript Configuration

- Target: ES2015
- Module: CommonJS
- Strict mode enabled
- Path alias: `@/*` maps to `src/*`
- Source maps generated for debugging
- Declaration files (.d.ts) generated for consumers
- Declaration maps enabled for better IDE navigation

## Usage Examples

### Basic AmoCRM API Usage

```typescript
import { AmoLead, AmoLeadsList } from '@dicitech/amo-kommo-types/api';

const lead: AmoLead = {
  id: 12345,
  name: 'Deal',
  price: 50000,
  // ... fully typed
};
```

### Kommo Widget Development

```typescript
import { KommoRenderCallback, KommoInitCallback } from '@dicitech/amo-kommo-types/integration';

export const render: KommoRenderCallback = (self) => {
  self.render_template({ /* ... */ });
  return true;
};

export const init: KommoInitCallback = (self) => {
  const settings = self.get_settings();
  return true;
};
```

### Global APP Object

```typescript
// TypeScript knows about global APP
const area = APP.getWidgetsArea();
const user = APP.constant('user');
APP.notifications.show_message({ /* fully typed */ });
```

## Maintenance Guidelines

- Keep types synchronized with AmoCRM API v4 and Kommo Widget API
- Add JSDoc comments for all public interfaces
- Include `@see` links to official documentation
- Mark deprecated types with `@deprecated` tag
- Use semantic versioning for releases
- Test types with real API responses when possible

## Related Resources

- [AmoCRM API Documentation](https://www.amocrm.com/developers/content/crm_platform/api-reference)
- [Kommo Widget Development](https://developers.kommo.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
