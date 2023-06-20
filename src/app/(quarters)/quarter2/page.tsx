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
                href={"https://beta.nextjs.org/docs"}
                className="text-red-600 hover:underline pl-10"
              >
                Next 13 Official Documentation
              </Link>
            </div>
            <div>
              <Link
                href={"https://beta.reactjs.org/learn"}
                className="text-red-600 hover:underline pl-10"
              >
                Latest Learn React Official Website
              </Link>
            </div>
            <div>
              <Link
                href={"https://github.com/panaverse/learn-nextjs"}
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
                CSS Flexbox Explained – Complete Guide to Flexible Containers
                and Flex Items
              </Link>
            </div>
            <div>
              <Link
                href={"https://chakra-ui.com/getting-started"}
                className="text-red-600 hover:underline pl-10"
              >
                Chakra UI Docs
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">
              UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
              Class){" "}
            </h1>
            <div className=" pl-10">
              <Link
                href={
                  "https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
                }
                className="text-red-600 hover:underline"
              >
                Designing and Prototyping Interfaces with Figma: Learn essential
                UX/UI design principles by creating interactive prototypes for
                mobile, tablet, and desktop by Fabio Staiano
              </Link>
            </div>
            <div>
              <Link
                href={"https://www.figma.com/community/file/768809027799962739"}
                className="text-red-600 hover:underline pl-10"
              >
                Figma Design Kit for TailwindCSS
              </Link>
            </div>
            <div>
              <Link
                href={"https://www.figma.com/community/file/971408767069651759"}
                className="text-red-600 hover:underline pl-10"
              >
                Chakra UI Figma Kit
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">
              API Routes with Next.js (Remote Zoom Class){" "}
            </h1>
            <div>
              <Link
                href={"https://nextjs.org/docs/api-routes/introduction"}
                className="text-red-600 hover:underline pl-10"
              >
                API Routes
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">
              APIs with Next.js and tRPC (Remote Zoom Class){" "}
            </h1>
            <div>
              <Link
                href={
                  "https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Build a tRPC CRUD API Example with Next.js
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Stop building REST APIs for your Next.js apps, use tRPC instead
              </Link>
            </div>
          </li>
          <li>
            <h1 className="text-xl font-bold indent-10">SQL and Prisma </h1>
            <div>
              <Link
                href={
                  "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
                }
                className="text-red-600 hover:underline pl-10"
              >
                Start from scratch with relational databases
              </Link>
            </div>
            <div>
              <Link
                href={"https://www.youtube.com/watch?v=5hzZtqCNQKk"}
                className="text-red-600 hover:underline pl-10"
              >
                SQL For Beginners Video Tutorial
              </Link>
            </div>
            <div>
              <Link
                href={"https://www.freecodecamp.org/news/dbms-and-sql-basics/"}
                className="text-red-600 hover:underline pl-10"
              >
                Database Management Systems and SQL – Tutorial for Beginners
              </Link>
            </div>
            <li>
              <h1 className="text-xl font-bold indent-10">
                Next.js 13 using TailwindCSS (Remote Zoom Class){" "}
              </h1>
              <div>
                <Link
                  href={
                    "https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
                  }
                  className="text-red-600 hover:underline pl-10"
                >
                  Modern CSS with Tailwind, Second Edition by Noel Rappin
                </Link>
              </div>
            </li>
          </li>
        </ul>
      </div>
    </main>
  );
}
