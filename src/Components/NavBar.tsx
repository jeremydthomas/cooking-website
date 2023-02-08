import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useReducer } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const initialState = [
  { name: "Bears Kitchen", href: "/", logo: true },
  { name: "Home", href: "#", current: true },
  { name: "Menu", href: "#menu", current: false },
  { name: "Gallery", href: "#gallery", current: false },
  { name: "About Us", href: "#about", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function reducer(state: any, action: any) {
  switch (action.type) {
    case "set":
      return action.payload;
    default:
      throw new Error();
  }
}

export default function NavBar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(e.target.text);
    let temp = state.map((item: any) => {
      if (item.name === e.target.text) {
        item.current = true;
      } else {
        item.current = false;
      }
      return item;
    });
    dispatch({ type: "set", payload: temp });
  };

  return (
    <Disclosure
      as="nav"
      className=" fixed left-0 top-0 z-20 w-full bg-gray-800 duration-300 ease-in"
    >
      {({ open }) => (
        <>
          <div className="sticky z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 ">
                <div className="hidden grow md:ml-6 md:block">
                  <div className="flex justify-center">
                    <div
                      className={classNames(
                        "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-xl font-medium"
                      )}
                    >
                      {/* <Link href="/">Bears Kitchen</Link> */}
                    </div>
                    <div className="flex  content-center justify-end  space-x-20">
                      {initialState.map(
                        (item) => (
                          console.log(item),
                          (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : item.logo
                                  ? "rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "text-md rounded-md px-3 py-2 font-medium"
                              )}
                              onClick={(e) => handleClick(e)}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          )
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {initialState.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  onClick={(e: any) => handleClick(e)}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
