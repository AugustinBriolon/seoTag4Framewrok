import { Tabs } from '@radix-ui/themes'

import { OgMetaTags } from '../type'
import CodeReader from './CodeReader'

export default function TagToCode({ ogMetaTags }: { ogMetaTags: OgMetaTags }) {


  return (
    <Tabs.Root defaultValue="react" className='gap-4'>
      <Tabs.List color="teal">
        <Tabs.Trigger value="react">
          <div className='flex items-center justify-center gap-2'>
            <img src="/icons/react.svg" alt="Icon React" className='h-5 w-5' />
            <p>React</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger value="vue">
          <div className='flex items-center justify-center gap-2'>
            <img src="/icons/vue.svg" alt="Icon Vue" className='h-5 w-5' />
            <p>Vue</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger value="next">
          <div className='flex items-center justify-center gap-2'>
            <img src="/icons/next.svg" alt="Icon Next" className='h-5 w-5' />
            <p>Next</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger value="nuxt">
          <div className='flex items-center justify-center gap-2'>
            <img src="/icons/nuxt.svg" alt="Icon Nuxt" className='h-5 w-5' />
            <p>Nuxt</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger value="angular">
          <div className='flex items-center justify-center gap-2'>
            <img src="/icons/angular.svg" alt="Icon Angular" className='h-5 w-5' />
            <p>Angular</p>
          </div>
        </Tabs.Trigger>
      </Tabs.List>

      <div>
        <Tabs.Content value="react">
          <CodeReader ogMetaTags={ogMetaTags} value={"react"} />
        </Tabs.Content>
        <Tabs.Content value="vue">
          <CodeReader ogMetaTags={ogMetaTags} value={"vue"} />
        </Tabs.Content>
        <Tabs.Content value="next">
          <CodeReader ogMetaTags={ogMetaTags} value={"next"} />
        </Tabs.Content>
        <Tabs.Content value="nuxt">
          <CodeReader ogMetaTags={ogMetaTags} value={"nuxt"} />
        </Tabs.Content>
        <Tabs.Content value="angular">
          <CodeReader ogMetaTags={ogMetaTags} value={"angular"} />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  )
}
