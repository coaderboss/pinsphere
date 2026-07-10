// context/AppContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { defaultPins, boards as initialBoards } from '@/data/pins';

const AppContext = createContext();
export const CURRENT_USER = "You";

export function AppProvider({ children }) {
  const [pins, setPins] = useState(defaultPins);
  const [savedPins, setSavedPins] = useState({});
  const [boards, setBoards] = useState(initialBoards);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);
  const [createPinOpen, setCreatePinOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'Your pin was saved to Home Decor', time: '2m ago' },
    { id: 2, text: 'New trending ideas in Fashion', time: '1h ago' },
  ]);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // 🌓 Theme state
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    // Load from localStorage if available
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const savePin = (pinId, boardId) => {
    setSavedPins(prev => ({ ...prev, [pinId]: boardId }));
  };
  const unsavePin = (pinId) => {
    setSavedPins(prev => {
      const updated = { ...prev };
      delete updated[pinId];
      return updated;
    });
  };
  const addPin = (newPin) => {
    const newId = pins.length > 0 ? Math.max(...pins.map(p => p.id)) + 1 : 1;
    // Add current user as author
    setPins(prev => [{ id: newId, author: CURRENT_USER, authorAvatar: 'https://i.pravatar.cc/40?img=7', ...newPin }, ...prev]);
  };

  // Filtered pins for main page
  let filteredPins = pins.filter(pin =>
    pin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pin.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (showSavedOnly) {
    filteredPins = filteredPins.filter(pin => savedPins.hasOwnProperty(pin.id));
  }

  const value = {
    pins: filteredPins,
    allPins: pins,
    savedPins,
    boards,
    searchTerm,
    setSearchTerm,
    showSavedOnly,
    setShowSavedOnly,
    savePin,
    unsavePin,
    addPin,
    selectedPin,
    setSelectedPin,
    createPinOpen,
    setCreatePinOpen,
    notifications,
    notifOpen,
    setNotifOpen,
    profileOpen,
    setProfileOpen,
    theme,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}