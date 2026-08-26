import { useEffect, useState } from 'react'

const cache = new Map<string, unknown>()

export function useData<T>(path: string): { data: T | null; loading: boolean; error: boolean } {
  const [data, setData] = useState<T | null>((cache.get(path) as T) ?? null)
  const [loading, setLoading] = useState(!cache.has(path))
  const [error, setError] = useState(false)

  useEffect(() => {
    if (cache.has(path)) {
      setData(cache.get(path) as T)
      setLoading(false)
      return
    }
    let cancelled = false
    setLoading(true)
    fetch(`${import.meta.env.BASE_URL}${path}`)
      .then((res) => {
        if (!res.ok) throw new Error('failed')
        return res.json()
      })
      .then((json) => {
        if (cancelled) return
        cache.set(path, json)
        setData(json)
        setLoading(false)
      })
      .catch(() => {
        if (cancelled) return
        setError(true)
        setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [path])

  return { data, loading, error }
}
