import { Route, Routes } from "react-router-dom"
import LoginComp from "../components/Login/LoginComp"
import PrivateRoute from "./Private"
import { useState } from "react"
import { Home } from "./home"
import LoginRoute from "./LoginRoute"
import Navbar from "../components/NavbarAndSidebar/Navbar"
import Sidebar from "../components/NavbarAndSidebar/Sidebar"
import Question from "../components/QuestionPage/Question"
import Notifications from "../components/Notifications/Notifications"
import Music from "../components/NavbarAndSidebar/SidebarOptions/Music"
import AnswerPageApp from "../components/AnswersPage/AnswerPageApp"
import Profile from "../components/Profile/profile"
import DetailsPage from "../components/DetailsPage/DetailsPage"
import Post from "../components/Postpage/Post"
import SpacePageComp from "../components/SpacePage/SpacePageComp"
import AnswerCard from "../components/DetailsPage/AnswerCard"
import Allcompdetails from "../components/DetailsPage/Allcompdetails"
function AllRoutes() {
  let [state, setState] = useState(true)
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginRoute>
            <LoginComp />
          </LoginRoute>
        }
      />
      <Route
        path="/answer/:id"
        element={
          <PrivateRoute>
            <Allcompdetails />
            {/* <AnswerCard/> */}
          </PrivateRoute>
        }
      />
      <Route
        path="/spaces"
        element={
          <PrivateRoute>
            <SpacePageComp />
          </PrivateRoute>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Navbar />
            <Sidebar />
            <Question state={state} setState={setState} />
            <Post state={state} setState={setState} />
          </PrivateRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <PrivateRoute>
            <Notifications />
          </PrivateRoute>
        }
      />
      <Route
        path="/topic/music"
        element={
          <PrivateRoute>
            <Music />
          </PrivateRoute>
        }
      />
      <Route
        path="/answer"
        element={
          <PrivateRoute>
            <AnswerPageApp />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
export default AllRoutes
