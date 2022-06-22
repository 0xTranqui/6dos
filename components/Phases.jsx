import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Phases() {
   return (
      <div className=" w-full">
         <div className=" w-full max-w-md bg-white ">
         <Disclosure>
            {({ open }) => (
               <>
               <Disclosure.Button className="border-b-[1px] border-slate-200 border-solid flex flex-row w-full justify-between py-2 text-left text-xl font-normal ">
                  <span>Phase I.</span>
                  {/* <ChevronUpIcon
                     className={`${
                     open ? 'rotate-180 transform' : ''
                     } h-5 w-5`}
                  /> */}
               </Disclosure.Button>
               <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg">
                  <div>
                     <div>
                     ↳ Manifesto
                     </div>
                     <div>
                     ↳ Links
                     </div>
                     <div>
                     ↳ Images
                     </div>
                     <div>
                     {"↳ Chat [ Text Archive ]"}
                     </div>
                  </div>
               </Disclosure.Panel>
               </>
            )}
         </Disclosure>
         <Disclosure>
            {({ open }) => (
               <>
               <Disclosure.Button className="border-b-[1px] border-slate-200 border-solid flex flex-row w-full justify-between py-2 text-left text-xl font-normal ">
                  <span>Phase II.</span>
                  {/* <ChevronUpIcon
                     className={`${
                     open ? 'rotate-180 transform' : ''
                     } h-5 w-5`}
                  /> */}
               </Disclosure.Button>
               <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg">
                  <div>
                     <div>
                     ↳ Recruitment
                     </div>
                     <div>
                     ↳ Roadmap
                     </div>
                     <div>
                     ↳ Team Building
                     </div>
                     <div>
                     ↳ Images
                     </div>
                     <div>
                     {"↳ Chat [ Text Archive ]"}
                     </div>
                  </div>
               </Disclosure.Panel>
               </>
            )}
         </Disclosure>
         <Disclosure>
            {({ open }) => (
               <>
               <Disclosure.Button className="border-b-[1px] border-slate-200 border-solid flex flex-row w-full justify-between py-2 text-left text-xl font-normal ">
                  <span>Phase III.</span>
                  {/* <ChevronUpIcon
                     className={`${
                     open ? 'rotate-180 transform' : ''
                     } h-5 w-5`}
                  /> */}
               </Disclosure.Button>
               <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg">
                  <div>
                     <div>
                     ↳ Artifact Curation
                     </div>
                     <div>
                     ↳ Storyboard
                     </div>
                     <div>
                     ↳ Contributor Recruitment
                     </div>
                     <div>
                     {"↳ Chat [ Text Archive ]"}
                     </div>
                  </div>
               </Disclosure.Panel>
               </>
            )}
         </Disclosure>
         <Disclosure>
            {({ open }) => (
               <>
               <Disclosure.Button className="border-b-[1px] border-slate-200 border-solid flex flex-row w-full justify-between py-2 text-left text-xl font-normal ">
                  <span>Phase IV.</span>
                  {/* <ChevronUpIcon
                     className={`${
                     open ? 'rotate-180 transform' : ''
                     } h-5 w-5`}
                  /> */}
               </Disclosure.Button>
               <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg">
                  <div>
                     <div>
                     ↳ Production
                     </div>
                     <div>
                     ↳ Marketing / Rollout
                     </div>
                     <div>
                     ↳ Funding
                     </div>
                  </div>
               </Disclosure.Panel>
               </>
            )}
         </Disclosure>
         </div>
      </div>
   )
}