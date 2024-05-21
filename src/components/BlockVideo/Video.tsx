export const Video = () => {
  return (
    <div className="flex h-full py-20 justify-center">
      <video
        className="rounded-xl"
        src="src/assets/video.mp4"
        controls
        width="700"
      ></video>
    </div>
  );
};
