import ScrollExpandMedia from "@/components/ScrollExpandMedia";

export default function Demo() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/demo.mp4"
      bgImageSrc="/demo-bg.svg"
      title="Découvrez notre approche"
      date="Formation IA"
      scrollToExpand="Défiler pour découvrir"
    />
  );
}
