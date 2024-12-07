import React from 'react';
import { Permission } from '../types';
import { Edit2, Trash2 } from 'lucide-react';
import { AddButton } from './AddButton';

interface PermissionListProps {
  permissions: Permission[];
  onEditPermission: (permission: Permission) => void;
  onDeletePermission: (permissionId: string) => void;
  onAddPermission: () => void;
}

export function PermissionList({
  permissions,
  onEditPermission,
  onDeletePermission,
  onAddPermission,
}: PermissionListProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Permissions</h2>
        <AddButton onClick={onAddPermission} label="Add Permission" />
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {permissions.map((permission) => (
                <tr key={permission.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{permission.name}</td>
                  <td className="px-6 py-4">{permission.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onEditPermission(permission)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDeletePermission(permission.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}