import SideBar from "@/app/component/sidebar";
import Link from "next/link";

export default function Quarter1() {
  return (
    <main className="bg-white ">
      <div className="w-full px-5 space-y-4 py-10">
        <h1 className="text-2xl text-center">Quarter I (Core)</h1>
        <h1 className="text-2xl text-center">
          CS-101: Object-Oriented Programming using TypeScript
        </h1>
        <span className="flex justify-center">Duration: 13 Weeks</span>
        <h1 className="underline font-bold text-xl">Course Description:</h1>
        <p className="indent-10">
          {" "}
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
        </p>
        <h1 className="text-xl font-bold underline">Course Outline: </h1>
        <ul className="list-decimal space-y-4 pl-4">
          <li>
            <h1 className="text-xl font-bold indent-10">
              HTML and CSS (Homework)
            </h1>
            <div>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Learn HTML by Hira Khan (Watch Recorded Videos)
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">
              Web 3.0 and Metaverse Theory{" "}
            </h1>
            <div>
              <Link
                href={
                  "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Introduction to Panaverse DAO
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Web 3.0 User Guide
              </Link>
            </div>
            <p className="indent-10">
              Complete Web 3 Assignments included in the Web 3 User Guide
              Virtual and
            </p>
            <div>
              <Link
                href={
                  "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Augmented Metaverse User Guide
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">
              Fundamentals of Typescript TypeScript Presentation{" "}
            </h1>
            <div>
              <Link
                href={
                  "https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing"
                }
                className="text-red-600 hover:underline pl-10"
              >
                TypeScript Presentation
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Getting Started Exercises with TypeScript and Node.js
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">
              Object-Oriented Programming with TypeScript{" "}
            </h1>
            <div>
              <Link
                href={
                  " https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Chapters 1-11 of Learning TypeScript: Enhance Your Web
                Development Skills Using Type-Safe JavaScript
              </Link>
            </div>
            <div>
              <Link
                href={" https://github.com/panaverse/learn-typescript"}
                className="text-red-600 hover:underline pl-10"
              >
                Learning Repository
              </Link>
            </div>
            <div>
              <Link
                href={" https://www.learningtypescript.com/"}
                className="text-red-600 hover:underline pl-10"
              >
                In Class Companion projects and articles for Learning TypeScript
              </Link>
            </div>
            <div>
              <Link
                href={" https://github.com/panaverse/typescript-node-projects"}
                className="text-red-600 hover:underline pl-10"
              >
                Homework Project
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">
              Fundamentals of Typescript TypeScript Presentation{" "}
            </h1>
            <div>
              <Link
                href={"https://profy.dev/article/react-typescript"}
                className="text-red-600 hover:underline pl-10"
              >
                TypeScript for React Minimal TypeScript Crash Course For React
                With Interactive Code Exercises
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
