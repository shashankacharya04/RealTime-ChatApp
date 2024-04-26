import React from "react";
import { Send, CircleX } from "lucide-react";
import useSendMessage from "../../Hooks/useSendMessage";
const PreviewImageModal = ({ setImageUrl, imageUrl }) => {
  //flex-col fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center
  const { sendImg, loading } = useSendMessage();
  return (
    <div className="card h-auto w-96 bg-base-100 shadow-xl fixed inset-0 ">
      <div className="card-body">
        <img
          src={`${imageUrl}`}
          alt="image"
          className=" w-25 h-25 rounded-md border-2 box-border"
        />
        <div className="card-actions justify-end ">
          <button
            className="btn btn-primary "
            onClick={() => setImageUrl(null)}
          >
            <CircleX color="brown" size={30} />
          </button>
          <button
            className="btn  btn-primary"
            onClick={async () => await sendImg(imageUrl)}
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "send"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewImageModal;
