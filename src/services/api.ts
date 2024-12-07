import { User, Role, Permission } from '../types';
import { users, roles, permissions } from '../data/mockData';

// Simulating API calls with local storage
const STORAGE_KEYS = {
  USERS: 'admin_dashboard_users',
  ROLES: 'admin_dashboard_roles',
  PERMISSIONS: 'admin_dashboard_permissions',
};

// Initialize storage with mock data if empty
const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }
  if (!localStorage.getItem(STORAGE_KEYS.ROLES)) {
    localStorage.setItem(STORAGE_KEYS.ROLES, JSON.stringify(roles));
  }
  if (!localStorage.getItem(STORAGE_KEYS.PERMISSIONS)) {
    localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(permissions));
  }
};

// User operations
export const getUsers = (): User[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
};

export const addUser = (user: Omit<User, 'id'>): User => {
  const users = getUsers();
  const newUser = {
    ...user,
    id: Math.random().toString(36).substr(2, 9),
  };
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([...users, newUser]));
  return newUser;
};

export const updateUser = (user: User): User => {
  const users = getUsers();
  const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(updatedUsers));
  return user;
};

export const deleteUser = (id: string): void => {
  const users = getUsers();
  localStorage.setItem(
    STORAGE_KEYS.USERS,
    JSON.stringify(users.filter((u) => u.id !== id))
  );
};

// Role operations
export const getRoles = (): Role[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.ROLES) || '[]');
};

export const addRole = (role: Omit<Role, 'id'>): Role => {
  const roles = getRoles();
  const newRole = {
    ...role,
    id: Math.random().toString(36).substr(2, 9),
  };
  localStorage.setItem(STORAGE_KEYS.ROLES, JSON.stringify([...roles, newRole]));
  return newRole;
};

export const updateRole = (role: Role): Role => {
  const roles = getRoles();
  const updatedRoles = roles.map((r) => (r.id === role.id ? role : r));
  localStorage.setItem(STORAGE_KEYS.ROLES, JSON.stringify(updatedRoles));
  return role;
};

export const deleteRole = (id: string): void => {
  const roles = getRoles();
  localStorage.setItem(
    STORAGE_KEYS.ROLES,
    JSON.stringify(roles.filter((r) => r.id !== id))
  );
};

// Permission operations
export const getPermissions = (): Permission[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.PERMISSIONS) || '[]');
};

export const addPermission = (permission: Omit<Permission, 'id'>): Permission => {
  const permissions = getPermissions();
  const newPermission = {
    ...permission,
    id: Math.random().toString(36).substr(2, 9),
  };
  localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify([...permissions, newPermission]));
  return newPermission;
};

export const updatePermission = (permission: Permission): Permission => {
  const permissions = getPermissions();
  const updatedPermissions = permissions.map((p) => (p.id === permission.id ? permission : p));
  localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(updatedPermissions));
  return permission;
};

export const deletePermission = (id: string): void => {
  const permissions = getPermissions();
  localStorage.setItem(
    STORAGE_KEYS.PERMISSIONS,
    JSON.stringify(permissions.filter((p) => p.id !== id))
  );
};