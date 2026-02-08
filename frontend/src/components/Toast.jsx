import { useState, useCallback } from "react";

export default function Toast({ message, type = "success", duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useCallback(() => {
    const timer = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration])();

  if (!isVisible) return null;

  const bgColor = type === "error" ? "bg-red-500" : "bg-green-500";
  const icon = type === "error" ? "❌" : "✓";

  return (
    <div
      className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg fixed bottom-4 right-4 flex items-center gap-3`}
      role="alert"
      aria-live="polite"
    >
      <span>{icon}</span>
      <span>{message}</span>
    </div>
  );
}
