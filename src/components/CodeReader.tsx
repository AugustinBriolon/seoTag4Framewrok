import { OgMetaTags } from "../type"
import { toast } from "sonner"

export default function CodeReader({
  ogMetaTags,
  value
}: {
  ogMetaTags: OgMetaTags,
  value: string
}) {
  const codeLang = value

  const reactCode = `
  // Valid for all Html files

  <meta property="og:title" content="${ogMetaTags.title}" />
  <meta property="og:description" content="${ogMetaTags.description}" />
  <meta property="description" content="${ogMetaTags.description}" />
  <meta property="og:url" content="${ogMetaTags.url}" />
  <meta property="og:image" content="${ogMetaTags.image}" />
  <meta property="og:type" content="${ogMetaTags.type}" />

  <link rel="canonical" href="${ogMetaTags.url}" />
  `
  const vueCode = `
  // Using vue-meta (https://vue-meta.nuxtjs.org/)

  {
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        { hid: 'og:title', property: 'og:title', content: '${ogMetaTags.title}' },
        { hid: 'description', name: 'description', content: '${ogMetaTags.description}' },
        { hid: 'og:description', property: 'og:description', content: '${ogMetaTags.description}' },
        { hid: 'og:url', property: 'og:url', content: '${ogMetaTags.url}' },
        { hid: 'og:image', property: 'og:image', content: '${ogMetaTags.image}' },
        { hid: 'og:type', property: 'og:type', content: '${ogMetaTags.type}' },
      ]
    }
  }`

  const nextCode = `
  // Using Next Head (https://nextjs.org/docs/api-reference/next/head)

  <Head>
    <meta property="og:title" content="${ogMetaTags.title}" />
    <meta property="og:description" content="${ogMetaTags.description}" />
    <meta property="description" content="${ogMetaTags.description}" />
    <meta property="og:url" content="${ogMetaTags.url}" />
    <meta property="og:image" content="${ogMetaTags.image}" />
    <meta property="og:type" content="${ogMetaTags.type}" />

    <link rel="canonical" href="${ogMetaTags.url}" />
  </Head>`

  const nuxtCode = `
  // Using Nuxt Head (https://nuxt.com/docs/getting-started/seo-meta)

  head: {
    title: '${ogMetaTags.title}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '${ogMetaTags.description}' },
      { hid: 'og:title', property: 'og:title', content: '${ogMetaTags.title}' },
      { hid: 'og:description', property: 'og:description', content: '${ogMetaTags.description}' },
      { hid: 'og:url', property: 'og:url', content: '${ogMetaTags.url}' },
      { hid: 'og:image', property: 'og:image', content: '${ogMetaTags.image}' },
      { hid: 'og:type', property: 'og:type', content: '${ogMetaTags.type}' },
    ],
    link: [
      { rel: "canonical", href: '${ogMetaTags.url}' }
    ]
  }`
  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeLang === "react" ? reactCode : codeLang === "vue" ? vueCode : codeLang === "next" ? nextCode : nuxtCode)
    toast.success("Code copied to clipboard")
  }


  return (
    <div className="relative mt-5 h-full w-full">
      <pre className="h-full w-full overflow-auto bg-gray-800 text-white p-4 rounded-md">
        <code className="language-javascript">
          {codeLang === "react" && reactCode}
          {codeLang === "vue" && vueCode}
          {codeLang === "next" && nextCode}
          {codeLang === "nuxt" && nuxtCode}
        </code>


      </pre>
        <div className="absolute top-2 right-2" onClick={handleCopyCode}>
          <img src="/icons/copy.svg" alt="Icon Copy" className="h-5 w-5" />
        </div>
    </div>
  )
}
