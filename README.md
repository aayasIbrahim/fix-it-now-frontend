# 🔧 FixItNow - Home Service Marketplace (Frontend)

> A modern, responsive home service marketplace built with **Next.js (App Router), TypeScript, React, Tailwind CSS, Shadcn/UI, and Server Actions**. The frontend is fully integrated with a RESTful **Express.js + PostgreSQL** backend and **Stripe** payment processing.

---

## 🔗 Live Resources

| Resource             | Link                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| 🌐 **Frontend Repo** | [https://github.com/aayasIbrahim/fix-it-now-frontend](https://github.com/aayasIbrahim/fix-it-now-frontend) |
| 🌐 **Live Frontend** | [https://fixitnowfrontend-five.vercel.app](https://fixitnowfrontend-five.vercel.app)           |
| 🌐 **Backend API**   | [https://fixitnow-backend-alpha.vercel.app/](https://fixitnow-backend-alpha.vercel.app/)       |
| 🎥 **Demo Video**    | _Coming Soon_                                                                                  |

---

## 🔑 Demo Admin Credentials

```env
Email:    ayas@gmail.com
Password: 123456

```

---

## 🚀 Role-Based Features & User Workflows

The application dynamically adjusts its UI, navigation, and permissions based on the authenticated user's assigned role (`CUSTOMER`, `TECHNICIAN`, or `ADMIN`).

---

### 🌐 Public Visitors

- Browse services by category.
- Search and filter services by location, price, and rating.
- Explore technician profiles, skills, ratings, and customer reviews.
- Fully responsive UI for desktop, tablet, and mobile devices.
- Custom loading and error states using `loading.tsx` and `error.tsx`.

---

### 👤 Customer Features

- Secure registration and login with **React Hook Form** and **Zod** validation.
- Book services by selecting dates, time slots, and service locations.
- Track booking status throughout the entire workflow:
- `REQUESTED`
- `ACCEPTED`
- `PAID`
- `IN_PROGRESS`
- `COMPLETED`

- Complete payments through **Stripe Checkout**.
- View booking history and payment records.
- Submit ratings and reviews for completed services.

---

### 🛠️ Technician Features

- Manage professional profile information.
- Update skills, hourly rate, biography, and service areas.
- Configure working schedules and availability.
- View incoming booking requests.
- Accept, decline, start, and complete service jobs.

---

### 👨‍💼 Admin Features

- View platform analytics and dashboard statistics.
- Manage users with search and pagination.
- Ban or unban users.
- Create, update, and manage service categories and platform services.
- Monitor bookings and platform activity.

---

## 🛠️ Tech Stack

| Category               | Technologies                                             |
| ---------------------- | -------------------------------------------------------- |
| **Framework**          | Next.js 16 (App Router, Server Actions, Route Handlers)  |
| **Language**           | TypeScript                                               |
| **UI & Styling**       | Tailwind CSS, Shadcn/UI, Lucide React, Sonner            |
| **Forms & Validation** | React Hook Form, Zod                                     |
| **Data Fetching**      | Native Fetch API, Next.js Server Actions, TanStack Query |
| **Authentication**     | JWT, Secure HTTP-Only Cookies, Edge Middleware           |
| **Payments**           | Stripe Checkout                                          |
| **State Management**   | React Hooks & React Context                              |

---

## 🗺️ Route Architecture & API Mapping

| Frontend Route                             | Purpose              | Backend Endpoint                                            | Method                           |
| ------------------------------------------ | -------------------- | ----------------------------------------------------------- | -------------------------------- |
| `/`                                        | Home page            | `/api/services`, `/api/categories`                          | `GET`                            |
| `/auth/login`                              | User login           | `/api/auth/login`                                           | `POST`                           |
| `/auth/register`                           | User registration    | `/api/auth/register`                                        | `POST`                           |
| `/dashboard/customer/services`             | Browse services      | `/api/services`, `/api/categories`                          | `GET`                            |
| `/dashboard/customer/technicians/[techId]` | Technician details   | `/api/technicians/:id`, `/api/review/technician/:id`        | `GET`                            |
| `/dashboard/customer/bookings`             | Booking management   | `/api/bookings`, `/api/payments/create`                     | `GET`, `POST`                    |
| `/dashboard/technician`                    | Technician dashboard | `/api/technician/bookings`, `/api/technicians/availability` | `GET`, `PATCH`                   |
| `/dashboard/admin/users`                   | User management      | `/api/admin/users`, `/api/admin/users/:id`                  | `GET`, `PATCH`                   |
| `/dashboard/admin/categories`              | Category management  | `/api/categories`                                           | `GET`, `POST`, `PATCH`, `DELETE` |

---

## 📂 Complete Project Architecture (`src/` & Root)

```text
FIXITNOW-FRONTEND/
├── .env
├── .env.example
├── AGENTS.md
├── API_INTEGRATION.md
├── CLAUDE.md
├── README.md
├── components.json
├── next.config.ts
├── package.json
├── tsconfig.json
│
└── src/
    ├── proxy.ts
    │
    ├── act-schema/
    │   ├── auth.schema.ts
    │   ├── booking.schema.ts
    │   ├── getMe.schema.ts
    │   ├── review.schema.ts
    │   └── services.schema.ts
    │
    ├── actions/
    │   ├── admin.actions.ts
    │   ├── auth.actions.ts
    │   ├── booking.actions.ts
    │   ├── category.actions.ts
    │   ├── getMe.action.ts
    │   ├── payment.actions.ts
    │   ├── review.actions.ts
    │   ├── services.actions.ts
    │   └── technician.actions.ts
    │
    ├── app/
    │   ├── error.tsx
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   │
    │   ├── (authGroup)/
    │   │   ├── layout.tsx
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   ├── register/
    │   │   │   └── page.tsx
    │   │   └── _components/
    │   │       ├── login-form.tsx
    │   │       └── register-form.tsx
    │   │
    │   ├── (dashboardGroup)/
    │   │   ├── admin/
    │   │   │   ├── layout.tsx
    │   │   │   ├── page.tsx
    │   │   │   ├── bookings/
    │   │   │   │   └── page.tsx
    │   │   │   ├── categories/
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── create/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── [id]/edit/
    │   │   │   │       └── page.tsx
    │   │   │   ├── services/
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── create/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── edit/
    │   │   │   │       └── page.tsx
    │   │   │   ├── users/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── [user-id]/
    │   │   │   │       └── page.tsx
    │   │   │   └── _components/
    │   │   │       ├── CategoryForm_.tsx
    │   │   │       ├── service-form_.tsx
    │   │   │       └── user-status-form_.tsx
    │   │   │
    │   │   ├── customer/
    │   │   │   ├── layout.tsx
    │   │   │   ├── page.tsx
    │   │   │   ├── bookings/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── new/
    │   │   │   │       └── page.tsx
    │   │   │   ├── profile/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── edit/
    │   │   │   │       └── page.tsx
    │   │   │   ├── reviews/
    │   │   │   │   └── page.tsx
    │   │   │   ├── services/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── [service-id]/
    │   │   │   │       └── page.tsx
    │   │   │   ├── technicians/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── [techId]/
    │   │   │   │       └── page.tsx
    │   │   │   └── _components/
    │   │   │       ├── getMe-customer_.tsx
    │   │   │       ├── technician-filters_.tsx
    │   │   │       ├── technician-view-customer_.tsx
    │   │   │       └── technicians-client-list_.tsx
    │   │   │
    │   │   ├── technician/
    │   │   │   ├── layout.tsx
    │   │   │   ├── page.tsx
    │   │   │   ├── availability/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── edit/
    │   │   │   │       └── page.tsx
    │   │   │   ├── bookings/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── [booking-id]/
    │   │   │   │       └── page.tsx
    │   │   │   ├── profile/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── edit/
    │   │   │   │       └── page.tsx
    │   │   │   ├── services/
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── create/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── edit/
    │   │   │   │       └── page.tsx
    │   │   │   └── _components/
    │   │   │       ├── availability-form_.tsx
    │   │   │       ├── booking-actions-client_.tsx
    │   │   │       ├── booking-status-badge_.tsx
    │   │   │       ├── profile-form_.tsx
    │   │   │       ├── service-delete-button_.tsx
    │   │   │       ├── service-form_.tsx
    │   │   │       └── technician-service-list_.tsx
    │   │   │
    │   │   └── _components/
    │   │       ├── dashboard-header.tsx
    │   │       ├── dashboard-sidebar.tsx
    │   │       ├── notification-dropdown.tsx
    │   │       └── status-badge.tsx
    │   │
    │   ├── (payment)/
    │   │   └── payment/
    │   │       ├── cancel/
    │   │       │   └── page.tsx
    │   │       └── success/
    │   │           └── page.tsx
    │   │
    │   └── (public)/
    │       ├── layout.tsx
    │       ├── page.tsx
    │       ├── categories/
    │       │   └── page.tsx
    │       ├── services/
    │       │   ├── page.tsx
    │       │   └── [service-id]/
    │       │       └── page.tsx
    │       ├── technicians/
    │       │   ├── page.tsx
    │       │   └── [id]/
    │       │       └── page.tsx
    │       └── _components/
    │           ├── footer.tsx
    │           └── navbar.tsx
    │
    ├── components/
    │   ├── share/
    │   │   ├── admin-bookings-client.tsx
    │   │   ├── admin-categories-client.tsx
    │   │   ├── admin-data-table.tsx
    │   │   ├── admin-reusable-card-list.tsx
    │   │   ├── admin-service-delete-button.tsx
    │   │   ├── admin-services-client.tsx
    │   │   ├── admin-status-badge.tsx
    │   │   ├── admin-status-toggle-card.tsx
    │   │   ├── admin-users-client.tsx
    │   │   ├── cust-BookingCard.tsx
    │   │   ├── cust-BookingCustomerView.tsx
    │   │   ├── cust-CreateReviewModal.tsx
    │   │   ├── cust-CustomerReviewCard.tsx
    │   │   ├── cust-GetMeCustomer.tsx
    │   │   ├── cust-GetMeReviews.tsx
    │   │   ├── cust-servicesGrid.tsx
    │   │   ├── public-category-grid.tsx
    │   │   ├── public-pagination.tsx
    │   │   ├── public-servicesGrid.tsx
    │   │   ├── public-technician-card.tsx
    │   │   └── public-technician-filters.tsx
    │   │
    │   └── ui/
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── checkbox.tsx
    │       ├── dialog.tsx
    │       ├── dropdown-menu.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── select.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── textarea.tsx
    │       └── toast.tsx
    │
    ├── lib/
    │   ├── api-client.ts
    │   ├── api-error.ts
    │   ├── auth-cookies.ts
    │   ├── cache-utils.ts
    │   ├── constants.ts
    │   ├── getAuthHeaders.ts
    │   ├── logger.ts
    │   ├── query-options.ts
    │   ├── query-string.ts
    │   ├── request-wrapper.ts
    │   └── utils.ts
    │
    ├── providers/
    │   ├── query-provider.tsx
    │   └── toast-provider.tsx
    │
    └── types/
        ├── admin.types.ts
        ├── auth.types.ts
        ├── booking.types.ts
        ├── category.types.ts
        ├── enums.ts
        ├── index.ts
        ├── payment.types.ts
        ├── review.types.ts
        ├── service.types.ts
        └── technician.types.ts

```

---

## 💻 Local Development

### Prerequisites

- Node.js **18.17.0** or later
- npm **9.x** or later

### 1. Clone the Repository

```bash
git clone https://github.com/aayasIbrahim/fix-it-now-frontend
cd FixItNow-frontend

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Backend API
BACKEND_API_URL=https://fixitnow-backend-tau.vercel.app/api

# Frontend URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

```

### 4. Start Development Server

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Security

- Protected routes are secured using **Next.js Edge Middleware** (`proxy.ts`).
- Role-based authorization prevents unauthorized dashboard access (`CUSTOMER`, `TECHNICIAN`, `ADMIN`).
- Authentication uses secure **JWT HTTP-only cookies**.
- Client-side and action validation is powered by **Zod schemas** in `src/act-schema/`.

---

## 💳 Payment Flow

1. Customer requests a booking (`REQUESTED`).
2. Technician reviews and accepts the booking (`ACCEPTED`).
3. Customer clicks **Pay Now**.
4. A Stripe Checkout session is generated via `payment.actions.ts`.
5. Customer completes payment on Stripe's checkout page.
6. System updates status to `PAID` upon redirection to `/payment/success`.
7. Once service is rendered, technician marks it as `COMPLETED`, allowing customer reviews.

---

# 📖 Detailed API Integration Documentation (`API_INTEGRATION.md`)

Below is the vertical mapping of all pages, components, Server Actions, schemas, and endpoints based on the updated `src/` tree architecture.

---

## 1. Authentication Routes

### SL 01: `/login`

- **File Path:** `app/(authGroup)/login/page.tsx`
- **Components / Actions / Schemas:**
- `app/(authGroup)/_components/login-form.tsx`
- `actions/auth.actions.ts`
- `act-schema/auth.schema.ts`

- **Backend Endpoint:** `/api/auth/login`
- **Method:** `POST`
- **Notes:** Authenticates credentials and sets secure JWT token cookie.

### SL 02: `/register`

- **File Path:** `app/(authGroup)/register/page.tsx`
- **Components / Actions / Schemas:**
- `app/(authGroup)/_components/register-form.tsx`
- `actions/auth.actions.ts`
- `act-schema/auth.schema.ts`

- **Backend Endpoint:** `/api/auth/register`
- **Method:** `POST`
- **Notes:** Registers new `CUSTOMER` or `TECHNICIAN` accounts.

### SL 03: `Global Session`

- **File Path:** Root Layout / `proxy.ts`
- **Components / Actions / Schemas:**
- `actions/getMe.action.ts`
- `act-schema/getMe.schema.ts`

- **Backend Endpoint:** `/api/auth/me`
- **Method:** `GET`
- **Notes:** Middleware session verification and role enforcement.

---

## 2. Public Routes

### SL 04: `/`

- **File Path:** `app/(public)/page.tsx`
- **Components / Actions / Schemas:**
- `app/(public)/_components/navbar.tsx`
- `app/(public)/_components/footer.tsx`
- `components/share/public-category-grid.tsx`
- `components/share/public-servicesGrid.tsx`
- `actions/category.actions.ts`
- `actions/services.actions.ts`

- **Backend Endpoint:** `/api/categories`, `/api/services`
- **Method:** `GET`
- **Notes:** Landing page showing featured categories and available services.

### SL 05: `/categories`

- **File Path:** `app/(public)/categories/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/public-category-grid.tsx`
- `actions/category.actions.ts`

- **Backend Endpoint:** `/api/categories`
- **Method:** `GET`
- **Notes:** Public catalog of all active service categories.

### SL 06: `/services`

- **File Path:** `app/(public)/services/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/public-servicesGrid.tsx`
- `components/share/public-pagination.tsx`
- `actions/services.actions.ts`
- `act-schema/services.schema.ts`

- **Backend Endpoint:** `/api/services`
- **Method:** `GET`
- **Notes:** Searchable and filterable service directory.

### SL 07: `/services/[service-id]`

- **File Path:** `app/(public)/services/[service-id]/page.tsx`
- **Components / Actions / Schemas:**
- Service Detail Components
- `actions/services.actions.ts`

- **Backend Endpoint:** `/api/services/:id`
- **Method:** `GET`
- **Notes:** Detailed overview of a specific service.

### SL 08: `/technicians`

- **File Path:** `app/(public)/technicians/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/public-technician-card.tsx`
- `components/share/public-technician-filters.tsx`
- `actions/technician.actions.ts`

- **Backend Endpoint:** `/api/technicians`
- **Method:** `GET`
- **Notes:** Public listing of available technicians.

### SL 09: `/technicians/[id]`

- **File Path:** `app/(public)/technicians/[id]/page.tsx`
- **Components / Actions / Schemas:**
- Technician Profile & Reviews View
- `actions/technician.actions.ts`
- `actions/review.actions.ts`

- **Backend Endpoint:** `/api/technicians/:id`, `/api/review/technician/:id`
- **Method:** `GET`
- **Notes:** Shows full technician profile, bio, hourly rate, and customer reviews.

---

## 3. Customer Dashboard

### SL 10: `/customer`

- **File Path:** `app/(dashboardGroup)/customer/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/customer/_components/getMe-customer_.tsx`
- `actions/getMe.action.ts`

- **Backend Endpoint:** `/api/auth/me`
- **Method:** `GET`
- **Notes:** Main customer dashboard summary.

### SL 11: `/customer/bookings`

- **File Path:** `app/(dashboardGroup)/customer/bookings/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/cust-BookingCustomerView.tsx`
- `components/share/cust-BookingCard.tsx`
- `actions/booking.actions.ts`

- **Backend Endpoint:** `/api/bookings`
- **Method:** `GET`
- **Notes:** Tracks active and completed bookings.

### SL 12: `/customer/bookings/new`

- **File Path:** `app/(dashboardGroup)/customer/bookings/new/page.tsx`
- **Components / Actions / Schemas:**
- Booking Creation Form
- `actions/booking.actions.ts`
- `actions/payment.actions.ts`
- `act-schema/booking.schema.ts`

- **Backend Endpoint:** `/api/bookings`, `/api/payments/create`
- **Method:** `POST`
- **Notes:** Submits a new booking request and generates Stripe payment URL.

### SL 13: `/customer/profile`

- **File Path:** `app/(dashboardGroup)/customer/profile/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/cust-GetMeCustomer.tsx`
- `actions/getMe.action.ts`

- **Backend Endpoint:** `/api/auth/me`
- **Method:** `GET`
- **Notes:** View customer account parameters.

### SL 14: `/customer/profile/edit`

- **File Path:** `app/(dashboardGroup)/customer/profile/edit/page.tsx`
- **Components / Actions / Schemas:**
- Customer Profile Edit Form
- `actions/getMe.action.ts`
- `act-schema/getMe.schema.ts`

- **Backend Endpoint:** `/api/auth/me`
- **Method:** `PATCH`
- **Notes:** Updates personal customer profile information.

### SL 15: `/customer/reviews`

- **File Path:** `app/(dashboardGroup)/customer/reviews/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/cust-CustomerReviewCard.tsx`
- `components/share/cust-CreateReviewModal.tsx`
- `components/share/cust-GetMeReviews.tsx`
- `actions/review.actions.ts`
- `act-schema/review.schema.ts`

- **Backend Endpoint:** `/api/review/my-reviews`, `/api/review`
- **Method:** `GET`, `POST`
- **Notes:** View past reviews and submit new ratings for completed bookings.

### SL 16: `/customer/services`

- **File Path:** `app/(dashboardGroup)/customer/services/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/cust-servicesGrid.tsx`
- `actions/services.actions.ts`

- **Backend Endpoint:** `/api/services`
- **Method:** `GET`
- **Notes:** In-dashboard service browser for customer ordering.

### SL 17: `/customer/services/[service-id]`

- **File Path:** `app/(dashboardGroup)/customer/services/[service-id]/page.tsx`
- **Components / Actions / Schemas:**
- Service Detail Page
- `actions/services.actions.ts`

- **Backend Endpoint:** `/api/services/:id`
- **Method:** `GET`
- **Notes:** Detailed service view with direct booking option.

### SL 18: `/customer/technicians`

- **File Path:** `app/(dashboardGroup)/customer/technicians/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/customer/_components/technicians-client-list_.tsx`
- `app/(dashboardGroup)/customer/_components/technician-filters_.tsx`
- `actions/technician.actions.ts`

- **Backend Endpoint:** `/api/technicians`
- **Method:** `GET`
- **Notes:** Filterable technician search interface inside customer portal.

### SL 19: `/customer/technicians/[techId]`

- **File Path:** `app/(dashboardGroup)/customer/technicians/[techId]/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/customer/_components/technician-view-customer_.tsx`
- `actions/technician.actions.ts`
- `actions/review.actions.ts`

- **Backend Endpoint:** `/api/technicians/:id`, `/api/review/technician/:id`
- **Method:** `GET`
- **Notes:** Full technician profile view for customers.

---

## 4. Technician Dashboard

### SL 20: `/technician`

- **File Path:** `app/(dashboardGroup)/technician/page.tsx`
- **Components / Actions / Schemas:**
- `actions/getMe.action.ts`

- **Backend Endpoint:** `/api/auth/me`
- **Method:** `GET`
- **Notes:** Overview dashboard for logged-in technician.

### SL 21: `/technician/availability`

- **File Path:** `app/(dashboardGroup)/technician/availability/page.tsx`
- **Components / Actions / Schemas:**
- `actions/technician.actions.ts`

- **Backend Endpoint:** `/api/technicians/availability`
- **Method:** `GET`
- **Notes:** View current weekly availability and working hours.

### SL 22: `/technician/availability/edit`

- **File Path:** `app/(dashboardGroup)/technician/availability/edit/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/technician/_components/availability-form_.tsx`
- `actions/technician.actions.ts`

- **Backend Endpoint:** `/api/technicians/availability`
- **Method:** `PATCH`
- **Notes:** Modify work schedule and active days.

### SL 23: `/technician/bookings`

- **File Path:** `app/(dashboardGroup)/technician/bookings/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/technician/_components/booking-status-badge_.tsx`
- `app/(dashboardGroup)/technician/_components/booking-actions-client_.tsx`
- `actions/booking.actions.ts`

- **Backend Endpoint:** `/api/technician/bookings`
- **Method:** `GET`
- **Notes:** List assigned incoming job requests.

### SL 24: `/technician/bookings/[booking-id]`

- **File Path:** `app/(dashboardGroup)/technician/bookings/[booking-id]/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/technician/_components/booking-status-badge_.tsx`
- `app/(dashboardGroup)/technician/_components/booking-actions-client_.tsx`
- `actions/booking.actions.ts`
- `act-schema/booking.schema.ts`

- **Backend Endpoint:** `/api/technician/bookings/:id`
- **Method:** `GET`, `PATCH`
- **Notes:** Update job progress status (`ACCEPTED`, `IN_PROGRESS`, `COMPLETED`).

### SL 25: `/technician/profile`

- **File Path:** `app/(dashboardGroup)/technician/profile/page.tsx`
- **Components / Actions / Schemas:**
- `actions/getMe.action.ts`

- **Backend Endpoint:** `/api/auth/me`
- **Method:** `GET`
- **Notes:** Displays technician profile details.

### SL 26: `/technician/profile/edit`

- **File Path:** `app/(dashboardGroup)/technician/profile/edit/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/technician/_components/profile-form_.tsx`
- `actions/getMe.action.ts`
- `act-schema/getMe.schema.ts`

- **Backend Endpoint:** `/api/auth/me`
- **Method:** `PATCH`
- **Notes:** Updates biography, experience, and service rates.

### SL 27: `/technician/services`

- **File Path:** `app/(dashboardGroup)/technician/services/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/technician/_components/technician-service-list_.tsx`
- `app/(dashboardGroup)/technician/_components/service-delete-button_.tsx`
- `actions/services.actions.ts`

- **Backend Endpoint:** `/api/services`
- **Method:** `GET`
- **Notes:** Manage services offered by the technician.

### SL 28: `/technician/services/create`

- **File Path:** `app/(dashboardGroup)/technician/services/create/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/technician/_components/service-form_.tsx`
- `actions/services.actions.ts`
- `act-schema/services.schema.ts`

- **Backend Endpoint:** `/api/services`
- **Method:** `POST`
- **Notes:** Add a new service offering.

### SL 29: `/technician/services/edit`

- **File Path:** `app/(dashboardGroup)/technician/services/edit/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/technician/_components/service-form_.tsx`
- `actions/services.actions.ts`
- `act-schema/services.schema.ts`

- **Backend Endpoint:** `/api/services/:id`
- **Method:** `PATCH`
- **Notes:** Edit service title, pricing, or description.

---

## 5. Admin Dashboard

### SL 30: `/admin`

- **File Path:** `app/(dashboardGroup)/admin/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/_components/dashboard-header.tsx`
- `app/(dashboardGroup)/_components/dashboard-sidebar.tsx`
- `actions/getMe.action.ts`

- **Backend Endpoint:** `/api/auth/me`
- **Method:** `GET`
- **Notes:** System metrics and admin analytics overview.

### SL 31: `/admin/bookings`

- **File Path:** `app/(dashboardGroup)/admin/bookings/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/admin-bookings-client.tsx`
- `components/share/admin-status-badge.tsx`
- `actions/admin.actions.ts`

- **Backend Endpoint:** `/api/admin/bookings`
- **Method:** `GET`
- **Notes:** Global platform booking monitoring.

### SL 32: `/admin/categories`

- **File Path:** `app/(dashboardGroup)/admin/categories/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/admin-categories-client.tsx`
- `actions/category.actions.ts`

- **Backend Endpoint:** `/api/categories`
- **Method:** `GET`
- **Notes:** Category management table.

### SL 33: `/admin/categories/create`

- **File Path:** `app/(dashboardGroup)/admin/categories/create/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/admin/_components/CategoryForm_.tsx`
- `actions/category.actions.ts`

- **Backend Endpoint:** `/api/categories`
- **Method:** `POST`
- **Notes:** Create a new service category.

### SL 34: `/admin/categories/[id]/edit`

- **File Path:** `app/(dashboardGroup)/admin/categories/[id]/edit/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/admin/_components/CategoryForm_.tsx`
- `actions/category.actions.ts`

- **Backend Endpoint:** `/api/categories/:id`
- **Method:** `PATCH`
- **Notes:** Update category details.

### SL 35: `/admin/services`

- **File Path:** `app/(dashboardGroup)/admin/services/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/admin-services-client.tsx`
- `components/share/admin-service-delete-button.tsx`
- `actions/services.actions.ts`

- **Backend Endpoint:** `/api/services`, `/api/services/:id`
- **Method:** `GET`, `DELETE`
- **Notes:** Manage platform services as an admin.

### SL 36: `/admin/services/create`

- **File Path:** `app/(dashboardGroup)/admin/services/create/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/admin/_components/service-form_.tsx`
- `actions/services.actions.ts`
- `act-schema/services.schema.ts`

- **Backend Endpoint:** `/api/services`
- **Method:** `POST`
- **Notes:** Admin service creation route.

### SL 37: `/admin/services/edit`

- **File Path:** `app/(dashboardGroup)/admin/services/edit/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/admin/_components/service-form_.tsx`
- `actions/services.actions.ts`
- `act-schema/services.schema.ts`

- **Backend Endpoint:** `/api/services/:id`
- **Method:** `PATCH`
- **Notes:** Admin service edit route.

### SL 38: `/admin/users`

- **File Path:** `app/(dashboardGroup)/admin/users/page.tsx`
- **Components / Actions / Schemas:**
- `components/share/admin-users-client.tsx`
- `components/share/admin-status-toggle-card.tsx`
- `actions/admin.actions.ts`

- **Backend Endpoint:** `/api/admin/users`
- **Method:** `GET`
- **Notes:** Global user registry management.

### SL 39: `/admin/users/[user-id]`

- **File Path:** `app/(dashboardGroup)/admin/users/[user-id]/page.tsx`
- **Components / Actions / Schemas:**
- `app/(dashboardGroup)/admin/_components/user-status-form_.tsx`
- `actions/admin.actions.ts`

- **Backend Endpoint:** `/api/admin/users/:id`
- **Method:** `PATCH`
- **Notes:** Update account status (`ACTIVE`, `BLOCKED`).

---

## 6. Payment Routes

### SL 40: `/payment/cancel`

- **File Path:** `app/(payment)/payment/cancel/page.tsx`
- **Components / Actions / Schemas:** Payment Cancel View
- **Backend Endpoint:** N/A
- **Method:** N/A
- **Notes:** User landed page when Stripe checkout is cancelled.

### SL 41: `/payment/success`

- **File Path:** `app/(payment)/payment/success/page.tsx`
- **Components / Actions / Schemas:**
- Payment Success View
- `actions/payment.actions.ts`

- **Backend Endpoint:** `/api/payments/confirm`
- **Method:** `POST`
- **Notes:** Confirms Stripe payment session and updates booking to `PAID`.

---

## 7. Core Subsystems Summary

### 1. Payment Subsystem

- **Actions File:** `actions/payment.actions.ts`
- **Endpoints:**
- `POST /api/payments/create` — Generates Stripe Checkout Session URL.
- `POST /api/payments/confirm` — Verifies successful transaction.
- `GET /api/payments` — Admin/User payment log history.

### 2. Category Subsystem

- **Actions File:** `actions/category.actions.ts`
- **Endpoints:**
- `GET /api/categories` — Fetches category list.
- `POST /api/categories` — Admin category creation.
- `PATCH /api/categories/:id` — Admin category modification.
- `DELETE /api/categories/:id` — Admin category removal.

### 3. Middleware & Proxy Rules

- Protection is configured centrally in `src/proxy.ts`.
- Route authorization checks user role claims against `GET /api/auth/me`.
- Access control enforces role boundaries for `CUSTOMER`, `TECHNICIAN`, and `ADMIN`.
