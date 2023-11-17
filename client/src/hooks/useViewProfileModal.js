import { create } from "zustand";

const useViewProfileModal = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useViewProfileModal;
