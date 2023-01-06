import { ShareIcon } from "../../assets/icons";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

export const ShareButton = () => {
  const { pathname } = useLocation();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://${import.meta.env.VITE_URL}${pathname}`
      );

      await Swal.fire({
        text: "Copied to clipboard",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } catch (error) {
      Swal.fire({
        text: "Error trying to copy to clipboard",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <span className="me-5" onClick={handleShare}>
      <ShareIcon width={30} height={30} />
    </span>
  );
};
