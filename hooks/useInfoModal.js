import InfoModal from "@/components/infoModal/InfoModal";
import { create } from "zustand";

const useInfoModal = create((set) => ({
  movieId: undefined,
  isOpen: false,
  billboardVoice: false,
  infoModalVoice: false,
  openModal: (movieId) =>
    set({ isOpen: true, movieId, billboardVoice: false, infoModalVoice: true }),
  onClose: () =>
    set({
      isOpen: false,
      movieId: undefined,
      billboardVoice: true,
      infoModalVoice: false,
    }),
}));

export default useInfoModal;
