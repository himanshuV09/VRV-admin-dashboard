import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { UserList } from './components/UserList';
import { RoleList } from './components/RoleList';
import { PermissionList } from './components/PermissionList';
import { Modal } from './components/Modal';
import { UserForm } from './components/UserForm';
import { RoleForm } from './components/RoleForm';
import { PermissionForm } from './components/PermissionForm';
import { User, Role, Permission } from './types';
import * as api from './services/api';

function App() {
  const [currentView, setCurrentView] = useState('users');
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [selectedRole, setSelectedRole] = useState<Role | undefined>();
  const [selectedPermission, setSelectedPermission] = useState<Permission | undefined>();

  useEffect(() => {
    setUsers(api.getUsers());
    setRoles(api.getRoles());
    setPermissions(api.getPermissions());
  }, []);

  // User handlers
  const handleAddUser = () => {
    setSelectedUser(undefined);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    api.deleteUser(userId);
    setUsers(api.getUsers());
  };

  const handleUserSubmit = (userData: Omit<User, 'id'>) => {
    if (selectedUser) {
      api.updateUser({ ...userData, id: selectedUser.id });
    } else {
      api.addUser(userData);
    }
    setUsers(api.getUsers());
    setIsModalOpen(false);
  };

  // Role handlers
  const handleAddRole = () => {
    setSelectedRole(undefined);
    setIsModalOpen(true);
  };

  const handleEditRole = (role: Role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleDeleteRole = (roleId: string) => {
    api.deleteRole(roleId);
    setRoles(api.getRoles());
  };

  const handleRoleSubmit = (roleData: Omit<Role, 'id'>) => {
    if (selectedRole) {
      api.updateRole({ ...roleData, id: selectedRole.id });
    } else {
      api.addRole(roleData);
    }
    setRoles(api.getRoles());
    setIsModalOpen(false);
  };

  // Permission handlers
  const handleAddPermission = () => {
    setSelectedPermission(undefined);
    setIsModalOpen(true);
  };

  const handleEditPermission = (permission: Permission) => {
    setSelectedPermission(permission);
    setIsModalOpen(true);
  };

  const handleDeletePermission = (permissionId: string) => {
    api.deletePermission(permissionId);
    setPermissions(api.getPermissions());
  };

  const handlePermissionSubmit = (permissionData: Omit<Permission, 'id'>) => {
    if (selectedPermission) {
      api.updatePermission({ ...permissionData, id: selectedPermission.id });
    } else {
      api.addPermission(permissionData);
    }
    setPermissions(api.getPermissions());
    setIsModalOpen(false);
  };

  const renderModal = () => {
    switch (currentView) {
      case 'users':
        return (
          <UserForm
            roles={roles}
            onSubmit={handleUserSubmit}
            onCancel={() => setIsModalOpen(false)}
            initialData={selectedUser}
          />
        );
      case 'roles':
        return (
          <RoleForm
            permissions={permissions}
            onSubmit={handleRoleSubmit}
            onCancel={() => setIsModalOpen(false)}
            initialData={selectedRole}
          />
        );
      case 'permissions':
        return (
          <PermissionForm
            onSubmit={handlePermissionSubmit}
            onCancel={() => setIsModalOpen(false)}
            initialData={selectedPermission}
          />
        );
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    const action = selectedUser || selectedRole || selectedPermission ? 'Edit' : 'Add';
    const type = currentView.slice(0, -1); // Remove 's' from the end
    return `${action} ${type.charAt(0).toUpperCase() + type.slice(1)}`;
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {currentView === 'users' && (
        <UserList
          users={users}
          roles={roles}
          onAddUser={handleAddUser}
          onEditUser={handleEditUser}
          onDeleteUser={handleDeleteUser}
        />
      )}
      {currentView === 'roles' && (
        <RoleList
          roles={roles}
          onAddRole={handleAddRole}
          onEditRole={handleEditRole}
          onDeleteRole={handleDeleteRole}
        />
      )}
      {currentView === 'permissions' && (
        <PermissionList
          permissions={permissions}
          onAddPermission={handleAddPermission}
          onEditPermission={handleEditPermission}
          onDeletePermission={handleDeletePermission}
        />
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={getModalTitle()}
      >
        {renderModal()}
      </Modal>
    </Layout>
  );
}

export default App;