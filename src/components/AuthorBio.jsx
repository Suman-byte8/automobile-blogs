export default function AuthorBio({ author }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
        <div className="flex h-full w-full items-center justify-center text-xl font-bold text-white">
          {author.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
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
