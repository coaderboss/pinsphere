// components/NotificationsDropdown.jsx
'use client';
import { useAppContext } from '@/context/AppContext';

export default function NotificationsDropdown() {
  const { notifications } = useAppContext();
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-700 rounded-xl shadow-lg border dark:border-gray-600 py-2 z-50">
      <h3 className="px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white">Notifications</h3>
      {notifications.length === 0 ? (
        <p className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">No new notifications</p>
      ) : (
        notifications.map(notif => (
          <div key={notif.id} className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-600 text-sm dark:text-white">
            <p>{notif.text}</p>
            <span className="text-xs text-gray-400 dark:text-gray-400">{notif.time}</span>
          </div>
        ))
      )}
    </div>
  );
}