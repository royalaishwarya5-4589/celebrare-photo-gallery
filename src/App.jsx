import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import useFetchPhotos from './hooks/useFetchPhotos'
import PhotoCard from './components/PhotoCard'
import WelcomeBanner from './components/WelcomeBanner'
import { favoritesReducer } from './reducers/favoritesReducer'

export default function App() {
  const { photos, loading, error } = useFetchPhotos()

  const [search, setSearch] = useState('')
  const [showWelcome, setShowWelcome] = useState(true)

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    [],
    () => {
      try {
        const saved = localStorage.getItem('celebrare-favorites')
        return saved ? JSON.parse(saved) : []
      } catch {
        return []
      }
    }
  )

  useEffect(() => {
    try {
      localStorage.setItem(
        'celebrare-favorites',
        JSON.stringify(favorites)
      )
    } catch (error) {
      console.error('Unable to save favorites:', error)
    }
  }, [favorites])

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    )
  }, [photos, search])

  const toggleFavorite = useCallback((photoId) => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: photoId,
    })
  }, [])

  // Show the welcome banner before the gallery.
  if (showWelcome) {
    return (
      <WelcomeBanner
        onEnter={() => setShowWelcome(false)}
      />
    )
  }

  // Your existing photo gallery starts here.
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-violet-700 to-indigo-700 px-4 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-200">
            CELEBRARE
          </p>

          <h1 className="text-3xl font-bold sm:text-5xl">
            Discover Beautiful Photos
          </h1>

          <p className="mt-3 text-violet-100">
            Explore photography from talented creators around the world.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              {photos.length} Photos
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              ♥ {favorites.length} Favorites
            </span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <label
            htmlFor="author-search"
            className="mb-2 block font-semibold text-gray-700"
          >
            Search by photographer
          </label>

          <input
            id="author-search"
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Enter an author's name..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
          />
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div
              className="h-12 w-12 animate-spin rounded-full border-4 border-violet-200 border-t-violet-700"
              role="status"
              aria-label="Loading photos"
            />
            <p className="mt-4 text-gray-600">
              Loading photos...
            </p>
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="rounded-xl bg-red-50 p-6 text-center text-red-700"
          >
            {error}. Please refresh the page and try again.
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-gray-800">
                Photo Gallery
              </h2>

              <p className="text-sm text-gray-500">
                {filteredPhotos.length} results
              </p>
            </div>

            {filteredPhotos.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredPhotos.map((photo) => (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    isFavorite={favorites.includes(photo.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-white p-10 text-center shadow-sm">
                <p className="text-lg font-semibold text-gray-700">
                  No photos found
                </p>

                <p className="mt-2 text-gray-500">
                  Try searching for another author.
                </p>
              </div>
            )}
          </>
        )}
      </section>

      <footer className="mt-10 border-t border-gray-200 bg-white px-4 py-6 text-center text-sm text-gray-500">
        Built with React, Vite and Tailwind CSS
      </footer>
    </main>
  )
}
