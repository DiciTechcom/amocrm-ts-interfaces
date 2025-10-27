# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@amodev/interfaces` - a TypeScript type definitions library for AmoCRM and AmoDEV entities. The package provides comprehensive type safety for working with AmoCRM API v4 responses, custom fields, entities, and AmoDEV internal structures.

**Package Details:**
- Published to npm as `@amodev/interfaces`
- Distributed version: v4.0.9
- Output: CommonJS modules with TypeScript declarations
- Homepage: https://amodev.ru/faq/repositories/interfaces

## Build Commands

```bash
# Build the package (clean dist and compile TypeScript)
npm run build

# Type-check without emitting files (useful for validation)
npm run build:check
```

## Code Architecture

### Top-Level Structure

The package is organized into three main namespaces exported from `src/index.ts`:

1. **`interfaces/amocrm`** - AmoCRM API types (backend + frontend)
2. **`interfaces/amodev`** - AmoDEV internal entity types
3. **`interfaces/base`** - Shared base types and enums

### AmoCRM Interfaces (`src/interfaces/amocrm`)

Split into **backend** and **frontend** interfaces:

#### Backend (API v4) - `src/interfaces/amocrm/backend/v4/`

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
- `AmoCountries` - Country ID to Russian name mapping (361 countries)
- `AmoLegacyFieldTypes` - Numeric codes for legacy field types
- `AmoCustomFieldType` - 16 field type variants (text, numeric, select, etc.)
- `AmoCustomFieldCode` - System field codes (EMAIL, PHONE, WEB, etc.)
- `AmoEntities` - Valid entity names for API endpoints

#### Frontend - `src/interfaces/amocrm/frontend/`

Types for AmoCRM JavaScript SDK and frontend constants. Contains:
- `AmoGlobalObject` - Interface for AmoCRM global object in widgets
- `contstants/` - Frontend constant types (User, TaskType, Manager, Account)

### AmoDEV Interfaces (`src/interfaces/amodev`)

Internal AmoDEV platform types for account management:
- `AmoDevAccount` - Internal account representation (uuid, amoId, ownerId)
- `Product` - Product definitions
- `AccountProduct` - Product-to-account associations
- `AccountUser` - User account relationships
- `AccountUserGroup` - User group management

### Base Types (`src/interfaces/base.ts`)

Shared utilities:
- `StringBoolean` - Enum for 'Y'/'N' string booleans (common in AmoCRM)

## Development Patterns

### Adding New Entity Types

1. Create entity type file in `src/interfaces/amocrm/backend/v4/[Entity].ts`
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
5. Export from `src/interfaces/amocrm/backend/v4/index.ts`

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
