import Image from "next/image";
import React, { FC } from "react";

interface ProfileImageProps {
  src?: string | null;
  className?: string;
}

const ProfileImage: FC<ProfileImageProps> = ({ src = "", className = "" }) => {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src !== null ? (
        <Image
          src={src}
          alt="profile image"
          // width={50}
          // height={50}
          quality={100}
          fill
        />
      ) : null}
    </div>
  );
};

export default ProfileImage;
