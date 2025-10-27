/**
 * CRM Widget Integration Types
 *
 * These types define the interface for CRM widget callbacks and integration methods.
 * Widgets are supported in both AmoCRM and Kommo (which is the international version).
 *
 * In AmoCRM, widgets use the global object `AMOCRM` or `APP`.
 * In Kommo, widgets use the global object `APP`.
 *
 * @see https://www.amocrm.ru/developers/content/integrations
 * @see https://developers.kommo.com
 */

/**
 * Internationalization function type
 */
export type CrmWidgetI18n = (key: string) => string

/**
 * Translation dictionary type
 */
export type CrmWidgetLangs = Partial<Record<string, string>>

/**
 * jQuery-like types for widget API compatibility
 */
export type JQueryAjaxSettings = any
export type JQueryXHR = any
export type JQueryElement = any
export type JQueryDeferred<T> = any

/**
 * Authorized AJAX function type
 */
export type CrmWidgetAuthorizedAjax = (options: JQueryAjaxSettings) => JQueryXHR

/**
 * Parameters for initMenuPage callback
 */
export interface CrmWidgetInitMenuPageParams {
  /**
   * Current page location
   */
  location: string

  /**
   * Custom section code
   */
  item_code?: string

  /**
   * Subsection code
   */
  subitem_code?: string
}

/**
 * CRM Widget Integration Interface
 *
 * This interface defines all methods and properties available
 * to widget callbacks via the `self` parameter.
 *
 * @see https://www.amocrm.ru/developers/content/integrations/script_js
 * @see https://developers.kommo.com/docs/script-js
 */
export interface CrmWidgetIntegration {
  /**
   * The render_template() method wraps the provided markup
   * or template in the standard widget layout and places the
   * resulting markup in the right column of the widgets.
   *
   * @see https://developers.kommo.com/docs/script-js#selfrender_template
   */
  render_template(options: {
    caption: {
      class_name: string
    }
    body: string
    render: ''
  }): void

  render_template(
    options: {
      caption: {
        class_name: string
      }
      body: ''
      render: string
    },
    renderParams: object
  ): void

  /**
   * Integration's translation dictionary
   */
  langs: CrmWidgetLangs

  /**
   * The method of getting translation via key.
   *
   * @see https://developers.kommo.com/docs/script-js#self-i18n-key
   */
  i18n: CrmWidgetI18n

  /**
   * The method adding 'X-Auth-Token' to requests
   * Works only with OAuth integrations
   *
   * @see https://developers.kommo.com/docs/one-time-tokens
   */
  $authorizedAjax: CrmWidgetAuthorizedAjax

  /**
   * This method retrieves user input from the widget
   * and returns it as a JavaScript object.
   *
   * @see https://developers.kommo.com/docs/script-js#selfget_settings
   */
  get_settings: () => object

  /**
   * The method allows user to add custom settings.
   *
   * @see https://developers.kommo.com/docs/script-js#selfset_settings
   */
  set_settings(newSettings: { [key: string]: unknown }): void

  /**
   * This function retrieves a list of checked contacts or
   * leads from the respective table and returns it as an
   * array of objects.
   *
   * @see https://developers.kommo.com/docs/script-js#selflist_selected
   */
  list_selected: () => object[]

  /**
   * This function allows you to change the default
   * settings for files from the i18n folder.
   *
   * @see https://developers.kommo.com/docs/script-js#selfset_lang
   */
  set_lang: (newLangs: CrmWidgetLangs) => void

  /**
   * This function allows you to find out which pipeline the widget
   * is connected to as a source.
   * Available if there is a lead_sources area in manifest.json.
   *
   * @see https://developers.kommo.com/docs/script-js#selfget_pipeline_id
   */
  get_pipeline_id: () => JQueryDeferred<string>

  /**
   * Sets the status of the widget.
   * Available statuses:
   * - 'install': The widget is not active.
   * - 'installed': The widget is active.
   * - 'error': The widget is in an error state.
   *
   * @see https://developers.kommo.com/docs/script-js#selfset_status
   */
  set_status: (status: 'install' | 'installed' | 'error') => void

  /**
   * Retrieves the version number of the widget.
   *
   * @see https://developers.kommo.com/docs/script-js#selfget_version
   */
  get_version: () => string

  /**
   * Returns the installation status of the widget.
   *
   * @see https://developers.kommo.com/docs/script-js#selfget_install_status
   */
  get_install_status: () => 'install' | 'installed' | 'error'

  /**
   * Sets the catalog ID for SDK list operations.
   */
  setSdkCatalogId: (catalogId: string) => void

  /**
   * Widget callbacks object
   */
  callbacks: {
    render?: CrmWidgetRenderCallback
    init?: CrmWidgetInitCallback
    bind_actions?: CrmWidgetBindActionsCallback
    settings?: CrmWidgetSettingsCallback
    onSave?: CrmWidgetOnSaveCallback
    destroy?: CrmWidgetDestroyCallback
    leads?: {
      selected?: CrmWidgetLeadsSelectedCallback
    }
    contacts?: {
      selected?: CrmWidgetContactsSelectedCallback
    }
    todo?: {
      selected?: CrmWidgetTodoSelectedCallback
    }
    advancedSettings?: CrmWidgetAdvancedSettingsCallback
    dpSettings?: CrmWidgetDpSettingsCallback
    initMenuPage?: CrmWidgetInitMenuPageCallback
    onSalesbotDesignerSave?: CrmWidgetOnSalesbotDesignerSaveCallback
    onAddAsSource?: CrmWidgetOnAddAsSourceCallback
    loadCatalogElement?: CrmWidgetLoadCatalogElementCallback
    loadPreloadedData?: CrmWidgetLoadPreloadedDataCallback
    loadElements?: CrmWidgetLoadElementsCallback
    linkCard?: CrmWidgetLinkCardCallback
    salesbotDesignerSettings?: CrmWidgetSalesbotDesignerSettingsCallback
  }
}

/**
 * Context wrapper type that transforms callbacks to receive
 * CrmWidgetIntegration as first parameter
 */
export type CrmWidgetContextWrapper<F extends (...args: any) => any> = (
  self: CrmWidgetIntegration,
  ...args: Parameters<F>
) => ReturnType<F>

// Original callback types (without self parameter)

type TrueCallback = () => boolean
type OriginalAdvancedSettingsCallback = () => void
type OriginalBindActionsCallback = TrueCallback
type OriginalDestroyCallback = () => void
type OriginalInitCallback = TrueCallback
type OriginalLeadsSelectedCallback = () => void
type OriginalTodoSelectedCallback = () => void
type OriginalContactsSelectedCallback = () => void
type OriginalDpSettingsCallback = () => void
type OriginalInitMenuPageCallback = (params: CrmWidgetInitMenuPageParams) => void
type OriginalLinkCardCallback = any
type OriginalLoadCatalogElementCallback = (catalog_element: object) => void
type OriginalLoadElementsCallback = any
type OriginalLoadPreloadedDataCallback = () => Promise<unknown[]>
type OriginalOnAddAsSourceCallback = (pipelineId: number) => void
type OriginalOnSalesbotDesignerSaveCallback = (
  handlerCode: string,
  params: Record<string, unknown>
) => string
type OriginalOnSaveCallback = TrueCallback
type OriginalRenderCallback = TrueCallback
type OriginalSalesbotDesignerSettingsCallback = any
type OriginalSettingsCallback = (modalContentElement: JQueryElement) => void

// Wrapped callback types (with self parameter)

/**
 * Advanced settings callback
 */
export type CrmWidgetAdvancedSettingsCallback =
  CrmWidgetContextWrapper<OriginalAdvancedSettingsCallback>

/**
 * Bind actions callback - must return true
 */
export type CrmWidgetBindActionsCallback =
  CrmWidgetContextWrapper<OriginalBindActionsCallback>

/**
 * Destroy callback - called when widget is disabled
 */
export type CrmWidgetDestroyCallback = CrmWidgetContextWrapper<OriginalDestroyCallback>

/**
 * Init callback - must return true for bind_actions to execute
 */
export type CrmWidgetInitCallback = CrmWidgetContextWrapper<OriginalInitCallback>

/**
 * Leads selected callback
 */
export type CrmWidgetLeadsSelectedCallback =
  CrmWidgetContextWrapper<OriginalLeadsSelectedCallback>

/**
 * Todo selected callback
 */
export type CrmWidgetTodoSelectedCallback =
  CrmWidgetContextWrapper<OriginalTodoSelectedCallback>

/**
 * Contacts selected callback
 */
export type CrmWidgetContactsSelectedCallback =
  CrmWidgetContextWrapper<OriginalContactsSelectedCallback>

/**
 * Digital pipeline settings callback
 */
export type CrmWidgetDpSettingsCallback =
  CrmWidgetContextWrapper<OriginalDpSettingsCallback>

/**
 * Init menu page callback
 */
export type CrmWidgetInitMenuPageCallback =
  CrmWidgetContextWrapper<OriginalInitMenuPageCallback>

/**
 * Link card callback
 */
export type CrmWidgetLinkCardCallback = CrmWidgetContextWrapper<OriginalLinkCardCallback>

/**
 * Load catalog element callback
 */
export type CrmWidgetLoadCatalogElementCallback =
  CrmWidgetContextWrapper<OriginalLoadCatalogElementCallback>

/**
 * Load elements callback
 */
export type CrmWidgetLoadElementsCallback =
  CrmWidgetContextWrapper<OriginalLoadElementsCallback>

/**
 * Load preloaded data callback
 */
export type CrmWidgetLoadPreloadedDataCallback =
  CrmWidgetContextWrapper<OriginalLoadPreloadedDataCallback>

/**
 * On add as source callback
 */
export type CrmWidgetOnAddAsSourceCallback =
  CrmWidgetContextWrapper<OriginalOnAddAsSourceCallback>

/**
 * On salesbot designer save callback
 */
export type CrmWidgetOnSalesbotDesignerSaveCallback =
  CrmWidgetContextWrapper<OriginalOnSalesbotDesignerSaveCallback>

/**
 * On save callback - must return true
 */
export type CrmWidgetOnSaveCallback = CrmWidgetContextWrapper<OriginalOnSaveCallback>

/**
 * Render callback - must return true for widget initialization
 */
export type CrmWidgetRenderCallback = CrmWidgetContextWrapper<OriginalRenderCallback>

/**
 * Salesbot designer settings callback
 */
export type CrmWidgetSalesbotDesignerSettingsCallback =
  CrmWidgetContextWrapper<OriginalSalesbotDesignerSettingsCallback>

/**
 * Settings callback
 */
export type CrmWidgetSettingsCallback = CrmWidgetContextWrapper<OriginalSettingsCallback>
