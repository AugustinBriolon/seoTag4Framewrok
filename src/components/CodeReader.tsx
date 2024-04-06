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
  <meta property="og:title" content="${ogMetaTags.title}" />
  <meta property="og:description" content="${ogMetaTags.description}" />
  <meta property="description" content="${ogMetaTags.description}" />
  <meta property="og:url" content="${ogMetaTags.url}" />
  <link rel="canonical" href="${ogMetaTags.url}" />
  <meta property="og:image" content="${ogMetaTags.image}" />
  <meta property="og:type" content="${ogMetaTags.type}" />
  <meta property="og:author" content="${ogMetaTags.author}" />
  <meta property="author" content="${ogMetaTags.author}" />
  `
  const vueCode = `
  meta: {
    title: '${ogMetaTags.title}',
    description: '${ogMetaTags.description}',
    url: '${ogMetaTags.url}',
    image: '${ogMetaTags.image}',
    type: '${ogMetaTags.type}',
    author: '${ogMetaTags.author}'
  }`

  const nextCode = `
  <Head>
    <meta property="og:title" content="${ogMetaTags.title}" />
    <meta property="og:description" content="${ogMetaTags.description}" />
    <meta property="description" content="${ogMetaTags.description}" />
    <meta property="og:url" content="${ogMetaTags.url}" />
    <link rel="canonical" href="${ogMetaTags.url}" />
    <meta property="og:image" content="${ogMetaTags.image}" />
    <meta property="og:type" content="${ogMetaTags.type}" />
    <meta property="og:author" content="${ogMetaTags.author}" />
    <meta property="author" content="${ogMetaTags.author}" />
  </Head>`

  const nuxtCode = `
  head: {
    title: '${ogMetaTags.title}',
    meta: [
      { hid: 'description', name: 'description', content: '${ogMetaTags.description}' },
      { hid: 'og:title', property: 'og:title', content: '${ogMetaTags.title}' },
      { hid: 'og:description', property: 'og:description', content: '${ogMetaTags.description}' },
      { hid: 'og:url', property: 'og:url', content: '${ogMetaTags.url}' },
      { hid: 'og:image', property: 'og:image', content: '${ogMetaTags.image}' },
      { hid: 'og:type', property: 'og:type', content: '${ogMetaTags.type}' },
      { hid: 'og:author', property: 'og:author', content: '${ogMetaTags.author}' }
    ]
  }`

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeLang === "react" ? reactCode : codeLang === "vue" ? vueCode : codeLang === "next" ? nextCode : nuxtCode)
    toast.success("Code copied to clipboard")
  }


  return (
    <div className="mt-5 h-full w-full">
      <pre className="relative h-full w-full overflow-auto bg-gray-800 text-white p-4 rounded-md">
        <code className="language-javascript">
          {codeLang === "react" && reactCode}
          {codeLang === "vue" && vueCode}
          {codeLang === "next" && nextCode}
          {codeLang === "nuxt" && nuxtCode}
        </code>

        <div className="absolute top-2 right-2" onClick={handleCopyCode}>
          <img src="/icons/copy.svg" alt="Icon Copy" className="h-5 w-5" />
        </div>

      </pre>
    </div>
  )
}
