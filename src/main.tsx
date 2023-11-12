import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PageInfo } from "./pages/PageInfo.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { PageExamples } from "./pages/PageExamples.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/examples',
				element: <PageExamples />,
			},
			{
				path: 'info',
				element: <PageInfo />,
			},
			{
				path: 'about',
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/examples" replace/>
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
