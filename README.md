"# VRV-admin-dashboard" 
# Admin Dashboard

An admin dashboard for managing users, roles, and permissions, designed with a secure and user-friendly interface to efficiently assign roles, define permissions, and manage users.

## Features

### User Management
- View and manage users.
- Add, edit, or delete users.
- Assign roles to users and manage their status (Active/Inactive).

### Role Management
- Define and edit roles.
- Assign permissions to roles (Read, Write, Delete, or custom attributes).

### Dynamic Permissions
- Assign or modify permissions for roles.
- Display permissions clearly for easy understanding and modification.

### Custom API Simulation
- Mock API calls for CRUD operations on users and roles.
- Simulate server responses to validate functionality.

### Responsive Design
- Mobile-friendly layout with smooth transitions.
- Responsive tables with horizontal scrolling and touch-friendly interactions.

---

## Project Structure

### Types
File: `src/types/index.ts`
- Defines interfaces for Users, Roles, and Permissions.
- Ensures type safety throughout the application.

### Mock Data
File: `src/data/mockData.ts`
- Provides sample data for testing.
- Simulates API responses.

### Components
- `Layout.tsx`: Main layout with navigation.
- `UserList.tsx`: User management table.
- `RoleList.tsx`: Role management table.
- `PermissionList.tsx`: Permission management table.
- `AddButton.tsx`: Reusable button for adding entities.
- `UserForm.tsx`: Form for adding/editing users.
- `RoleForm.tsx`: Form for adding/editing roles.
- `PermissionForm.tsx`: Form for adding/editing permissions.
- `Modal.tsx`: Reusable modal interface for forms.

### State Management
- Uses `useState` hooks in `App.tsx` for managing users, roles, and permissions.

---

## CRUD Operations

### Users
- **Create**: Add new users via the `UserForm` component.
- **Read**: Display users in a responsive table.
- **Update**: Edit existing users via the same form.
- **Delete**: Remove users from the system.

### Roles and Permissions
- **Create**: Add new roles and permissions via respective forms.
- **Read**: View roles and associated permissions in a table.
- **Update**: Edit existing roles and permissions.
- **Delete**: Remove roles and permissions from the system.

All operations are persisted using `localStorage`.

---

## UI Enhancements
- Clean, modern UI with Tailwind CSS.
- Status indicators for users.
- Permission tags in the role list.
- Sidebar navigation with icons.
- Modal interface for forms.

---

## Responsive Design
- Mobile-friendly sidebar with slide-in/out animations.
- Optimized padding, spacing, and typography for mobile devices.
- Accessibility improvements with focus management.
- Enhanced hover and touch interactions.

---

## Deployment

The application has been deployed successfully using Netlify. You can access the live site here:
[Admin Dashboard on Netlify](https://cerulean-paletas-4dafa8.netlify.app)

---

## Setup Instructions

1. Clone the repository:
   ```bash
    https://github.com/himanshuV09/VRV-admin-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd VRV-admin-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
---

## Future Enhancements
- Integration with a real backend API.
- Advanced analytics and reporting features.
- User activity logs and audit trails.
- Role-based access control (RBAC) for enhanced security.

---



