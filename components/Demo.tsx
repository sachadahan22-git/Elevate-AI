import ScrollExpandMedia from "@/components/ScrollExpandMedia";

export default function Demo() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="https://www.youtube.com/watch?v=VOTRE_VIDEO_ID"
      bgImageSrc="/demo-bg.svg"
      title="Découvrez notre approche"
      date="Formation IA"
      scrollToExpand="Défiler pour découvrir"
    />
  );
}
