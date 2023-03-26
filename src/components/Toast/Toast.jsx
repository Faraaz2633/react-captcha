import { useEffect } from "react";

//css
import "./Toast.css";

//icons
import { FaTimes } from "react-icons/fa";

//context
import { useToast } from "../../context/ToastContext";

export function Toast() {
  const { toast, hideToast } = useToast();

  useEffect(() => {
    let timer = setTimeout(() => {
      hideToast();
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast, hideToast]);

  return (
    <div className={toast.isVisible ? "toast show" : "toast hide"}>
      <span style={{ padding: "0.5rem" }}>{toast.message}</span>
      <button
        type="button"
        className="icon--button"
        style={{
          background: "var(--text-white)",
          borderColor: "transparent",
        }}
        onClick={() => {
          hideToast();
        }}
      >
        <FaTimes />
      </button>
    </div>
  );
}
