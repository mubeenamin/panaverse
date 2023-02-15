
export default function Button(props: {
  children:
    any;
}) {
  return (
    <button className="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {props.children}
    </button>
  );
}
