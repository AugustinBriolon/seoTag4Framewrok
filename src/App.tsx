import { useState } from "react";
import { OgMetaTags } from "./type";

import Footer from "./components/Footer";
import Input from "./components/Input";
import TagToCode from "./components/TagToCode";


export default function App() {
  const [ogMetaTags, setOgMetaTags] = useState<OgMetaTags>({
    title: '',
    description: '',
    url: '',
    image: '',
    type: '',
  });


  return (
    <div className="min-h-screen h-fit  w-screen flex flex-col items-center justify-between px-8 py-4 gap-12">

      <div className="flex flex-col gap-8 h-full w-full">

        <div className="w-full flex items-center justify-start gap-2">
          <img src="/icons/logo.svg" alt="Icon Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-bold">MetaTags for Frameworks</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 h-fit w-full">
          <div className="w-full md:w-1/2 max-h-full flex flex-col gap-4">
            <Input id="titleTag" imageScr="/icons/title.svg" label="Title" placeholder="My site" type="text" value={ogMetaTags.title} onChange={(e) => setOgMetaTags({ ...ogMetaTags, title: e.target.value })} />
            <Input id="descriptionTag" imageScr="/icons/description.svg" label="Description" placeholder="My site description" type="text" value={ogMetaTags.description} onChange={(e) => setOgMetaTags({ ...ogMetaTags, description: e.target.value })} />
            <Input id="urlTag" label="URL" imageScr="/icons/url.svg" placeholder="https://www.mysite.com" type="text" value={ogMetaTags.url} onChange={(e) => setOgMetaTags({ ...ogMetaTags, url: e.target.value })} />
            <Input id="imageTag" label="Image" imageScr="/icons/image.svg" placeholder="https://www.mysite.com/ogimage.webp (1200px x 630px)" type="text" value={ogMetaTags.image} onChange={(e) => setOgMetaTags({ ...ogMetaTags, image: e.target.value })} />
            <Input id="typeTag" label="Type" imageScr="/icons/type.svg" placeholder="website" type="text" value={ogMetaTags.type} onChange={(e) => setOgMetaTags({ ...ogMetaTags, type: e.target.value })} />
          </div>
          <div className="w-full md:w-1/2 h-full">
            <TagToCode ogMetaTags={ogMetaTags} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}