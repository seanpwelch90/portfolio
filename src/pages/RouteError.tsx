import {isRouteErrorResponse, useRouteError, Link} from 'react-router-dom'

export default function RouteError() {
  const error = useRouteError()

  let title = 'Something went wrong'
  let message = 'An unexpected error occurred while loading this page.'

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = 'Page not found'
      message = 'The page you requested does not exist.'
    } else if (error.status === 503) {
      title = 'Service unavailable'
      message = 'The blog backend is unavailable right now. Please try again soon.'
    } else {
      title = `Error ${error.status}`
      message = error.statusText || message
    }
  }

  return (
    <section className="mx-auto max-w-2xl py-16 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-zinc-400">{message}</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
      >
        Back to Home
      </Link>
    </section>
  )
}
