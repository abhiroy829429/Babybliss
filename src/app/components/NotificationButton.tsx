"use client";

import { useCallback, useState } from "react";

type ExtendedNotificationOptions = NotificationOptions & {
  vibrate?: number[];
};

export function NotificationButton() {
  const [status, setStatus] = useState<string | null>(null);

  const handleClick = useCallback(async () => {
    try {
      if (typeof window === "undefined") {
        setStatus("Notifications are only available in the browser.");
        return;
      }

      if (!("Notification" in window)) {
        setStatus("This browser does not support notifications.");
        return;
      }

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setStatus("Please allow notifications to see the demo.");
        return;
      }

      // Prefer using the registered service worker to show the notification
      if ("serviceWorker" in navigator) {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg) {
          const options: ExtendedNotificationOptions = {
            body: "New arrivals just landed in Baby Essentials ✨",
            icon: "/icons/icon-192.png",
            badge: "/icons/badge-72.png",
            vibrate: [50, 50, 50],
          };
          await reg.showNotification("BabyBliss", options);
          setStatus("Notification sent from service worker.");
          return;
        }
      }

      // Fallback to direct Notification API
      new Notification("BabyBliss", {
        body: "New arrivals just landed in Baby Essentials ✨",
      });
      setStatus("Notification sent.");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong while sending notification.");
    }
  }, []);

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        onClick={handleClick}
        className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/40 transition hover:bg-brand-dark hover:shadow-lg active:scale-95"
      >
        Send Notification
      </button>
      {status && (
        <p className="text-xs text-slate-600" aria-live="polite">
          {status}
        </p>
      )}
    </div>
  );
}


