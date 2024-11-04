interface ImageWithDefaultDrops {
  src: string | null | undefined;
  alt: string;
  defaultSrc: string;
  onClick: () => void;
}

// 이미지 오류 시 default 이미지를 로드하는 함수
function ImageWithDefault({
  src,
  alt,
  defaultSrc,
  onClick,
}: ImageWithDefaultDrops) {
  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = defaultSrc;
  };

  return (
    <img
      src={src && src.trim() !== '' ? src : defaultSrc}
      alt={alt}
      onError={handleError}
      onClick={onClick}
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        marginRight: '40px',
        objectFit: 'cover',
      }}
    />
  );
}

export default ImageWithDefault;
