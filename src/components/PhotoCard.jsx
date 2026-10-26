
export default function PhotoCard({
  photo,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        className="h-56 w-full object-cover"
      />

      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <h2 className="truncate font-semibold text-gray-800">
            {photo.author}
          </h2>
          <p className="text-sm text-gray-500">
            Photo ID: {photo.id}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={
            isFavorite
              ? 'Remove from favorites'
              : 'Add to favorites'
          }
          aria-pressed={isFavorite}
          className={`rounded-full p-2 text-2xl transition ${
            isFavorite
              ? 'text-red-500'
              : 'text-gray-400 hover:text-red-500'
          }`}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>
    </article>
  )
}
