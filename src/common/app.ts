import { CrmUserConstant, CrmManager, CrmUserStatus } from './user'
import { CrmAccountConstant } from './account'
import { CrmTaskType } from './pipeline'

/**
 * CRM Notification Types
 */

/**
 * Show Message Parameters
 *
 * Parameters for displaying informational messages.
 */
export interface CrmShowMessageParams {
  /**
   * Message header/title
   */
  header: string

  /**
   * Message text content
   */
  text: string

  /**
   * Timestamp in seconds
   */
  date: number
}

/**
 * Show Message Error Parameters
 *
 * Parameters for displaying error messages.
 */
export interface CrmShowMessageErrorParams {
  /**
   * Error header/title
   */
  header: string

  /**
   * Error text content
   */
  text: string
}

/**
 * Show Notification Parameters
 *
 * Parameters for pop-up notifications.
 */
export interface CrmShowNotificationParams {
  /**
   * Notification header
   */
  header: string

  /**
   * Notification text
   */
  text: string

  /**
   * Entity link configuration
   */
  link?: {
    /**
     * Entity ID
     */
    id: number

    /**
     * Entity type (leads, contacts, companies, customers)
     */
    type: 'leads' | 'contacts' | 'companies' | 'customers'
  }
}

/**
 * Add Error Parameters
 *
 * Parameters for adding errors to notification center.
 */
export interface CrmAddErrorParams {
  /**
   * Error header
   */
  header: string

  /**
   * Error text
   */
  text: string

  /**
   * Timestamp in seconds
   */
  date: number
}

/**
 * Add Call Parameters
 *
 * Parameters for call notifications.
 */
export interface CrmAddCallParams {
  /**
   * Call notification text
   */
  text: string

  /**
   * Related entity
   */
  element: {
    /**
     * Entity ID
     */
    id: number

    /**
     * Entity type
     */
    type: 'lead' | 'contact' | 'company' | 'customer'
  }

  /**
   * Call duration in seconds
   */
  duration: number
}

/**
 * CRM Notifications Manager
 *
 * Interface for managing CRM notifications.
 */
export interface CrmNotifications {
  /**
   * Show informational message
   */
  show_message: (params: CrmShowMessageParams) => void

  /**
   * Show error message
   */
  show_message_error: (params: CrmShowMessageErrorParams) => void

  /**
   * Show pop-up notification
   */
  show_notification: (params: CrmShowNotificationParams) => void

  /**
   * Add error to notification center
   */
  add_error: (params: CrmAddErrorParams) => void

  /**
   * Add call notification
   */
  add_call: (params: CrmAddCallParams) => void
}

/**
 * CRM Constants
 *
 * Available constants that can be accessed via APP.constant(key).
 */
export interface CrmConstants {
  user: CrmUserConstant
  account: CrmAccountConstant
  managers: CrmManager[]
  task_types: CrmTaskType[]
  user_statuses: CrmUserStatus[]
}

/**
 * CRM App Interface
 *
 * Global CRM application object available in widgets and frontend.
 * Available as `APP` in Kommo or `AMOCRM` in AmoCRM.
 *
 * This is the unified interface for both platforms.
 */
export interface CrmApp {
  /**
   * Get base entity type for current context
   */
  getBaseEntity: () => string

  /**
   * Check if current page is an entity card
   */
  isCard: () => boolean

  /**
   * Get current widgets area identifier
   */
  getWidgetsArea: () => string

  /**
   * Current language code
   */
  lang_id: 'en' | 'pt' | 'es' | string

  /**
   * Get CRM constant by key
   */
  constant: <T extends keyof CrmConstants>(key: T) => CrmConstants[T]

  /**
   * Notifications manager
   */
  notifications: CrmNotifications

  /**
   * SDK object for advanced operations
   */
  sdk?: any

  /**
   * Additional data object
   */
  data?: any
}
