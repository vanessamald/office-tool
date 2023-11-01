import { Tab } from '@headlessui/react'
import { useRouter } from 'next/router';
import SearchBar from '../pages/search';
import AllUsers from '../pages/users';
import AddNewUser from '../pages/newUser';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navigation () {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
      };
    
  return (
    <>
    <div>
    <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>
            Search
          </Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>
            Add New User
          </Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover.bg-white/[0.12] hover.text-white'
            )
          }>
            View All
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className={classNames(
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          )}>
            <SearchBar />
          </Tab.Panel>
          <Tab.Panel className={classNames(
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          )}>
            <AddNewUser />
          </Tab.Panel>
          <Tab.Panel className={classNames(
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          )}>
            <AllUsers/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    </>
  )
}
