# gym-inventory-v2 — Full B2C Feature Inventory


> **Purpose:** Complete feature inventory of the Gym Management Platform, written for the marketing website that sells this app to **gym owners**. Every item below is live in the product today — verified against routes, APIs, database models, and the feature-flag registry.
>
> _Last updated: 2026-08-25 · Source of truth: `src/app`, `prisma/schema.prisma` (44 models), `scripts/seed-feature-toggles.ts` (40 togglable features)_


---


## The Pitch (hero material)


**Run your entire gym from one screen — and give your members an app experience they'll brag about.**


- 📊 **Know your numbers** — revenue, retention, churn, outstanding balances, live on one dashboard
- 🔁 **Stop member churn before it happens** — expiry follow-ups, enquiry pipelines, birthday & renewal WhatsApp messages
- 💪 **800+ exercises, rank progression, member portal & self-service kiosk** — a modern experience that sells memberships for you
- 🏋️ **Built for real gyms** — multi-branch support, Arabic + English, dark mode, role-based staff access
- 🧩 **Modular** — turn any module on/off per location or plan; you only pay for what you use


**By the numbers:** 15+ modules · 40+ individually toggleable features · 800+ exercise library · unlimited members, staff & branches · bilingual EN/AR · light/dark themes.


---


## Module-by-Module Inventory


### 1. Core Operations


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Member Management** | Full member profiles with auto-generated member codes (e.g. DEFG-1000), photos/barcodes ready, addresses, contact info, join dates, age tracking | Your front desk can register a new member in under 30 seconds |
| **Attendance Tracking** | One-click check-in/out, today's board + full history, per-member visit counts | Proof of engagement — see exactly who's active and who's slipping away |
| **Staff Management** | Unlimited staff accounts with 4 roles (Owner/Admin, Manager, Trainer) and fine-grained permissions down to individual actions | Give trainers limited access; nothing sensitive leaks |
| **Service Management** | Define any service/membership type with pricing, duration and linked plans | Sell anything you offer — classes, pool, PT sessions |
| **To-Do / Task Manager** | Personal task list for daily ops | Nothing falls through the cracks during rush hour |


### 2. Sales & Billing *(manual payment recording — no gateway needed)*


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Sales Management** | Every membership sale in one ledger, with freeze/suspend/activate actions | Full control over every contract status |
| **New Sale Flow** | Pick member + service + payment in one guided screen; discounts supported | Fast checkout at the front desk |
| **Sales Follow-ups** | Auto-listed expiring memberships with one-tap **WhatsApp renewal reminders** | Renewals happen because the app nudges for you |
| **Pending Payments** | Who owes what, with partial-payment recording and WhatsApp payment reminders | Collect faster without awkward phone calls |
| **Plan Management** | Subscription plan builder with types and feature lists | Package and upsell your offerings |
| **Invoice Management** | Unified invoice ledger — every sale & subscription becomes an invoice with running paid/due balance | Zero confusion about who paid what |
| **PDF Invoices** | Branded, server-generated PDFs with YOUR gym name, address and logo identity | Professional paperwork in one click |
| **Public Invoice View** | Shareable invoice page with print support | Send it over WhatsApp; the member sees a clean branded bill |
| **Refunds & Ledger Integrity** | Refund recording with automatic rebalancing of invoices and entitlements | Handle cancellations cleanly, keep books honest |


### 3. Class Scheduling & Bookings


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Classes & Sessions** | Create classes, schedule sessions (recurring supported), manage capacity | Your weekly timetable lives in the system, not on a whiteboard |
| **Session Bookings** | Members book into sessions; live booked/capacity counters with Full/Open badges | No more overbooked spinning classes |
| **Booking Calendar** | Month-view calendar of all scheduled sessions | See your whole schedule at a glance |


### 4. CRM & Lead Conversion


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Enquiry Management** | Capture walk-ins/leads with type classification and follow-up dates | Every prospect is tracked, none forgotten |
| **Enquiry Follow-ups** | Date-filtered follow-up queue | Your conversion pipeline, organized |
| **Lead Tracking & Scoring** | Visual funnel with KPI cards and conversion tracking | See exactly where prospects drop off |
| **Member CRM** ⭐ | Per-member notes, interaction log, health profile (injuries, conditions), and fitness goals | Personal training at scale — every trainer knows every member's story |


### 5. Member Portal *(what YOUR members get — a huge selling point)*


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Self-Service Dashboard** | Members log in to see their memberships, attendance history, bookings and profile | Fewer "how many visits do I have left?" interruptions |
| **Workout Library Access** | Members browse 800+ exercises with images, muscle maps and step-by-step instructions | A personal trainer in every pocket |
| **Password Self-Service** | Members manage their own passwords | Less IT help for your staff |


### 6. Self-Service Kiosk


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Kiosk Check-in** | Tablet-friendly two-panel kiosk: members check themselves in by code or phone number | Wow factor at the door + zero reception bottleneck at peak hours |


### 7. Exercise, Fitness & Gamification


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Exercise Database** | 800+ exercises categorized by muscle group with images and instructions | Ready-made professional content — no need to build your own library |
| **Fitness Calculators** | BMI, BMR and WHR calculators for assessments | Instant, impressive sign-up assessments |
| **Rank Progression System** 🏆 | Define ranks (White → Black belt style), award them, track history; member leaderboard | **Gamified retention** — members grind for the next rank and stay subscribed |
| **Trainer Panel** | Trainers see their assigned members and their attendance | Accountability for your coaching team |


### 8. Nutrition


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Food Items Database** | Food catalog with nutritional information | Build diets from a real database |
| **Diet Assignment** | Create and attach diet entries to members | Sell nutrition coaching alongside memberships |


### 9. Marketing & Communication


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **WhatsApp Integration** ⭐ | WhatsApp deep-links everywhere it matters: renewals, pending payments, birthdays, invoices | Reach members where they actually read — no email graveyard |
| **Campaign Manager** | Bulk campaigns with template variables ({name}, {gym}, …) to member segments | Promote a new class to 500 members in one click |
| **Notification Templates & Logs** | Reusable message templates + delivery log with statuses | Consistent branding, full audit of what was sent |
| **Birthday Automation Hooks** | Birthday lists surfaced for daily WhatsApp greetings | The cheapest retention tool that exists — people join gyms that remember them |


### 10. Analytics & Reports


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Analytics Dashboard** ⭐ | Revenue, outstanding balance, active vs inactive members, retention %, churn %, attendance trends, revenue by service, member tenure, payment-method split, staff performance, **location comparison**, gender split — filterable by branch & period (7/30/90/180/365 days) | Board-level business intelligence without a spreadsheet |
| **Reports & Exports** | Revenue, retention, attendance reports; CSV/JSON export; save custom reports | Take your data to your accountant or investors in seconds |


### 11. Multi-Branch & Multi-Tenancy


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Multi-Location** | Unlimited branches per gym; default-location logic; location-aware members, sales and reports | One account runs your whole chain |
| **Location Comparison Analytics** | Side-by-side branch performance | Know which branch deserves the next investment |


### 12. Platform Trust & Security


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **Role-Based Access Control** | Granular permissions per action (view/create/update/delete per module) enforced in API and UI | Staff see only what they should |
| **Audit Logs** | Organization-scoped trail of who did what, when | Full accountability; disputes end here |
| **Organization Settings** | Your gym's name, address, city, phone, email and currency (EGP/USD) flow into invoices, PDFs and the whole UI | The app looks like YOUR brand, not ours |
| **Dark/Light Theme** | Full theme toggle across the app | Looks modern on every device |
| **Arabic + English** | Complete RTL/LTR bilingual interface | Built for the region from day one |


### 13. Open Integrations


| Feature | What the gym owner gets | Why it sells |
|---|---|---|
| **REST API Keys** | Create/manage API keys for external tools | Connect access-control hardware, websites, BI tools |
| **Webhooks** | Event-subscribed webhooks (member created, sale closed, …) | Real-time sync with whatever else you use |


### 14. For SaaS Operators *(platform admin panel — if you resell/host the system)*


Tenant management · tenant subscription lifecycle (trial/pause/cancel) · platform billing center · platform-wide plan definitions · global feature flags per tenant · platform audit + technical logs · platform settings.


---


## Modular by Design (pricing-page gold)


Every feature above sits behind a **per-gym feature toggle** (`OrgFeatureOverride`). That means:


- **You can sell tiers honestly:** e.g. *Starter* = Members + Attendance + Invoices · *Growth* = + CRM + Campaigns + Classes · *Pro* = everything incl. Kiosk, Ranks, API.
- Owners flip modules on/off themselves — a gym that doesn't do classes just hides that module.
- Toggles apply instantly, no redeployment, per organization.


**40+ registered togglable features across 12 categories** — see `scripts/seed-feature-toggles.ts` for the machine-readable registry.


---


## Website Copy Blocks (ready to adapt)


**Hero subheading:**
> "Members, attendance, billing, classes, CRM, campaigns and analytics — one bilingual platform your members will love, with a self-service kiosk and portal included."


**Three killer bullets for the pricing page:**
1. **Retain more members** — automated renewal & birthday WhatsApp nudges, follow-up queues, gamification ranks.
2. **See everything** — live retention/churn/outstanding KPIs per branch, exportable anytime.
3. **Look professional** — branded PDF invoices, member portal, kiosk check-in, dark mode, Arabic & English.


**Objection-handlers:**
- *"Is my data safe?"* Role-based permissions + full audit logs on every action.
- *"I have 3 branches."* Native multi-location with comparative analytics — one login.
- *"My staff aren't techies."* Four simple roles; trainers only see their members.
- *"Do you take a cut of my payments?"* No — record cash/card payments freely; bring your own processor later via API/webhooks.


---


## Coverage Notes & Caveats (internal — strip before publishing)


- **Payments:** there is NO online payment gateway by design. All money features are *manual recording* (cash/card at desk) + invoicing + refunds. Never market "online payments/Stripe" — say "payment recording & invoicing".
- **Diet module:** exists in-product (food items + diet assignment). Listed above for completeness since this is a factual inventory — confirm with architecture decisions whether it should be publicly marketed before putting it on the website.
- **Counts:** 44 database models, ~37 API route groups, 60+ UI routes, 40 seeded feature toggles — figures current as of 2026-08-25.
