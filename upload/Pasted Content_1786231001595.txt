# FEATURES INVENTORY

> Gym Management SaaS Platform — Comprehensive Feature Map
> Generated: 2026-08-06 | Database: SQLite (Prisma ORM) | Framework: Next.js 15 App Router

---

## Summary Table

| Category | Total Features | Fully Functional | Partially Functional | UI Only |
|----------|:--------------:|:----------------:|:-------------------:|:-------:|
| Core Operations | 6 | 5 | 0 | 1 |
| Sales & Billing | 8 | 7 | 1 | 0 |
| Scheduling | 3 | 3 | 0 | 0 |
| CRM & Leads | 4 | 4 | 0 | 0 |
| Member Portal | 5 | 5 | 0 | 0 |
| Kiosk | 1 | 1 | 0 | 0 |
| Diet & Nutrition | 3 | 2 | 1 | 0 |
| Exercise & Fitness | 4 | 3 | 0 | 1 |
| Reports & Analytics | 2 | 2 | 0 | 0 |
| Platform Admin | 7 | 6 | 1 | 0 |
| Settings & Configuration | 4 | 3 | 0 | 1 |
| Security & Auth | 5 | 5 | 0 | 0 |
| i18n & Localization | 3 | 3 | 0 | 0 |
| Multi-tenancy | 3 | 3 | 0 | 0 |
| Subscription & Billing | 3 | 3 | 0 | 0 |
| **TOTAL** | **61** | **55** | **3** | **3** |

---

## 1. Core Operations

### Member Management
- **Description:** Full CRUD for gym members — create, list (with active/inactive tabs), view/edit profile, member codes (MEM######), birthday tracking, review toggle
- **Status:** Fully Functional
- **Routes:** /members, /members/new, /members/[member_id], /members/birthdays
- **API:** GET/POST /api/members, GET/PUT/PATCH/DELETE /api/members/[id], GET /api/members?birthday=
- **Key Files:** src/app/(sidebar)/members/page.tsx, src/app/(sidebar)/members/new/page.tsx, src/app/(sidebar)/members/[member_id]/page.tsx, src/app/(sidebar)/members/birthdays/page.tsx

### Attendance Tracking
- **Description:** Check-in members via search selector, view today's attendance list, check-out per record, historical attendance by date
- **Status:** Fully Functional
- **Routes:** /attendance, /attendance/history
- **API:** GET/POST /api/attendance, PATCH/DELETE /api/attendance/[id]
- **Key Files:** src/app/(sidebar)/attendance/page.tsx, src/app/(sidebar)/attendance/history/page.tsx

### Staff Management
- **Description:** CRUD for staff accounts — create with role (ADMIN/MANAGER/TRAINER), activate/deactivate, delete, email uniqueness enforced, plan limits checked
- **Status:** Fully Functional
- **Routes:** /staff
- **API:** GET/POST/PATCH/DELETE /api/staff
- **Key Files:** src/app/(sidebar)/staff/page.tsx

### Service Management
- **Description:** CRUD for services/membership types — name, description, price, duration
- **Status:** Fully Functional
- **Routes:** /services, /services/new
- **API:** GET/POST /api/services, GET/PUT/DELETE /api/services/[id]
- **Key Files:** src/app/(sidebar)/services/page.tsx, src/app/(sidebar)/services/new/page.tsx

### To-Do / Task Manager
- **Description:** Personal task list — add/toggle/delete tasks, grouped by active/completed, clear completed
- **Status:** Fully Functional (client-side only, localStorage persistence)
- **Routes:** /todo
- **API:** None (localStorage)
- **Key Files:** src/app/(sidebar)/todo/page.tsx

### Fitness Record (Legacy Sale Form)
- **Description:** Alternative sale creation form — appears to be a legacy/early version of the sales page. Posts to /api/sales
- **Status:** UI Only (duplicate of /sales/new, not linked in sidebar navigation)
- **Routes:** /fitness-record
- **API:** GET /api/members, GET /api/services, POST /api/sales
- **Key Files:** src/app/(sidebar)/fitness-record/page.tsx

---

## 2. Sales & Billing

### Sales Management
- **Description:** Sales listing with status badges (active/frozen/suspended), freeze/suspend/activate with reason dialogs, WhatsApp invoice sharing, delete sales
- **Status:** Fully Functional
- **Routes:** /sales
- **API:** GET/PATCH/DELETE /api/sales/[id], GET /api/sales?expand=true
- **Key Files:** src/app/(sidebar)/sales/page.tsx

### New Sale
- **Description:** Create sale — select member, service (auto-fills price), start date, paid amount, discount, shows due amount
- **Status:** Fully Functional
- **Routes:** /sales/new
- **API:** POST /api/sales, GET /api/members, GET /api/services
- **Key Files:** src/app/(sidebar)/sales/new/page.tsx

### Sales Follow-ups
- **Description:** Membership expiry follow-ups with tabs (Today, Tomorrow, 5 days, 7 days, Expired), WhatsApp renewal message sender
- **Status:** Fully Functional
- **Routes:** /sales/followups
- **API:** GET /api/sales?expiring=N, GET /api/sales?ending=-1
- **Key Files:** src/app/(sidebar)/sales/followups/page.tsx

### Pending Payments (Component)
- **Description:** Pending payment list with WhatsApp payment reminder, pay partial/full amounts, used on dashboard and dedicated page
- **Status:** Fully Functional
- **Routes:** /sales/pending-payments
- **API:** GET /api/sales/pending, POST /api/sales/[id]
- **Key Files:** src/app/(sidebar)/sales/pending-payments/PendingPayments.tsx, src/app/(sidebar)/sales/pending-payments/PayPendingButton.tsx

### Pending Payments Page (Shell)
- **Description:** Dedicated pending payments page — renders only a title and separator, actual content is in the PendingPayments component
- **Status:** Partially Functional (page shell with no content; component works on dashboard)
- **Routes:** /sales/pending-payments
- **API:** None (page itself)
- **Key Files:** src/app/(sidebar)/sales/pending-payments/page.tsx

### Sales Invoices Page (Legacy)
- **Description:** Legacy invoices listing — fetches member list, has commented-out ItemSelector, links to create new sale
- **Status:** Partially Functional (UI scaffold with commented-out code)
- **Routes:** /sales/invoices
- **API:** GET /api/members
- **Key Files:** src/app/(sidebar)/sales/invoices/page.tsx

### Plan Management
- **Description:** Full CRUD for subscription plans — card grid, create/edit/delete dialogs, plan types (Monthly/Quarterly/Annual/Unlimited/Custom), features list
- **Status:** Fully Functional
- **Routes:** /plans
- **API:** GET/POST /api/plans, PATCH/DELETE /api/plans/[id]
- **Key Files:** src/app/(sidebar)/plans/page.tsx

### Invoice Management
- **Description:** Invoice listing (all/pending tabs), KPI cards (total/revenue/outstanding), record partial payments (CASH/UPI/CARD/BANK_TRANSFER/OTHER), download PDF
- **Status:** Fully Functional
- **Routes:** /invoices
- **API:** GET/POST /api/invoices, GET /api/invoices/[id]/pdf
- **Key Files:** src/app/(sidebar)/invoices/page.tsx

---

## 3. Scheduling

### Class & Session Management
- **Description:** Create classes (with trainer/location), create sessions (date/time/capacity), view upcoming sessions with booking counts, click to view bookings per session. Supports recurring session creation (daily/weekly/biweekly/monthly, up to 52 occurrences)
- **Status:** Fully Functional
- **Routes:** /bookings
- **API:** GET/POST /api/bookings/classes, GET/POST /api/bookings/sessions, GET/POST /api/bookings/book, GET/POST /api/bookings
- **Key Files:** src/app/(sidebar)/bookings/page.tsx

### Booking Calendar
- **Description:** Monthly calendar view of class sessions — navigate months, click sessions for details dialog
- **Status:** Fully Functional
- **Routes:** /bookings/calendar
- **API:** GET /api/bookings/sessions?month=
- **Key Files:** src/app/(sidebar)/bookings/calendar/page.tsx

### Subscription Management
- **Description:** Member subscription management — list all, create new (member+plan+start date), cancel auto-renew
- **Status:** Fully Functional
- **Routes:** /subscriptions
- **API:** GET/POST/PATCH /api/subscriptions, GET /api/plans
- **Key Files:** src/app/(sidebar)/subscriptions/page.tsx

---

## 4. CRM & Leads

### Enquiry Management
- **Description:** Enquiry listing table (name, phone, followup date, type, message), create enquiries with type (walkin/call/instagram/whatsapp)
- **Status:** Fully Functional
- **Routes:** /enquiries, /enquiries/new
- **API:** GET/POST /api/enquiries, GET/DELETE /api/enquiries/[id]
- **Key Files:** src/app/(sidebar)/enquiries/page.tsx, src/app/(sidebar)/enquiries/new/page.tsx

### Enquiry Follow-ups
- **Description:** Filterable enquiry follow-ups by date picker
- **Status:** Fully Functional
- **Routes:** /enquiries/followups
- **API:** GET /api/enquiries?followup=
- **Key Files:** src/app/(sidebar)/enquiries/followups/page.tsx

### Lead Tracking & Scoring
- **Description:** Lead scoring — visual funnel (New / Contacted / Converted / Lost), KPI cards (total, conversion rate, pipeline, lost)
- **Status:** Fully Functional (read-only display, no lead status update UI)
- **Routes:** /leads
- **API:** GET /api/leads
- **Key Files:** src/app/(sidebar)/leads/page.tsx

### CRM (Member Notes, Interactions, Health)
- **Description:** Member CRM — search member, view tabs: Notes (add/view/delete), Interactions (call/email/SMS/in-person/WhatsApp log), Health & Goals (height, weight, body fat, emergency contact, goals, diet preferences)
- **Status:** Fully Functional
- **Routes:** /crm
- **API:** GET/POST/DELETE /api/crm/notes, GET/POST /api/crm/interactions, GET/POST /api/crm/health
- **Key Files:** src/app/(sidebar)/crm/page.tsx

---

## 5. Member Portal

### Member Dashboard
- **Description:** Self-service portal with 4 tabs: Overview (stats cards, profile card, active memberships), Memberships (active + expired sales), Attendance (scrollable history), Classes/Bookings (upcoming booked sessions). Profile edit dialog.
- **Status:** Fully Functional
- **Routes:** /user
- **API:** GET /api/user/details, PATCH /api/user/profile
- **Key Files:** src/app/user/page.tsx

### Member Change Password
- **Description:** Password change form — old password, new password, confirm password with validation
- **Status:** Fully Functional
- **Routes:** /user/change-password
- **API:** POST /api/auth/change-password
- **Key Files:** src/app/user/change-password/page.tsx

### Exercise Library (Member View)
- **Description:** Browse all exercises in a card grid layout
- **Status:** Fully Functional
- **Routes:** /user/workout
- **API:** GET /api/exercises
- **Key Files:** src/app/user/workout/page.tsx, src/components/WorkoutsList.tsx

### Exercise Detail (Member View)
- **Description:** Detailed exercise view — name, category/level/force badges, image gallery, equipment/mechanic/difficulty card, targeted muscles, step-by-step instructions, pro tips
- **Status:** Fully Functional
- **Routes:** /user/workout/[exercise_id]
- **API:** GET /api/exercises/[id]
- **Key Files:** src/app/user/workout/[exercise_id]/page.tsx

### Public Invoice View
- **Description:** Public invoice page (no auth required) — formatted invoice with gym branding, member details, payment summary, print button (react-to-print), share button (Web Share API)
- **Status:** Fully Functional (hardcoded gym branding — not dynamic per organization)
- **Routes:** /invoices/[sale_id]
- **API:** GET /api/sales/[id]?expand=true
- **Key Files:** src/app/(open)/invoices/[sale_id]/page.tsx

---

## 6. Kiosk

### Self-Service Check-In Kiosk
- **Description:** Two-panel kiosk — Left: search by code/phone, check-in button. Right: today's check-in list (auto-refreshes every 30s). Creates Attendance + KioskCheckin records. No auth guard.
- **Status:** Fully Functional
- **Routes:** /kiosk
- **API:** POST /api/kiosk, GET /api/kiosk, GET /api/kiosk/lookup
- **Key Files:** src/app/kiosk/page.tsx

---

## 7. Diet & Nutrition

### Food Items Management
- **Description:** Food items CRUD — name, calories, protein, carbs, fats, recipe. Create dialog, delete action, listing table
- **Status:** Fully Functional
- **Routes:** /diet/food-items
- **API:** GET/POST /api/food-items, GET/DELETE /api/food-items/[id]
- **Key Files:** src/app/(sidebar)/diet/food-items/page.tsx, src/app/(sidebar)/diet/food-items/Create-food.tsx

### Diet Creation
- **Description:** Create diet entry — select member, date, description, diabetic/blood pressure radio selects. **Bug:** posts to /api/sales instead of a diet-specific API
- **Status:** Partially Functional (posts to wrong API endpoint — sales instead of diet)
- **Routes:** /diet/new
- **API:** GET /api/members, GET /api/services, POST /api/sales (should be diet API)
- **Key Files:** src/app/(sidebar)/diet/new/page.tsx

### Diet Hub (Links Page)
- **Description:** Hub page with navigation links to "Manage Food Items" and "New Diet"
- **Status:** UI Only (just links, no data)
- **Routes:** /diet
- **API:** None
- **Key Files:** src/app/(sidebar)/diet/page.tsx

---

## 8. Exercise & Fitness

### Exercise Library (Admin Import)
- **Description:** Developer utility — bulk seed exercises from exercises.json into DB via API. Single "Test" button. Not a user-facing feature.
- **Status:** UI Only (developer tool, not production feature)
- **Routes:** /exercise-iput
- **API:** POST /api/exercises (bulk)
- **Key Files:** src/app/(sidebar)/exercise-iput/page.tsx, src/app/(sidebar)/exercise-iput/exercises.json

### Exercise Library (Data)
- **Description:** Exercise database — 800+ exercises with name, category, level, force, equipment, muscles (primary/secondary), instructions, images. Seeded from JSON. API supports single and bulk creation.
- **Status:** Fully Functional (backend + member-facing UI)
- **Routes:** /user/workout, /user/workout/[exercise_id]
- **API:** GET/POST /api/exercises, GET /api/exercises/[id]
- **Key Files:** src/app/api/exercises/route.ts, public/exercises/*.json, public/exercises/*/

### Fitness Calculators
- **Description:** Three client-side calculators — BMI (Body Mass Index), BMR (Basal Metabolic Rate), WHR (Waist-to-Hip Ratio). Pure computation, no API calls.
- **Status:** Fully Functional
- **Routes:** /tools
- **API:** None (client-side calculations)
- **Key Files:** src/app/(sidebar)/tools/page.tsx, src/app/(sidebar)/tools/_components/BMICalculator.tsx, BMRCalculator.tsx, WHRCalculator.tsx

### Rank Progression System
- **Description:** Create ranks (name, level, color, description), award ranks to members (search), award history table, delete ranks/rankings
- **Status:** Fully Functional
- **Routes:** /ranks
- **API:** GET/POST/PUT/DELETE /api/ranks, GET/POST/DELETE /api/rankings
- **Key Files:** src/app/(sidebar)/ranks/page.tsx

---

## 9. Reports & Analytics

### Analytics Dashboard
- **Description:** Advanced analytics — 6 KPI cards (revenue, outstanding, active members, retention, attendance, churn), revenue trend bar chart, attendance trend, service revenue breakdown, member tenure distribution, payment methods, staff performance, location comparison, gender distribution. Filterable by location and period.
- **Status:** Fully Functional
- **Routes:** /analytics
- **API:** GET /api/analytics?locationId=&period=
- **Key Files:** src/app/(sidebar)/analytics/page.tsx

### Reports & Export
- **Description:** Quick export (CSV/JSON) for members/revenue/attendance/subscriptions/invoices, save custom reports, delete saved reports, location filter
- **Status:** Fully Functional
- **Routes:** /reports
- **API:** GET/POST/DELETE /api/reports, POST /api/reports/export
- **Key Files:** src/app/(sidebar)/reports/page.tsx

---

## 10. Platform Admin (SUPER_ADMIN)

### Admin Dashboard
- **Description:** Platform overview — 4 stat cards (Total Orgs, Members, Staff, Revenue), per-organization table, recent audit logs
- **Status:** Fully Functional
- **Routes:** /admin
- **API:** GET /api/admin/stats
- **Key Files:** src/app/admin/(panel)/page.tsx

### Tenant Management
- **Description:** Organization CRUD — list with search/filter/pagination, create new org+admin, view detail (stats, subscription, billing, actions), edit org, delete org (cascades all data)
- **Status:** Fully Functional
- **Routes:** /admin/tenants, /admin/tenants/new, /admin/tenants/[orgId], /admin/tenants/[orgId]/edit
- **API:** GET/POST /api/admin/tenants, GET/PATCH/DELETE /api/admin/tenants/[orgId]
- **Key Files:** src/app/admin/(panel)/tenants/page.tsx, src/app/admin/(panel)/tenants/new/page.tsx, src/app/admin/(panel)/tenants/[orgId]/page.tsx, src/app/admin/(panel)/tenants/[orgId]/edit/page.tsx

### Billing Center
- **Description:** Platform-wide billing — stats summary, quick/advanced filters (status, period, date range), search, records table with mark paid/refund actions, create billing record dialog, org status panels, pagination
- **Status:** Fully Functional
- **Routes:** /admin/billing
- **API:** GET /api/admin/billing-center, GET /api/admin/billing-center/org-panels, POST /api/admin/billing-records, PATCH /api/admin/billing-records/[id]
- **Key Files:** src/app/admin/(panel)/billing/page.tsx

### Platform Audit Logs
- **Description:** Global audit log viewer — filter by action type (CREATE/UPDATE/DELETE/LOGIN), color-coded badges, pagination
- **Status:** Fully Functional
- **Routes:** /admin/audit-logs
- **API:** GET /api/admin/audit-logs
- **Key Files:** src/app/admin/(panel)/audit-logs/page.tsx

### Technical Logs (App Logs)
- **Description:** Application log viewer — reads logs/app.log, tail count selector (50-500), auto-refresh toggle (5s), search, level filter badges with counts, terminal-style dark display
- **Status:** Fully Functional
- **Routes:** /admin/logs
- **API:** GET /api/logs?tail=N
- **Key Files:** src/app/admin/(panel)/logs/page.tsx

### Platform Settings
- **Description:** Platform-wide config — Platform Name, Support Email/Phone, Default Plan Type, Max Organizations, Platform Currency selector. **Limitation:** persists to localStorage only, no server-side API.
- **Status:** Partially Functional (no server persistence — settings lost on localStorage clear or different browser)
- **Routes:** /admin/settings
- **API:** None (localStorage only)
- **Key Files:** src/app/admin/(panel)/settings/page.tsx

### Subscription Lifecycle Management
- **Description:** Per-tenant subscription control — change plan, extend trial (7/14/30/60/90 days), pause, resume, cancel. Usage meters (members/staff/storage). Part of tenant detail page.
- **Status:** Fully Functional
- **Routes:** /admin/tenants/[orgId] (integrated)
- **API:** PATCH /api/admin/subscriptions/[orgId], POST .../extend-trial, POST .../resume, POST .../cancel, POST .../pause
- **Key Files:** src/app/admin/(panel)/tenants/[orgId]/page.tsx

---

## 11. Settings & Configuration

### Organization Settings
- **Description:** Gym profile settings — name, address, city, phone, email, currency selector (multi-currency support)
- **Status:** Fully Functional
- **Routes:** /settings/organization
- **API:** GET/PATCH /api/settings/organization
- **Key Files:** src/app/(sidebar)/settings/organization/page.tsx

### Org Subscription View
- **Description:** Current subscription details — plan info, usage meters (members/staff/storage), billing history table, link to upgrade
- **Status:** Fully Functional
- **Routes:** /settings/subscription
- **API:** GET /api/org-subscriptions/current, GET /api/organizations/[orgId]/usage, GET /api/org-subscriptions/current/billing
- **Key Files:** src/app/(sidebar)/settings/subscription/page.tsx

### Plan Upgrade
- **Description:** Plan comparison cards with pricing, feature lists, member/staff limits — upgrade via mailto: link to support
- **Status:** Fully Functional
- **Routes:** /settings/subscription/upgrade
- **API:** GET /api/plans, GET /api/org-subscriptions/current
- **Key Files:** src/app/(sidebar)/settings/subscription/upgrade/page.tsx

### Audit Log Viewer (Org-level)
- **Description:** Organization-scoped audit log viewer — filter by entity type (Member, Sales, Services, Staff, Enquiry, Attendance), shows date, staff, entity, action, details
- **Status:** Fully Functional
- **Routes:** /audit-logs
- **API:** GET /api/audit-logs?entity=&limit=
- **Key Files:** src/app/(sidebar)/audit-logs/page.tsx

---

## 12. Security & Auth

### Staff Authentication
- **Description:** Staff/gym owner login via email+password, cookie-based session (staff_session), role-based redirect (SUPER_ADMIN to /admin, others to /)
- **Status:** Fully Functional
- **Routes:** /staff-login
- **API:** POST /api/auth/staff-login, GET/DELETE /api/auth/staff-session
- **Key Files:** src/app/staff-login/page.tsx, src/lib/auth.ts

### Member Authentication
- **Description:** Member login via phone/email/memberCode + password, cookie-based session (member_session, 7-day expiry)
- **Status:** Fully Functional
- **Routes:** /login
- **API:** POST /api/auth/member-login
- **Key Files:** src/app/login/page.tsx, src/components/login-form.tsx

### Organization Registration
- **Description:** Self-service registration — gym name, owner details, plan selector (FREE/PRO/ENTERPRISE), creates Organization + Staff (ADMIN) + OrgSubscription (14-day trial)
- **Status:** Fully Functional
- **Routes:** /register
- **API:** POST /api/auth/register
- **Key Files:** src/app/register/page.tsx

### Middleware Auth Guard
- **Description:** Next.js middleware enforcing cookie-based auth — public paths whitelist, staff_session for API routes, member_session for /api/user/*, redirects unauthenticated to login, request logging
- **Status:** Fully Functional
- **Routes:** All routes (middleware)
- **API:** N/A (middleware)
- **Key Files:** src/middleware.ts

### RBAC Permission System
- **Description:** Role-based access control with 5 roles (SUPER_ADMIN, ADMIN, MANAGER, TRAINER, MEMBER), 40+ permission keys covering all resources, hierarchical role system
- **Status:** Fully Functional
- **Routes:** N/A (infrastructure)
- **API:** Used by all protected API routes
- **Key Files:** src/lib/auth.ts

---

## 13. i18n & Localization

### English / Arabic Translations
- **Description:** Full bilingual support via next-intl — 726-line translation files for both English and Arabic, covering all UI strings
- **Status:** Fully Functional
- **Routes:** All routes
- **API:** N/A
- **Key Files:** messages/en.json, messages/ar.json

### RTL Layout Support
- **Description:** Arabic locale renders right-to-left layout — sidebar flips sides, text alignment adjusts, html dir/lang attributes set dynamically
- **Status:** Fully Functional
- **Routes:** All routes
- **API:** N/A
- **Key Files:** src/app/layout.tsx, src/components/app-sidebar.tsx

### Locale Switcher
- **Description:** Client component to switch between English and Arabic — stores preference in NEXT_LOCALE cookie, available on login and admin pages
- **Status:** Fully Functional
- **Routes:** /login, /admin/login, /register, /staff-login
- **API:** N/A (cookie-based)
- **Key Files:** src/components/locale-switcher.tsx, src/i18n/config.ts, src/i18n/request.ts

---

## 14. Multi-tenancy

### Organization Data Isolation
- **Description:** All API routes scope queries by organizationId from the staff session — members, sales, attendance, plans, etc. are org-scoped. 37 Prisma models have organizationId.
- **Status:** Fully Functional
- **Routes:** All sidebar routes
- **API:** All /api/ routes (except admin and public)
- **Key Files:** src/lib/auth.ts (getOrgId), all API route files

### Multi-Location Support
- **Description:** Multiple locations per organization — create locations, assign members/staff, location-aware analytics and attendance
- **Status:** Fully Functional
- **Routes:** /locations
- **API:** GET/POST /api/locations, GET/PUT /api/locations/[id], GET /api/locations/public
- **Key Files:** src/app/(sidebar)/locations/page.tsx

### Platform Admin Tenant Management
- **Description:** SUPER_ADMIN can create, view, edit, suspend/reactivate, and delete organizations with full data cascade
- **Status:** Fully Functional
- **Routes:** /admin/tenants/*
- **API:** GET/POST/PATCH/DELETE /api/admin/tenants/*
- **Key Files:** src/app/admin/(panel)/tenants/

---

## 15. Subscription & Billing

### Plan Limits Enforcement
- **Description:** Checks member/staff/storage counts against plan limits before creation — returns allowed/denied with current count and limit. Used by member and staff creation endpoints.
- **Status:** Fully Functional
- **Routes:** N/A (infrastructure)
- **API:** Used by POST /api/members, POST /api/staff
- **Key Files:** src/lib/plan-limits.ts

### Subscription Write Access Gate
- **Description:** Blocks write operations (create member, sale, etc.) when org subscription is CANCELLED, EXPIRED, or PAUSED. Auto-expires trials past end date.
- **Status:** Fully Functional
- **Routes:** N/A (infrastructure)
- **API:** Used by POST /api/members, POST /api/sales
- **Key Files:** src/lib/subscription.ts

### Dynamic Currency System
- **Description:** Multi-currency support — per-organization currency (EGP/USD stored in DB), platform-level currency (localStorage), useCurrency() client hook, formatCurrency() utility, PDF invoice currency
- **Status:** Fully Functional
- **Routes:** /settings/organization, /admin/settings, all financial pages
- **API:** GET/PATCH /api/settings/organization (returns/saves currency)
- **Key Files:** src/lib/currency.ts, src/hooks/use-currency.ts, src/hooks/use-platform-currency.ts

---

## 16. Other Features

### Marketing Campaigns
- **Description:** Create campaigns (name, type, target, subject, body with {{member_name}} template), execute draft campaigns, view sent/opened counts
- **Status:** Fully Functional
- **Routes:** /campaigns
- **API:** GET/POST /api/campaigns
- **Key Files:** src/app/(sidebar)/campaigns/page.tsx

### Notification System
- **Description:** Notification log viewer — table showing date, recipient, subject, type, delivery status. Templates and sending via notification action layer.
- **Status:** Fully Functional
- **Routes:** /notifications
- **API:** GET /api/notifications?type=logs
- **Key Files:** src/app/(sidebar)/notifications/page.tsx, src/action/notification.action.ts

### Integrations (API Keys & Webhooks)
- **Description:** API key management (create with `gym_` prefix, view, delete/revoke) + webhook management (create with URL + events, `whsec_` secret, view success/fail counts, delete)
- **Status:** Fully Functional
- **Routes:** /integrations
- **API:** GET/POST/DELETE /api/integrations/keys, GET/POST/DELETE /api/integrations/webhooks
- **Key Files:** src/app/(sidebar)/integrations/page.tsx

### Trainer Panel
- **Description:** Trainer dashboard — links to assignments and member attendance, shows assignment count badge. Assignments table with remove action.
- **Status:** Fully Functional
- **Routes:** /trainer, /trainer/assignments
- **API:** GET/DELETE /api/assignments, GET /api/auth/staff-session
- **Key Files:** src/app/(sidebar)/trainer/page.tsx, src/app/(sidebar)/trainer/assignments/page.tsx

### PDF Invoice Generation
- **Description:** Server-side PDF generation via pdfkit — formatted A4 invoice with gym branding, line items, payment history, dynamic currency, status badge. Returns binary PDF buffer.
- **Status:** Fully Functional
- **Routes:** /invoices (download action)
- **API:** GET /api/invoices/[id]/pdf
- **Key Files:** src/lib/pdf-generate.ts

### Audit Logging
- **Description:** Every write operation (create/update/delete/login) logs to AuditLog table — staff ID, org ID, action, entity, entity ID, details. Silently swallows failures.
- **Status:** Fully Functional
- **Routes:** N/A (infrastructure)
- **API:** All write API routes call auditLog()
- **Key Files:** src/lib/audit.ts

### Application Logging
- **Description:** Dual-output logger (console + file) — INFO/WARN/ERROR/DEBUG/REQ levels, 5MB log rotation (keeps last 3 rotated files), works in both Edge Runtime (console only) and Node.js
- **Status:** Fully Functional
- **Routes:** N/A (infrastructure)
- **API:** Used by middleware and /api/logs
- **Key Files:** src/lib/logger.ts

### Dark/Light Theme
- **Description:** Theme toggle supporting dark and light modes — persisted in localStorage, applied via ThemeProvider
- **Status:** Fully Functional
- **Routes:** All routes
- **API:** N/A
- **Key Files:** src/components/theme-provider.tsx, src/components/custom/theme-toggle.tsx

### PWA Manifest
- **Description:** Progressive Web App manifest — enables installability on mobile devices
- **Status:** Fully Functional
- **Routes:** N/A
- **API:** N/A
- **Key Files:** src/app/manifest.json

### WhatsApp Integration
- **Description:** WhatsApp message sharing for birthday greetings, membership renewal reminders, and invoice sharing — opens WhatsApp Web/App with pre-filled messages
- **Status:** Fully Functional (uses wa.me links)
- **Routes:** /members/birthdays, /sales, /sales/followups
- **API:** N/A (client-side wa.me links)
- **Key Files:** src/app/(sidebar)/members/birthdays/page.tsx, src/app/(sidebar)/sales/page.tsx, src/app/(sidebar)/sales/followups/page.tsx

---

## Database Schema Summary

**37 Prisma Models:**
Organization, Location, Staff, Member, Services, Sales, Attendance, FitnessRecord, Enquiry, ToDo, FoodItems, Exercise, Diet, DietFoodItem, SubscriptionPlan, Subscription, OrgSubscription, Invoice, BillingRecord, Payment, Refund, NotificationTemplate, NotificationLog, Campaign, CampaignLog, Lead, AuditLog, TrainerMemberAssignment, KioskCheckin, Report, Rank, MemberRank, BookingClass, ClassSession, SessionBooking, MemberNote, MemberInteraction, MemberHealthProfile, ApiKey, Webhook

**8 Enums:**
Gender, EnquiryType, MembershipStatus, OrgStatus, OrgPlanType, SubscriptionStatus, BillingStatus, BillingPeriod, Role

**Key Relationships:**
- Organization → Staff, Location, Member, Sales, Attendance, and 20+ other models (multi-tenant isolation)
- Member → Sales, Attendance, MemberNote, MemberInteraction, MemberHealthProfile, MemberRank, SessionBooking
- BookingClass → ClassSession → SessionBooking (class booking system)
- OrgSubscription → Organization (1:1), BillingRecord → Organization
- SubscriptionPlan → Subscription, OrgSubscription (plan definitions)

---

## API Endpoints Summary

| Category | Route Files | HTTP Methods | Distinct Endpoints |
|----------|:-----------:|:------------:|:------------------:|
| Authentication | 6 | GET, POST, DELETE | 6 |
| Members | 2 | GET, POST, PUT, PATCH, DELETE | 5 |
| Sales | 3 | GET, POST, PATCH, DELETE | 8 |
| Attendance | 2 | GET, POST, PATCH, DELETE | 4 |
| Plans | 2 | GET, POST, PATCH, DELETE | 5 |
| Invoices | 3 | GET, POST | 5 |
| CRM | 3 | GET, POST, DELETE | 6 |
| Analytics/Reports | 3 | GET, POST, DELETE | 6 |
| Admin (Platform) | 11 | GET, POST, PATCH, DELETE | 17 |
| Org/Settings | 3 | GET, PATCH | 5 |
| Exercises | 2 | GET, POST | 3 |
| Notifications | 1 | GET, POST | 2 |
| Enquiries | 2 | GET, POST, DELETE | 4 |
| Leads/Campaigns | 2 | GET, POST, PATCH | 4 |
| Ranks/Rankings | 2 | GET, POST, PUT, DELETE | 7 |
| Subscriptions | 1 | GET, POST, PATCH | 3 |
| Staff | 1 | GET, POST, PATCH, DELETE | 4 |
| Locations | 3 | GET, POST, PUT | 5 |
| Services | 2 | GET, POST, PUT, DELETE | 5 |
| Food Items | 2 | GET, POST, DELETE | 3 |
| Integrations | 2 | GET, POST, DELETE | 6 |
| Kiosk | 2 | GET, POST | 3 |
| Assignments | 1 | GET, POST, DELETE | 3 |
| Bookings | 4 | GET, POST, PUT, DELETE | 9 |
| Org Subscriptions | 3 | GET, POST | 4 |
| User Portal | 2 | GET, PATCH | 2 |
| Dashboard/Audit | 2 | GET | 2 |
| Dev Logs | 1 | GET | 1 |
| **TOTAL** | **62** | **7 methods** | **~102** |

---

## Known Issues & Notes

1. **Diet creation posts to /api/sales** instead of a diet-specific API (bug in /diet/new)
2. **Public invoice page has hardcoded gym branding** ("Synergy Fitness & Wellness Club") — not dynamic per organization
3. **Platform admin settings persist to localStorage only** — no server-side API, settings lost on different browser/clear
4. **Member portal auth is client-side only** — uses localStorage `member_id` check, no server session validation in layout
5. **Password fields use `type="text"`** in member login form and change-password page — passwords visible as text (UX bug)
4. **4 legacy components** in src/app/user/_components/ (Header, UserDetails, Sales, AttendanceSum) are no longer imported
6. **Sales invoices page** (/sales/invoices) has commented-out code — appears to be an unfinished redesign
7. **Fitness record page** (/fitness-record) duplicates /sales/new functionality, not linked in sidebar navigation
8. **Exercise import page** (/exercise-iput) is a developer utility, not a production feature
9. **Kiosk has no auth guard** — accessible without authentication
10. **Storage usage** in plan limits is hardcoded to 0 (TODO in plan-limits.ts)