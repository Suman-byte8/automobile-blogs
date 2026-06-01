import { useState } from "react";
import authorAvatar from "../assets/social_buzz_media.png";
import noImage from "../assets/no-image.png";

export default function AuthorBio({ author }) {
  const [imgSrc, setImgSrc] = useState(authorAvatar);

  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
        <img
          src={imgSrc}
          alt={author.name}
          className="h-full w-full object-cover"
          onError={() => setImgSrc(noImage)}
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{author.name}</p>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          {author.bio}
        </p>
      </div>
    </div>
  );
}
