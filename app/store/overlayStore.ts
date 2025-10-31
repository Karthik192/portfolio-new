import { create } from "zustand";

interface OverlayState {
  openOverlay: boolean;
  toggleOpenOverlay: () => void;
}

export const useOverlayStore = create<OverlayState>((set) => ({
  openOverlay: false,
  toggleOpenOverlay: () =>
    set((state: { openOverlay: any }) => ({ openOverlay: !state.openOverlay })),
}));

export default useOverlayStore;
