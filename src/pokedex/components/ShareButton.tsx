import { ShareIcon } from "../../assets/icons";
import { useLocation } from "react-router-dom";
import { ModalAlert } from "./ModalAlert";
import { useState } from "react";

//TODO: Create my own modal for the alert
export const ShareButton = () => {
  const { pathname } = useLocation();

  const [{ showModal, ok }, setModalState] = useState({
    showModal: false,
    ok: true,
  });

  const handleHideModal = () =>
    setModalState({
      showModal: false,
      ok: true,
    });

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://${import.meta.env.VITE_URL}${pathname}`
      );

      setModalState({
        showModal: true,
        ok: true,
      });
    } catch (error) {
      setModalState({ showModal: true, ok: false });
    }
  };

  return (
    <>
      <span className="me-5" onClick={handleShare}>
        <ShareIcon width={30} height={30} />
      </span>

      <ModalAlert
        showModal={showModal}
        ok={ok}
        handleHideModal={handleHideModal}
      />
    </>
  );
};
