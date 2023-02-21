// Pages
import Login from "../components/Login";
import ChatRoom from "../components/ChatRoom";

// Public Routes
const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/", component: ChatRoom },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
