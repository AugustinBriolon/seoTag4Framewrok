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
  ${ogMetaTags && `// Valid for all Html files`}

  ${ogMetaTags.title && `<meta property="og:title" content="${ogMetaTags.title}" />`}
  ${ogMetaTags.description && `<meta property="og:description" content="${ogMetaTags.description}" />`}
  ${ogMetaTags.description && `<meta property="description" content="${ogMetaTags.description}" />`}
  ${ogMetaTags.url && `<meta property="og:url" content="${ogMetaTags.url}" />`}
  ${ogMetaTags.image && `<meta property="og:image" content="${ogMetaTags.image}" />`}
  ${ogMetaTags.type && `<meta property="og:type" content="${ogMetaTags.type}" />`}
  ${ogMetaTags.site_name && `<meta property="og:site_name" content="${ogMetaTags.site_name}" />`}
  ${ogMetaTags.url && `<link rel="canonical" href="${ogMetaTags.url}" />`}`

  const vueCode = `
  ${ogMetaTags && `// Using vue-meta (https://vue-meta.nuxtjs.org/)`}

  {
    metaInfo: {
      meta: [
        ${ogMetaTags.title && `{ hid: 'og:title', property: 'og:title', content: '${ogMetaTags.title}' },`}
        ${ogMetaTags.description && `{ hid: 'description', name: 'description', content: '${ogMetaTags.description}' },`}
        ${ogMetaTags.description && `{ hid: 'og:description', property: 'og:description', content: '${ogMetaTags.description}' },`}
        ${ogMetaTags.url && `{ hid: 'og:url', property: 'og:url', content: '${ogMetaTags.url}' },`}
        ${ogMetaTags.image && `{ hid: 'og:image', property: 'og:image', content: '${ogMetaTags.image}' },`}
        ${ogMetaTags.site_name && `{ hid: 'og:site_name', property: 'og:site_name', content: '${ogMetaTags.site_name},`}
        ${ogMetaTags.type && `{ hid: 'og:type', property: 'og:type', content: '${ogMetaTags.type}' },`}
      ]
    }
  }`

  const nextCode = `
  ${ogMetaTags && `// Using Next Head (https://nextjs.org/docs/api-reference/next/head)`}

  <Head>
  ${ogMetaTags.title && `<meta property="og:title" content="${ogMetaTags.title}" />`}
  ${ogMetaTags.description && `<meta name="description" content="${ogMetaTags.description}" />`}
  ${ogMetaTags.description && `<meta property="og:description" content="${ogMetaTags.description}" />`}
  ${ogMetaTags.url && `<meta property="og:url" content="${ogMetaTags.url}" />`}
  ${ogMetaTags.image && `<meta property="og:image" content="${ogMetaTags.image}" />`}
  ${ogMetaTags.site_name && `<meta property="og:site_name" content="${ogMetaTags.site_name}" />`}
  ${ogMetaTags.type && `<meta property="og:type" content="${ogMetaTags.type}" />`}
  ${ogMetaTags.url && `<link rel="canonical" href="${ogMetaTags.url}" />`}
  </Head>`

  const nuxtCode = `
  ${ogMetaTags && `// Using Nuxt Head (https://nuxt.com/docs/getting-started/seo-meta)`}

  head: {
    ${ogMetaTags.title && `title: '${ogMetaTags.title}',`}
    meta: [
      ${ogMetaTags.description && `{ hid: 'description', name: 'description', content: '${ogMetaTags.description}' },`}
      ${ogMetaTags.title && `{ hid: 'og:title', property: 'og:title', content: '${ogMetaTags.title}' },`}
      ${ogMetaTags.description && `{ hid: 'og:description', property: 'og:description', content: '${ogMetaTags.description}' },`}
      ${ogMetaTags.url && `{ hid: 'og:url', property: 'og:url', content: '${ogMetaTags.url}' },`}
      ${ogMetaTags.image && `{ hid: 'og:image', property: 'og:image', content: '${ogMetaTags.image}' },`}
      ${ogMetaTags.site_name && `{ hid: 'og:site_name', property: 'og:site_name', content: '${ogMetaTags.site_name},`}
      ${ogMetaTags.type && `{ hid: 'og:type', property: 'og:type', content: '${ogMetaTags.type}' },`}
    ],
    link: [
      ${ogMetaTags.url && `{ rel: 'canonical', href: '${ogMetaTags.url}' },`}
    ]
  }`

  const angularCode = `
  ${ogMetaTags && `// You need : import { Meta } from '@angular/platform-browser';`}

  constructor(private metaTagService: Meta) {}
  ngOnInit() {
    this.metaTagService.addTags([
      ${ogMetaTags.title && `{ property: 'og:title', content: '${ogMetaTags.title}' },`}
      ${ogMetaTags.description && `{ name: 'description', content: '${ogMetaTags.description}' },`}
      ${ogMetaTags.description && `{ property: 'og:description', content: '${ogMetaTags.description}' },`}
      ${ogMetaTags.url && `{ property: 'og:url', content: '${ogMetaTags.url}' },`}
      ${ogMetaTags.image && `{ property: 'og:image', content: '${ogMetaTags.image}' },`}
      ${ogMetaTags.site_name && `{ property: 'og:site_name', content: '${ogMetaTags.site_name},`}
      ${ogMetaTags.type && `{ property: 'og:type', content: '${ogMetaTags.type}' },`}
    ]);
  }`

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeLang === "react" ? reactCode : codeLang === "vue" ? vueCode : codeLang === "next" ? nextCode : codeLang === "nuxt" ? nuxtCode : angularCode)
    toast.success("Code copied to clipboard")
  }


  return (
    <div className="relative mt-5 h-full w-full">
      <pre className="h-full w-full overflow-auto rounded-lg bg-gray-800 text-white p-4">
        <code className="text-xs sm:text-sm">
          {codeLang === "react" && reactCode}
          {codeLang === "vue" && vueCode}
          {codeLang === "next" && nextCode}
          {codeLang === "nuxt" && nuxtCode}
          {codeLang === "angular" && angularCode}
        </code>


      </pre>
      <div className="absolute top-2 right-2" onClick={handleCopyCode}>
        <img src="/icons/copy.svg" alt="Icon Copy" className="h-5 w-5" />
      </div>
    </div>
  )
}
