<p align="center">
  <img src="https://img.icons8.com/color/96/000000/typescript.png" alt="TypeScript" width="80" height="80">
  <h1 align="center">@amodev/interfaces</h1>
</p>

<p align="center">
  <em>Типизированные интерфейсы для AmoCRM API v4 и AmoDEV экосистемы</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@amodev/interfaces"><img src="https://img.shields.io/npm/v/@amodev/interfaces.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://www.npmjs.com/package/@amodev/interfaces"><img src="https://img.shields.io/npm/dm/@amodev/interfaces.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://github.com/devamo/interfaces/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@amodev/interfaces.svg?style=flat-square" alt="License"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3.9+-blue.svg?style=flat-square" alt="TypeScript"></a>
</p>

<br>

## ✨ Особенности

- 🎯 **Полная типизация** — все сущности AmoCRM API v4 с TypeScript типами
- 🔒 **Type-safe** — строгая типизация для исключения ошибок на этапе разработки
- 📦 **Легковесная** — нулевые зависимости в runtime
- 🔄 **Актуальная** — поддержка последней версии AmoCRM API v4
- 🌍 **Интернационализация** — 361 страна с ISO-кодами и русскими названиями
- 🛠️ **Расширяемая** — легко добавлять кастомные поля и сущности
- 📚 **Хорошо документированная** — JSDoc комментарии и примеры использования

## 📦 Установка

```bash
# npm
npm install @amodev/interfaces

# yarn
yarn add @amodev/interfaces

# pnpm
pnpm add @amodev/interfaces
```

## 🚀 Быстрый старт

```typescript
import { AmoLead, AmoContact, AmoCompany } from '@amodev/interfaces'

// Типизированная работа с лидами
const lead: AmoLead = {
  id: 12345,
  name: 'Важная сделка',
  price: 50000,
  responsible_user_id: 1,
  pipeline_id: 1,
  status_id: 142,
  custom_fields_values: [],
  // ... остальные поля
}

// Типизированный API Response
import { AmoLeadsList } from '@amodev/interfaces'

async function fetchLeads(): Promise<AmoLeadsList> {
  const response = await fetch('https://example.amocrm.ru/api/v4/leads')
  return response.json()
}

// Автодополнение и проверка типов работают из коробки!
const leads = await fetchLeads()
leads._embedded.leads.forEach(lead => {
  console.log(lead.name, lead.price)
})
```

## 📖 Использование

### AmoCRM Backend (API v4)

#### Основные сущности

```typescript
import {
  AmoLead,           // Сделка
  AmoContact,        // Контакт
  AmoCompany,        // Компания
  AmoCustomer,       // Покупатель
  AmoUser,           // Пользователь
  AmoAccount,        // Аккаунт
  AmoPipeline,       // Воронка продаж
  AmoCustomField,    // Кастомное поле
} from '@amodev/interfaces'
```

#### Работа с кастомными полями

```typescript
import { AmoEntityCustomField, AmoCustomFieldType } from '@amodev/interfaces'

// Типизированные кастомные поля
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
]
```

#### Пагинированные списки

```typescript
import { AmoLeadsList, AmoContactsList, AmoCompaniesList } from '@amodev/interfaces'

// Все списки содержат метаданные пагинации
const leadsList: AmoLeadsList = {
  _page: 1,
  _links: {
    self: { href: '/api/v4/leads?page=1' },
    next: { href: '/api/v4/leads?page=2' }
  },
  _embedded: {
    leads: [/* массив сделок */]
  }
}
```

### AmoCRM Frontend (Виджеты)

```typescript
import { AmoGlobalObject } from '@amodev/interfaces'

// Типизация глобального объекта AMOCRM в виджетах
declare global {
  interface Window {
    AMOCRM: AmoGlobalObject
  }
}

// Безопасная работа с константами
const userRole = window.AMOCRM.constant('user.role')
```

### AmoDEV Платформа

```typescript
import {
  AmoDevAccount,        // Аккаунт AmoDEV
  AmoDevProduct,        // Продукт
  AmoDevAccountProduct, // Связь аккаунт-продукт
  AmoDevAccountUser,    // Пользователь аккаунта
} from '@amodev/interfaces'

const account: AmoDevAccount = {
  uuid: 'abc-123',
  amoId: 12345,
  ownerId: 1,
  title: 'Мой аккаунт'
}
```

## 🔍 Утилиты

### Страны

```typescript
import { AmoCountries, AmoCountriesIds } from '@amodev/interfaces'

// Union type всех ISO-кодов стран
const countryCode: AmoCountriesIds = 'RU'

// Массив со всеми странами (361 элемент)
const countries = AmoCountries
// [{ id: 'RU', title: 'Россия' }, { id: 'UA', title: 'Украина' }, ...]
```

### Типы полей

```typescript
import {
  AmoCustomFieldType,
  AmoLegacyFieldTypes,
  AmoCustomFieldCode
} from '@amodev/interfaces'

// Современные типы полей (v4)
const fieldType: AmoCustomFieldType = 'multiselect'

// Легаси коды полей (числовые)
const legacyType = AmoLegacyFieldTypes.multiselect // 5

// Системные коды полей
const fieldCode: AmoCustomFieldCode = 'EMAIL'
```

### Типы сущностей

```typescript
import { AmoEntities } from '@amodev/interfaces'

// Union type всех доступных сущностей
const entity: AmoEntities = 'leads' | 'contacts' | 'companies' | 'customers'
```

---

## 📚 Техническая документация

### Структура пакета

```
@amodev/interfaces
├── interfaces/
│   ├── amocrm/           # AmoCRM типы
│   │   ├── backend/      # API v4 Backend типы
│   │   │   └── v4/       # Версия 4 API
│   │   │       ├── Lead.ts
│   │   │       ├── Contact.ts
│   │   │       ├── Company.ts
│   │   │       ├── Customer.ts
│   │   │       ├── User.ts
│   │   │       ├── Account.ts
│   │   │       ├── Pipeline.ts
│   │   │       ├── CustomField.ts
│   │   │       ├── CustomFieldGroup.ts
│   │   │       └── utils.ts
│   │   └── frontend/     # Frontend типы (виджеты)
│   │       └── constants/
│   ├── amodev/           # AmoDEV внутренние типы
│   │   ├── Account.ts
│   │   ├── Product.ts
│   │   ├── AccountProduct.ts
│   │   ├── AccountUser.ts
│   │   └── AccountUserGroup.ts
│   └── base.ts           # Базовые типы
└── index.ts              # Главный экспорт
```

---

## 📋 Справочник моделей

### AmoCRM Backend v4

#### 🎯 `AmoLead` — Сделка

Основная сущность для работы с продажами.

```typescript
type AmoLead = {
  // Идентификация
  id: number | string                      // ID сделки
  name: string                             // Название сделки
  account_id: string | number              // ID аккаунта

  // Финансы
  price: number                            // Бюджет сделки

  // Ответственность
  responsible_user_id: string | number     // ID ответственного
  group_id: string | number                // ID группы

  // Статус и воронка
  pipeline_id: string | number             // ID воронки
  status_id: string | number               // ID статуса

  // Причины и источники
  loss_reason_id: string | number          // ID причины отказа
  source_id: string | number               // ID источника

  // Аудит
  created_by: string | number              // Кто создал
  updated_by: string | number              // Кто обновил
  created_at: string | number              // Время создания (timestamp)
  updated_at: string | number              // Время обновления (timestamp)
  closed_at: string | number               // Время закрытия (timestamp)
  closest_task_at: string | number         // Ближайшая задача (timestamp)

  // Метаданные
  is_deleted: boolean                      // Удалена ли сделка
  score: string | number                   // Скоринг

  // Кастомные поля
  custom_fields_values: AmoEntityCustomField[]

  // HATEOAS ссылки
  _links: {
    self: { href: string }
  }

  // Связи
  _embedded: {
    tags?: Array<{                         // Теги
      id: number | string
      name: string
    }>
    companies?: Array<{                    // Компании
      id: number | string
      _links: { self: { href: string } }
    }>
    contacts?: Array<{                     // Контакты
      id: number | string
      _links: { self: { href: string } }
    }>
  }
}

// Пагинированный список
type AmoLeadsList = AmoApiResponse<AmoLead>
```

**Примеры использования:**

```typescript
// Создание сделки
const newLead: Partial<AmoLead> = {
  name: 'Продажа сайта',
  price: 100000,
  responsible_user_id: 123,
  pipeline_id: 1,
  status_id: 142
}

// Получение списка с пагинацией
const leadsList: AmoLeadsList = await api.get('/leads')
const leads = leadsList._embedded.leads
```

---

#### 👤 `AmoContact` — Контакт

Физическое лицо в CRM.

```typescript
type AmoContact = {
  // Идентификация
  id: number | string                      // ID контакта
  account_id: number | string              // ID аккаунта

  // Персональные данные
  name: string                             // Полное имя
  first_name: string                       // Имя
  last_name: string                        // Фамилия

  // Ответственность
  responsible_user_id: number | string     // ID ответственного
  group_id: number | string                // ID группы

  // Аудит
  created_by: number | string              // Кто создал
  updated_by: number | string              // Кто обновил
  created_at: number | string              // Время создания
  updated_at: number | string              // Время обновления
  closest_task_at: null | number | string  // Ближайшая задача

  // Кастомные поля (email, телефон и т.д.)
  custom_fields_values: AmoEntityCustomField[]

  // HATEOAS ссылки
  _links: {
    self: { href: string }
  }

  // Связи
  _embedded: {
    tags?: Array<{                         // Теги
      id: number | string
      name: string
    }>
    companies?: Array<{                    // Компании
      id: number | string
      _links: { self: { href: string } }
    }>
  }
}

type AmoContactsList = AmoApiResponse<AmoContact>
```

**Особенности:**
- `first_name` и `last_name` автоматически формируют `name`
- Контакт может быть связан с множеством компаний
- Email, телефон и адрес хранятся в `custom_fields_values`

---

#### 🏢 `AmoCompany` — Компания

Юридическое лицо в CRM.

```typescript
type AmoCompany = {
  // Идентификация
  id: number | string                      // ID компании
  name: string                             // Название компании
  account_id: number | string              // ID аккаунта

  // Ответственность
  responsible_user_id: number | string     // ID ответственного
  group_id: number | string                // ID группы

  // Аудит
  created_by: number | string              // Кто создал
  updated_by: number | string              // Кто обновил
  created_at: number | string              // Время создания
  updated_at: number | string              // Время обновления
  closest_task_at: null | number | string  // Ближайшая задача

  // Кастомные поля
  custom_fields_values: AmoEntityCustomField[]

  // HATEOAS ссылки
  _links: {
    self: { href: string }
  }

  // Связи
  _embedded: {
    tags?: Array<{                         // Теги
      id: number | string
      name: string
    }>
  }
}

type AmoCompaniesList = AmoApiResponse<AmoCompany>
```

---

#### 💰 `AmoCustomer` — Покупатель

Покупатель в режиме периодических продаж (подписки, абонементы).

```typescript
type AmoCustomer = {
  // Идентификация
  id: number | string                      // ID покупателя
  account_id: number | string              // ID аккаунта

  // Персональные данные
  name: string                             // Полное имя
  first_name: string                       // Имя
  last_name: string                        // Фамилия

  // Ответственность
  responsible_user_id: number | string     // ID ответственного
  group_id: number | string                // ID группы

  // Статус
  status_id: number                        // ID статуса покупателя
  is_deleted: boolean                      // Удален ли

  // Финансовые метрики
  ltv: number                              // Lifetime Value (общая прибыль)
  purchases_count: number                  // Количество покупок
  average_check: number                    // Средний чек

  // Периодичность
  periodicity: number                      // Периодичность (дни)
  next_price: number                       // Сумма следующей покупки
  next_date: number                        // Дата следующей покупки

  // Аудит
  created_by: number | string              // Кто создал
  updated_by: number | string              // Кто обновил
  created_at: number | string              // Время создания
  updated_at: number | string              // Время обновления
  closest_task_at: null | number | string  // Ближайшая задача

  // Кастомные поля
  custom_fields_values: AmoEntityCustomField[]

  // HATEOAS ссылки
  _links: {
    self: { href: string }
  }

  // Связи
  _embedded: {
    tags?: Array<{                         // Теги
      id: number | string
      name: string
    }>
    companies?: Array<{                    // Компании
      id: number | string
      _links: { self: { href: string } }
    }>
  }
}

type AmoCustomersList = AmoApiResponse<AmoCustomer>
```

**Ключевые метрики покупателя:**
- **LTV** — общая прибыль от клиента за все время
- **purchases_count** — сколько раз покупал
- **average_check** — средний чек
- **periodicity** — как часто покупает (в днях)

---

#### 👨‍💼 `AmoUser` — Пользователь

Сотрудник аккаунта AmoCRM.

```typescript
type AmoUserAccessRight = 'A' | 'D' | 'M' | 'G'
// A - Admin (все)
// D - Department (только своя группа)
// M - Manager (только свои)
// G - Group (группа и подчиненные)

type AmoUser = {
  // Идентификация
  id: number                               // ID пользователя
  name: string                             // ФИО
  email: string                            // Email
  lang: string                             // Язык интерфейса

  // Права доступа
  rights: {
    leads: {                               // Права на сделки
      view: AmoUserAccessRight
      edit: AmoUserAccessRight
      add: AmoUserAccessRight
      delete: AmoUserAccessRight
      export: AmoUserAccessRight
    }
    contacts: {                            // Права на контакты
      view: AmoUserAccessRight
      edit: AmoUserAccessRight
      add: AmoUserAccessRight
      delete: AmoUserAccessRight
      export: AmoUserAccessRight
    }
    companies: {                           // Права на компании
      view: AmoUserAccessRight
      edit: AmoUserAccessRight
      add: AmoUserAccessRight
      delete: AmoUserAccessRight
      export: AmoUserAccessRight
    }
    tasks: {                               // Права на задачи
      edit: AmoUserAccessRight
      delete: AmoUserAccessRight
    }
    mail_access: boolean                   // Доступ к почте
    catalog_access: boolean                // Доступ к каталогам
    status_rights: any                     // Права на статусы
    is_admin: boolean                      // Администратор
    is_free: boolean                       // Бесплатный пользователь
    is_active: boolean                     // Активен
    group_id: any                          // ID группы
    role_id: any                           // ID роли
  }

  // HATEOAS ссылки
  _links: {
    self: { href: string }
  }
}
```

**Уровни доступа:**
- `A` (Admin) — доступ ко всем записям
- `D` (Department) — доступ только к своей группе
- `M` (Manager) — доступ только к своим записям
- `G` (Group) — доступ к группе и подчиненным

---

#### 🏛️ `AmoAccount` — Аккаунт

Настройки и информация об аккаунте AmoCRM.

```typescript
type AmoAccount = {
  // Идентификация
  id: number                               // ID аккаунта
  name: string                             // Название компании
  subdomain: string                        // Поддомен (example)

  // География
  country: AmoCountriesIds                 // ISO-код страны

  // Режимы работы
  customers_mode: 'disabled' | 'enabled'   // Режим покупателей
  is_unsorted_on: boolean                  // Неразобранное включено
  is_loss_reason_enabled: boolean          // Причины отказа включены
  is_helpbot_enabled: boolean              // Helpbot включен
  is_technical_account: boolean            // Технический аккаунт

  // Настройки
  mobile_feature_version: number           // Версия мобильных фич
  contact_name_display_order: number       // Порядок отображения имени
  current_user_id: number                  // ID текущего пользователя

  // Интеграции
  amojo_id?: string                        // ID для AmoCRM Мессенджер
  version?: number                         // Версия аккаунта

  // Локализация названий сущностей
  entity_names?: {
    [entity: string]: {
      [language: string]: {
        singular_form: {                   // Единственное число
          default: string
          genitive?: string                // Родительный падеж
          dative?: string                  // Дательный падеж
          accusative?: string              // Винительный падеж
          instrumental?: string            // Творительный падеж
          prepositional?: string           // Предложный падеж
        }
        plural_form: {                     // Множественное число
          default: string
          genitive?: string
          dative?: string
          accusative?: string
          instrumental?: string
          prepositional?: string
        }
        gender: string                     // Род
      }
    }
  }

  // Аудит
  created_at: number                       // Время создания
  created_by: number                       // Кто создал
  updated_at: number                       // Время обновления
  updated_by: number                       // Кто обновил

  // HATEOAS ссылки
  _links: {
    self: { href: string }
  }

  // Дополнительные данные
  _embedded?: {
    amojo_rights?: {                       // Права мессенджера
      can_direct: boolean
      can_create_groups: boolean
    }
    users_groups?: Array<{                 // Группы пользователей
      id: number
      name: string
    }>
    task_types?: Array<{                   // Типы задач
      id: number
      name: string
      color: string | null
      icon_id: string | null
      code: string | null
    }>
    datetime_settings?: {                  // Настройки даты/времени
      date_pattern: string
      short_date_pattern: string
      short_time_pattern: string
      date_format: string
      time_format: string
      timezone: string
      timezone_offset: string
    }
  }
}
```

---

#### 🔄 `AmoPipeline` — Воронка продаж

Воронка с этапами (статусами) продаж.

```typescript
type AmoPipeline = {
  // Идентификация
  id: number                               // ID воронки
  account_id: number                       // ID аккаунта
  name: string                             // Название воронки

  // Настройки
  sort: number                             // Порядок сортировки
  is_main: boolean                         // Главная воронка
  is_unsorted_on: boolean                  // Неразобранное включено
  is_archive: boolean                      // В архиве
  is_predefined?: boolean                  // Системная воронка

  // Тип
  entity_type: AmoEntities                 // Тип сущности (leads, etc)

  // HATEOAS ссылки
  _links: {
    self: { href: string }
  }

  // Этапы воронки
  _embedded?: {
    statuses?: Array<{
      id: number                           // ID статуса
      name: string                         // Название
      sort: number                         // Порядок
      is_editable: boolean                 // Можно редактировать
      pipeline_id: number                  // ID воронки
      color: string                        // Цвет (hex)
      type: string                         // Тип (success, fail, etc)
      account_id: number                   // ID аккаунта
      _links: {
        self: { href: string }
      }
    }>
  }
}
```

**Типы статусов:**
- Обычные — промежуточные этапы
- `success` — успешное завершение (142)
- `fail` — отказ (143)

---

#### 🎨 `AmoCustomField` — Кастомное поле

Дополнительное поле для сущностей.

```typescript
type AmoCustomField = {
  // Идентификация
  id: number                               // ID поля
  account_id: number                       // ID аккаунта
  name: string                             // Название поля
  code: AmoCustomFieldCode | null          // Системный код (EMAIL, PHONE)

  // Тип и настройки
  type: AmoCustomFieldType                 // Тип поля
  sort: number                             // Порядок сортировки
  is_api_only: boolean                     // Только через API
  group_id: null | string                  // ID группы полей

  // Значения для списков
  enums: null | Array<{
    id: number
    value: string
    sort: number
  }>

  // Обязательность
  required_statuses: Array<{               // В каких статусах обязательно
    pipeline_id: number
    status_id: number
  }>

  // Привязка
  entity_type: AmoEntities                 // К какой сущности относится

  // Напоминания
  remind: null | 'day' | 'week' | 'month'  // Когда напомнить

  // HATEOAS ссылки
  _links: {
    self: { href: string }
  }
}
```

**Типы полей** (`AmoCustomFieldType`):
- `text` — Текст
- `numeric` — Число
- `checkbox` — Флажок
- `select` — Список
- `multiselect` — Мультисписок
- `date` — Дата
- `date_time` — Дата и время
- `url` — Ссылка
- `textarea` — Текстовая область
- `radiobutton` — Переключатель
- `streetaddress` — Адрес
- `smart_address` — Умный адрес
- `birthday` — День рождения
- `legal_entity` — Юр. лицо
- `price` — Цена
- `category` — Категория
- `items` — Товары

**Системные коды** (`AmoCustomFieldCode`):
- `EMAIL` — Email
- `PHONE` — Телефон
- `WEB` — Сайт
- `ADDRESS` — Адрес
- `POSITION` — Должность

---

#### 📁 `AmoCustomFieldGroup` — Группа полей

Группировка кастомных полей.

```typescript
type AmoCustomFieldGroup = {
  id: string | number                      // ID группы
  name: string                             // Название группы
  is_predefined: boolean                   // Системная группа
  entity_type: AmoEntities                 // Тип сущности
  sort: number                             // Порядок сортировки
  _links: {
    self: { href: string }
  }
}
```

---

#### 🔧 `AmoEntityCustomField` — Значение кастомного поля

Структура хранения значений кастомных полей в сущностях.

```typescript
type AmoEntityCustomField = {
  field_id: number                         // ID поля
  field_name: string                       // Название поля
  field_code: AmoCustomFieldCode | null    // Код поля
  field_type: AmoCustomFieldType           // Тип поля

  values: Array<{
    value: string | number | AmoCustomFieldTypeAddress
    enum_id: string | number               // ID значения списка
    enum_code: string | number             // Код значения списка
  }>
}
```

**Пример — Email контакта:**
```typescript
{
  field_id: 123,
  field_name: 'Email',
  field_code: 'EMAIL',
  field_type: 'text',
  values: [
    {
      value: 'client@example.com',
      enum_id: 'WORK',
      enum_code: 'WORK'
    }
  ]
}
```

---

#### 📦 `AmoApiResponse<T>` — Обертка для списков

Стандартная обертка для пагинированных ответов API.

```typescript
type AmoApiResponse<Entity> = {
  _page: number                            // Текущая страница

  _links: {
    self: { href: string }                 // Текущая ссылка
    next: { href: string }                 // Следующая страница
  }

  _embedded: {
    [entity in AmoEntities]: Entity[]      // Массив сущностей
  }
}
```

**Пример:**
```typescript
const response: AmoLeadsList = {
  _page: 2,
  _links: {
    self: { href: '/api/v4/leads?page=2' },
    next: { href: '/api/v4/leads?page=3' }
  },
  _embedded: {
    leads: [
      { id: 1, name: 'Сделка 1', /* ... */ },
      { id: 2, name: 'Сделка 2', /* ... */ }
    ]
  }
}
```

---

### AmoCRM Frontend

#### 🌐 `AmoGlobalObject` — Глобальный объект виджета

```typescript
interface AmoGlobalObject {
  constant: (alias: string) => any         // Получить константу
}
```

**Использование в виджетах:**
```typescript
// Получить роль пользователя
const role = window.AMOCRM.constant('user.role')

// Получить ID пользователя
const userId = window.AMOCRM.constant('user.id')
```

---

### AmoDEV Платформа

#### 🏢 `AmoDevAccount` — Аккаунт AmoDEV

```typescript
interface AmoDevAccount {
  uuid: string                             // UUID аккаунта
  amoId: number                            // ID в AmoCRM
  ownerId: number                          // ID владельца
  title: string                            // Название
}
```

---

#### 📦 `AmoDevProduct` — Продукт

```typescript
interface AmoDevProduct {
  uuid: string                             // UUID продукта
  ownerId: number                          // ID владельца
  title: string                            // Название
  alias: string                            // Алиас (идентификатор)
  description: string                      // Полное описание
  descriptionShort: string                 // Краткое описание
}
```

---

#### 🔗 `AmoDevAccountProduct` — Связь аккаунта и продукта

```typescript
interface AmoDevAccountProduct {
  id: number                               // ID связи
  access: object                           // Права доступа
  settings: object                         // Настройки продукта
  isActive: boolean                        // Активен ли
  isExpired: boolean                       // Истек ли срок
}
```

---

#### 👤 `AmoDevAccountUser` — Пользователь аккаунта

```typescript
interface AmoDevAccountUser {
  group: AmoDevAccountUserGroup            // Группа пользователя
  amoId: number                            // ID в AmoCRM
  token: string                            // Токен доступа
  isOwner: boolean                         // Владелец аккаунта
}
```

---

#### 👥 `AmoDevAccountUserGroup` — Группа пользователей

```typescript
interface AmoDevAccountUserGroup {
  amoId: number                            // ID группы в AmoCRM
}
```

---

### Базовые типы

#### ✅ `StringBoolean` — Строковый boolean

```typescript
enum StringBoolean {
  Y = 'Y',                                 // Да (Yes)
  N = 'N'                                  // Нет (No)
}
```

AmoCRM часто использует строковые булевы значения 'Y'/'N' вместо `true`/`false`.

---

## 🛠️ Разработка

### Сборка проекта

```bash
# Полная сборка (очистка + компиляция)
npm run build

# Только проверка типов (без генерации файлов)
npm run build:check
```

### Структура сборки

```
dist/
├── index.js                  # Скомпилированный JS
├── index.d.ts                # TypeScript декларации
├── index.js.map              # Source maps
└── interfaces/               # Подпапки с интерфейсами
    ├── amocrm/
    ├── amodev/
    └── base.js
```

### TypeScript конфигурация

- **Target:** ES2015
- **Module:** CommonJS
- **Strict mode:** Включен
- **Source maps:** Да
- **Declarations:** Да

---

## 🔗 Полезные ссылки

- 📘 [Документация AmoCRM API](https://www.amocrm.ru/developers/content/crm_platform/api-reference)
- 🏠 [Документация проекта](https://amodev.ru/faq/repositories/interfaces)
- 🐛 [Сообщить об ошибке](https://github.com/devamo/interfaces/issues)
- 📦 [NPM пакет](https://www.npmjs.com/package/@amodev/interfaces)

---

## 📝 Лицензия

MIT License © [Yaroslav Shelomentsev](https://github.com/devamo)

---

## 🤝 Вклад в проект

Мы приветствуем любой вклад в развитие проекта!

1. Fork репозиторий
2. Создайте feature-ветку (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

---

<p align="center">
  Сделано с ❤️ для AmoCRM сообщества
</p>
