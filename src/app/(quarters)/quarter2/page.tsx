import Link from "next/link";

export default function Quarter2() {
  return (
    <main className="bg-white ">
      <div className="w-full px-5 space-y-4 py-10">
        <h1 className="text-2xl text-center">Quarter II (Core)</h1>
        <h1 className="text-xl text-center">
          W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs
          using Next.js 13 and Cloud Development Kit (CDK) for Terraform
        </h1>
        <span className="flex justify-center">Duration: 13 Weeks</span>
        <h1 className="underline font-bold text-xl">Course Description:</h1>
        <p className="indent-10">
          The objective of this course is to teach participants to develop
          customer-facing planet-scale Websites, Full-Stack Apps and templates,
          Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
          the participants will be able to develop and deploy web platforms like
          Facebook, Shopify, etc. The technologies covered in this course will
          include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL,
          Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
          Technologies, and Cloud Development Kit for Terraform (CDKTF).
        </p>
        <h1 className="text-xl font-bold underline">Course Outline: </h1>
        <ul className="list-decimal space-y-4 pl-4">
          <li>
            <h1 className="text-xl font-bold indent-10">
            Next.js 13 Web Development
            </h1>
            <div>
              <Link
                href={
                  "https://beta.nextjs.org/docs"
                }
                className="text-red-600 hover:underline pl-10"
              >
               Next 13 Official Documentation
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://beta.reactjs.org/learn"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Latest Learn React Official Website
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://github.com/panaverse/learn-nextjs"
                }
                className="text-red-600 hover:underline pl-10"
              >
               Learn Next.js 13 Learning Repo
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">
            Next.js 13 using Chakra UI (Remote Zoom Class){" "}
            </h1>
            <div>
              <Link
                href={
                  "https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
                }
                className="text-red-600 hover:underline pl-10"
              >
                CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items
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
