import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("sobre-nos", "routes/sobre.tsx"),
  route("blog", "routes/blog.tsx"),
] satisfies RouteConfig;
