/**
 * @dicitech/amo-kommo-types
 *
 * TypeScript type definitions for CRM API and Widgets
 *
 * This package provides comprehensive type safety for:
 * - CRM REST API entities and responses
 * - CRM widget development (integration, callbacks, manifest)
 * - Unified CRM types for consistent development
 *
 * @packageDocumentation
 */

// =============================================================================
// Common CRM Types
// =============================================================================

export * from './common'

// =============================================================================
// Backward Compatibility Aliases
// =============================================================================
// These aliases maintain compatibility with existing codebases while
// transitioning to the new unified naming convention.

// Entity type aliases
export type {
  CrmLead as AmoLead,
  CrmLeadsList as AmoLeadsList,
  CrmContact as AmoContact,
  CrmContactsList as AmoContactsList,
  CrmCompany as AmoCompany,
  CrmCompaniesList as AmoCompaniesList,
  CrmCustomer as AmoCustomer,
  CrmCustomersList as AmoCustomersList,
} from './common'

// User and manager type aliases
export type {
  CrmUser as AmoUser,
  CrmUserConstant as AmoConstantUser,
  CrmManager as AmoConstantManager,
  CrmUserAccessRight as AmoUserAccessRight,
  CrmUserStatus as KommoUserStatus,
} from './common'

// Account type aliases
export type {
  CrmAccount as AmoAccount,
  CrmAccountConstant as AmoConstantAccount,
  CrmAccountCustomFieldConfig as AmoConstantAccountCF,
} from './common'

// Pipeline and task type aliases
export type {
  CrmPipeline as AmoPipeline,
  CrmTaskType as AmoConstantTaskType,
  CrmTaskType as KommoTaskType,
} from './common'

// Custom field type aliases
export type {
  CrmCustomField as AmoCustomField,
  CrmCustomFieldGroup as AmoCustomFieldGroup,
  CrmCustomFieldType as AmoCustomFieldType,
  CrmCustomFieldCode as AmoCustomFieldCode,
  CrmCustomFieldTypeAddress as AmoCustomFieldTypeAddress,
  CrmEntityCustomField as AmoEntityCustomField,
} from './common'

// Utility type aliases
export type {
  CrmEntities as AmoEntities,
  CrmCountriesIds as AmoCountriesIds,
  CrmApiResponse as AmoApiResponse,
} from './common'

export { CrmCountries as AmoCountries, CrmLegacyFieldTypes as AmoLegacyFieldTypes } from './common'

// CRM App type aliases
export type {
  CrmApp as KommoApp,
  CrmNotifications as KommoNotifications,
  CrmShowMessageParams as KommoShowMessageParams,
  CrmShowMessageErrorParams as KommoShowMessageErrorParams,
  CrmShowNotificationParams as KommoShowNotificationParams,
  CrmAddErrorParams as KommoAddErrorParams,
  CrmAddCallParams as KommoAddCallParams,
} from './common'

// Widget callback aliases
export type {
  CrmWidgetIntegration as KommoAbstractIntegration,
  CrmWidgetRenderCallback as KommoRenderCallback,
  CrmWidgetInitCallback as KommoInitCallback,
  CrmWidgetBindActionsCallback as KommoBindActionsCallback,
  CrmWidgetSettingsCallback as KommoSettingsCallback,
  CrmWidgetOnSaveCallback as KommoOnSaveCallback,
  CrmWidgetDestroyCallback as KommoDestroyCallback,
  CrmWidgetLeadsSelectedCallback as KommoLeadsSelectedCallback,
  CrmWidgetContactsSelectedCallback as KommoContactsSelectedCallback,
  CrmWidgetTodoSelectedCallback as KommoTodoSelectedCallback,
  CrmWidgetAdvancedSettingsCallback as KommoAdvancedSettingsCallback,
  CrmWidgetDpSettingsCallback as KommoDpSettingsCallback,
  CrmWidgetInitMenuPageCallback as KommoInitMenuPageCallback,
  CrmWidgetOnSalesbotDesignerSaveCallback as KommoOnSalesbotDesignerSaveCallback,
  CrmWidgetOnAddAsSourceCallback as KommoOnAddAsSourceCallback,
  CrmWidgetLoadCatalogElementCallback as KommoLoadCatalogElementCallback,
  CrmWidgetLoadPreloadedDataCallback as KommoLoadPreloadedDataCallback,
  CrmWidgetLoadElementsCallback as KommoLoadElementsCallback,
  CrmWidgetLinkCardCallback as KommoLinkCardCallback,
  CrmWidgetSalesbotDesignerSettingsCallback as KommoSalesbotDesignerSettingsCallback,
} from './common'

// Manifest type aliases
export type {
  CrmWidgetManifestJson as KommoManifestJson,
  CrmWidgetLocale as KommoLocale,
  CrmWidgetSupportInfo as KommoSupportInfo,
  CrmWidgetLocationWithAdditionalProps as KommoLocationWithAdditionalProps,
} from './common'

// StringBoolean enum export
export { StringBoolean } from './common'
