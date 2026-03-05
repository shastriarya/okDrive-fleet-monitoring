function VideoFeed() {

  return (
    <div style={{ marginTop: "20px" }}>

      <h3>Dashcam Feed</h3>

      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/IVa59mpPJTg"
        title="dashcam"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>
  )
}

export default VideoFeed