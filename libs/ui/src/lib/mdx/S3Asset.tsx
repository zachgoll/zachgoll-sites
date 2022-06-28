import Image, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image';
import { useState } from 'react';

export type S3AssetProps = Omit<ImageProps, 'loader'>;

const s3Loader: ImageLoader = ({ src }: ImageLoaderProps) => {
  return `https://media.zachgollwitzer.com/${src}`;
};

export function S3Asset(props: S3AssetProps) {
  const [ratio, setRatio] = useState(16 / 9);

  return (
    <div className="flex items-center justify-center relative w-full my-10">
      <Image
        loader={s3Loader}
        width={768}
        height={768 / ratio}
        placeholder="empty"
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          setRatio(naturalWidth / naturalHeight);
        }}
        {...props}
      />
    </div>
  );
}
