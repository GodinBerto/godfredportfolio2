import { useEffect } from "react";

interface ChatPopupProps {
  setIsSearchOpen: (isOpen: boolean) => void;
}

export default function ChatPopup({ setIsSearchOpen }: ChatPopupProps) {
  return (
    <div className="fixed inset-0 h-screen w-screen z-60 flex items-center justify-center bg-black/60 p-6">
      <div className="w-full max-w-xl rounded-xl bg-black p-4 shadow-xl">
        <div className="mb-3 flex items-center justify-between text-white">
          <h2 className="text-lg font-semibold">Search</h2>
          <button onClick={() => setIsSearchOpen(false)}>Close</button>
        </div>

        <input
          autoFocus
          type="text"
          placeholder="What do you want to search for?"
          className="w-full rounded-md border px-3 py-2 outline-none text-gray-200 border-gray-500 focus:border-gray-500 focus:ring focus:ring-gray-500/50"
        />
      </div>
    </div>
  );
}
