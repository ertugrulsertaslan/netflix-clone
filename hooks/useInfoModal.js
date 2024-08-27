import InfoModal from "@/components/infoModal/InfoModal";
import { create } from "zustand";

const useInfoModal = create((set) => ({
  movieId: undefined,
  isOpen: false,
  billboardVoice: false,
  infoModalVoice: false,
  movieCardVoices: {},
  openModal: (movieId) =>
    set({ isOpen: true, movieId, billboardVoice: false, infoModalVoice: true }),
  onClose: () =>
    set({
      isOpen: false,
      movieId: undefined,
      billboardVoice: true,
      infoModalVoice: false,
    }),

  setBillboardVoice: (value) => set({ billboardVoice: value }),
  setInfoModalVoice: (value) => set({ infoModalVoice: value }),
  setMovieCardVoice: (id, value) =>
    set((state) => ({
      movieCardVoices: {
        ...state.movieCardVoices,
        [id]: value,
      },
    })),
}));

export default useInfoModal;
