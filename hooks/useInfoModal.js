import { create } from "zustand";

const useInfoModal = create((set) => ({
  movieId: undefined,
  isOpen: false,
  billboardVoice: false,
  infoModalVoice: false,
  movieCardVoices: {},
  isVideoMuted: false,
  isBillboardVideoPlaying: true,
  setIsBillboardVideoPlaying: (value) =>
    set({ isBillboardVideoPlaying: value }),
  openModal: (movieId) =>
    set({
      isOpen: true,
      movieId,
      billboardVoice: false,
      infoModalVoice: true,
      isBillboardVideoPlaying: false,
    }),
  onClose: () =>
    set({
      isOpen: false,
      movieId: undefined,
      billboardVoice: true,
      infoModalVoice: false,
      isBillboardVideoPlaying: true,
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
  toggleVideoMute: () =>
    set((state) => ({ isVideoMuted: !state.isVideoMuted })),
}));

export default useInfoModal;
