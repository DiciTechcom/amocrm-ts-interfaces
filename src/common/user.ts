import { StringBoolean } from './utils'

/**
 * CRM User Access Rights
 *
 * User permission levels: A=All, D=Department, M=Mine, G=Group
 */
export type CrmUserAccessRight = 'A' | 'D' | 'M' | 'G'

/**
 * CRM User (API)
 *
 * Represents a user entity from the REST API.
 * Includes full permissions and access rights.
 */
export type CrmUser = {
  id: number
  name: string
  email: string
  lang: string
  rights: {
    leads: {
      view: CrmUserAccessRight
      edit: CrmUserAccessRight
      add: CrmUserAccessRight
      delete: CrmUserAccessRight
      export: CrmUserAccessRight
    }
    contacts: {
      view: CrmUserAccessRight
      edit: CrmUserAccessRight
      add: CrmUserAccessRight
      delete: CrmUserAccessRight
      export: CrmUserAccessRight
    }
    companies: {
      view: CrmUserAccessRight
      edit: CrmUserAccessRight
      add: CrmUserAccessRight
      delete: CrmUserAccessRight
      export: CrmUserAccessRight
    }
    tasks: {
      edit: CrmUserAccessRight
      delete: CrmUserAccessRight
    }
    mail_access: boolean
    catalog_access: boolean
    status_rights: any
    is_admin: boolean
    is_free: boolean
    is_active: boolean
    group_id: any
    role_id: any
  }
  _links: {
    self: {
      href: string
    }
  }
}

/**
 * CRM User Constant (Frontend)
 *
 * Represents current user information available in the CRM frontend.
 * Used via APP.constant('user') or AMOCRM.constant('user').
 */
export type CrmUserConstant = {
  id: number
  name: string
  login: string
  api_key: string
  personal_mobile: string
  amojo_id: string
  group_mates_ids: number[]
  settings: {
    layout_width: {
      leads: {
        width: number | string
      }
      contacts: {
        width: number | string
      }
      companies: {
        width: number | string
      }
      customers: {
        width: number | string
      }
      unsorted: {
        width: number | string
      }
    }
    feed_filter: {
      leads: {
        linked: number[]
        types: number[]
      }
      contacts: {
        linked: number[]
        types: number[]
      }
    }
    notify_time_before_task: number
    default_task_preset: number | string
  }
}

/**
 * CRM Manager
 *
 * Represents a manager/user in the CRM system.
 * Used via APP.constant('managers') or AMOCRM.constant('managers').
 */
export type CrmManager = {
  id: string | number
  title: string
  option: string
  active: boolean
  login: string
  status: string
  is_admin: StringBoolean
  free_user: StringBoolean
  amojo_id: string
  avatar: string
  group: string
}

/**
 * CRM User Status
 *
 * Represents user online/offline status in the CRM.
 */
export type CrmUserStatus = {
  id: string
  online_status: 'online' | 'offline'
  last_activity_at: number
  call_busy_status: boolean
}
