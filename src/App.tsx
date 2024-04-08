import { useState } from "react";
import { OgMetaTags } from "./type";
import clsx from "clsx";

import Footer from "./components/Footer";
import Input from "./components/Input";
import TagToCode from "./components/TagToCode";
import Hero from "./components/Hero";


export default function App() {
  const [ogMetaTags, setOgMetaTags] = useState<OgMetaTags>({
    title: '',
    description: '',
    url: '',
    image: '',
    type: '',
  });

  const titleHint = (value: string) => {
    return (
      <p className='text-xs'>
        <span className={clsx(
          value.length > 80 ? "text-red-500" : value.length >= 70 ? "text-orange-500" : value.length >= 40 ? "text-green-500" : value.length >= 25 ? "text-orange-500" : "text-red-500",
          "font-bold"
        )}>
          {value.length}
        </span> characters
      </p>
    )
  }
  const descriptionHint = (value: string) => {
    return (
      <p className="text-xs">
        <span className={clsx(
          value.length > 180 ? "text-red-500" : value.length >= 160 ? "text-orange-500" : value.length >= 150 ? "text-green-500" : value.length >= 100 ? "text-orange-500" : "text-red-500",
          "font-bold"
        )}>
          {value.length} </span>
        characters
      </p>
    )
  }


  return (
    <div className="min-h-screen h-fit w-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-between px-8 py-4 gap-12">
      <div className="flex flex-col gap-8 h-full w-full">
        <Hero />
        <section className="flex flex-col md:flex-row gap-8 h-fit w-full">
          <div className="w-full md:w-1/2 max-h-full flex flex-col gap-4">
            <Input id="titleTag" imageScr="/icons/title.svg" hint={() => titleHint(ogMetaTags.title)} hintContent="Try to provide a title tag of at least 40-45 characters, and a maximum of 65-70 characters." label="Title" placeholder="MetaTags for Frameworks" type="text" value={ogMetaTags.title} onChange={(e) => setOgMetaTags({ ...ogMetaTags, title: e.target.value })} />
            <Input id="descriptionTag" textaerea imageScr="/icons/description.svg" hint={() => descriptionHint(ogMetaTags.description)} hintContent="Try to provide a description tag of at least 150 characters, and a maximum of 160 characters." label="Description" placeholder="My site description" type="text" value={ogMetaTags.description} onChange={(e) => setOgMetaTags({ ...ogMetaTags, description: e.target.value })} />
            <Input id="urlTag" label="URL" imageScr="/icons/url.svg" placeholder="https://www.mysite.com" type="text" value={ogMetaTags.url} onChange={(e) => setOgMetaTags({ ...ogMetaTags, url: e.target.value })} />
            <Input id="imageTag" label="Image" imageScr="/icons/image.svg" placeholder="https://www.mysite.com/ogimage.webp (1200px x 630px)" type="text" value={ogMetaTags.image} onChange={(e) => setOgMetaTags({ ...ogMetaTags, image: e.target.value })} />
            <Input id="typeTag" label="Type" imageScr="/icons/type.svg" placeholder="website" type="text" value={ogMetaTags.type} onChange={(e) => setOgMetaTags({ ...ogMetaTags, type: e.target.value })} />
          </div>
          <div className="w-full md:w-1/2 h-full overflow-hidden">
            <TagToCode ogMetaTags={ogMetaTags} />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}