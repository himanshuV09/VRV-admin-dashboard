import React, { useState } from 'react';
import { Role, Permission } from '../types';

interface RoleFormProps {
  permissions: Permission[];
  onSubmit: (roleData: Omit<Role, 'id'>) => void;
  onCancel: () => void;
  initialData?: Role;
}

export function RoleForm({ permissions, onSubmit, onCancel, initialData }: RoleFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    selectedPermissions: initialData?.permissions.map((p) => p.id) || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPermissionObjects = permissions.filter((p) =>
      formData.selectedPermissions.includes(p.id)
    );

    onSubmit({
      name: formData.name,
      permissions: selectedPermissionObjects,
    });
  };

  const handlePermissionToggle = (permissionId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedPermissions: prev.selectedPermissions.includes(permissionId)
        ? prev.selectedPermissions.filter((id) => id !== permissionId)
        : [...prev.selectedPermissions, permissionId],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
        <div className="space-y-2">
          {permissions.map((permission) => (
            <label key={permission.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.selectedPermissions.includes(permission.id)}
                onChange={() => handlePermissionToggle(permission.id)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{permission.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          {initialData ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
}