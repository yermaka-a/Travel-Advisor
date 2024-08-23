import { MainPage } from "~/pages/MainPage"
import { createBrowserRouter } from "react-router-dom"
import BaseLayout from "~/layout"

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <BaseLayout>
                <MainPage />
            </BaseLayout>
        )
    }
])
