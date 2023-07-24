export interface VideoMessageProps {
  url: string;
}

export const VideoMessage: React.FC<VideoMessageProps> = ({ url }) => (
  // <video controls style={{ paddingTop: 8, paddingBottom: 8 }}>
  //   <source src={url} type="video/mp4" />
  //   <track kind="captions" />
  // </video>
  <div
  style={{
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: '0',
    marginTop: '10px',
    marginBottom: '10px',
  }}>
  <iframe
    src={url}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Video Message"
    style={{
      left: '0',
      top: '0',
      height: '100%',
      width: '100%',
      position: 'absolute',
      border: '0',
    }}
  />
</div >
);
