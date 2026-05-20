import { headers } from 'next/headers'
import { getDictionary } from '@/src/features/shared/lib/get-dictionary'
import { getPreferredLocale } from '@/src/features/shared/lib/get-preferred-locale'
import { NotFoundClient } from '@/src/features/shared/components/not-found-client'

export default async function NotFound() {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') ?? ''
  const locale = getPreferredLocale(acceptLanguage)
  const dictionary = await getDictionary(locale)

  return <NotFoundClient notFound={dictionary.notFound} />
}
