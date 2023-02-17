
export default function Button(props: {
  children:
    any;
}) {
  return (
    <button className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800">
      {props.children}
    </button>
  );
}
