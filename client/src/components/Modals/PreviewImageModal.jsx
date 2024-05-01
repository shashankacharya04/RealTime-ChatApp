import React from "react";
import { CircleX } from "lucide-react";
import useSendMessage from "../../Hooks/useSendMessage";
const PreviewImageModal = ({
  setImageUrl,
  imageUrl,
  setVideoUrl,
  videoUrl,
}) => {
  //flex-col fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center
  const { sendImg, sendVdo, loading } = useSendMessage();
  const spanRef = React.useRef(null);
  console.log("spanref is", spanRef);
  return (
    <div className="card h-auto w-96 bg-base-100 shadow-xl fixed inset-0 ">
      <div className="card-body">
        {imageUrl && (
          <img
            src={`${imageUrl}`}
            alt="image"
            className=" w-25 h-25 rounded-md border-2 box-border"
          />
        )}
        {videoUrl && (
          <video controls className="h-64 w-full" autoPlay>
            <source src={`${videoUrl}`} type="video/mp4" />
          </video>
        )}

        <div className="card-actions justify-end ">
          <button
            className="btn btn-primary "
            onClick={() => {
              setImageUrl(null);
              setVideoUrl(null);
            }}
          >
            <CircleX color="brown" size={30} />
          </button>
          <button
            className="btn  btn-primary"
            onClick={async () => {
              imageUrl && (await sendImg(imageUrl));
              videoUrl && (await sendVdo(videoUrl));
            }}
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner" ref={spanRef}></span>
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
