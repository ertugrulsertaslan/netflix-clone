import { create } from "zustand";

const useInfoModal = create((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId) => set({ isOpen: true, movieId }),
  onClose: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;
