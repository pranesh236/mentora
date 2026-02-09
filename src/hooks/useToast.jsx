import { createContext, useContext, useMemo, useState } from 'react';
import ToastViewport from '../components/ui/Toast';

const ToastContext = createContext(null);
let toastCounter = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const pushToast = (toast) => {
    const id = toastCounter + 1;
    toastCounter = id;
    const payload = {
      id,
      title: toast.title,
      description: toast.description,
      type: toast.type ?? 'info',
      duration: toast.duration ?? 3200,
    };

    setToasts((prev) => [...prev, payload]);

    if (payload.duration !== 0) {
      window.setTimeout(() => dismissToast(id), payload.duration);
    }
  };

  const value = useMemo(() => ({ toasts, pushToast, dismissToast }), [toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
