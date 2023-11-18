import { atom } from "recoil";

const contactUsPopUpAtom = atom({
  key: "contactUsPopUp",
  default: {
    variant: "",
    isTriggered: "",
  },
});

export default contactUsPopUpAtom;
