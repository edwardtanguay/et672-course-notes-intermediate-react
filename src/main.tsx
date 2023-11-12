import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PageMoreExamples } from "./pages/PageMoreExamples.tsx";
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
				path: 'more-examples',
				element: <PageMoreExamples />,
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
