import { atom } from "recoil";

const heroBannerSceneLoadingAtom = atom({
  key: "heroBannerSceneLoading",
  default: {
    loaded: false,
    progress: 0,
  },
});

export default heroBannerSceneLoadingAtom;
