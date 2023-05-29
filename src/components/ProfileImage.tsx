import Image from "next/image";
import React, { type FC } from "react";
import { VscAccount } from "react-icons/vsc";

interface ProfileImageProps {
  src?: string | null;
  className?: string;
}

const ProfileImage: FC<ProfileImageProps> = ({ src, className = "" }) => {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src == null ? (
        <VscAccount className="w-full h-full" />
      ) : (
        <Image
          src={src}
          alt="profile image"
          // width={50}
          // height={50}
          quality={100}
          fill
        />
      )}
    </div>
  );
};

export default ProfileImage;
