import { List, Title } from "@mantine/core";
import classes from "@/styles/index.module.css";
import { Board, Link } from "@/components";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center md:justify-center gap-8 py-4">
      <Title order={1} className={classes.title + " text-center"}>
        <span className={classes.highlight}>SET</span> recruitment task
      </Title>
      <div className="flex flex-col md:flex-row gap-4 mx-4">
      <Link href="/todo">
        <Board title="Frontend">
          <List.Item>
            Explore this project and try to create your own React components
          </List.Item>
          <List.Item>
            Create a functional todo list in another page{" "}
            <strong>(todo.tsx)</strong> using{" "}
            <Link href="https://mantine.dev">Mantine components</Link> and{" "}
            <Link href="https://tailwindcss.com">TailwindCSS</Link>
          </List.Item>
          <List.Item>
            Connect your frontend to the API developed by your backend partner
            using <Link href="https://axios-http.com">Axios</Link> and{" "}
            <Link href="https://tanstack.com/query/latest/">
              TanStack Query
            </Link>
          </List.Item>
        </Board>
      </Link>
        <Board title="Backend">
          <List.Item>
            Go to <strong>/api/hello</strong> and explore the available API in
            this project
          </List.Item>
          <List.Item>
            Create a REST API for a todo list using{" "}
            <Link href="https://next-api-decorators.vercel.app">
              Next.js API Decorators
            </Link>
          </List.Item>
          <List.Item>
            Refactor the API to work with a database using{" "}
            <Link href="https://www.prisma.io">Prisma</Link>
          </List.Item>
        </Board>
      </div>
    </div>
  );
}
