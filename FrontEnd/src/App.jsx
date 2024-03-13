
// // import '../src/assets/css/App.css'
// // import { lazy } from 'react'
// // import {Routes,Route} from "react-router-dom"
// // import Video from './Components/Video'
// // // import Dashboard from './Components/Dashboard'
// // import Login from './Components/Login'
// // import SignUp from './Components/Signup';
// // import Schedule from './Components/Schedule';
// // import Academics from './Components/Academics';
// // import UserAdminPanel from './Components/UserAdminPanel'
// // import Classes from './Components/Classes'
// // import EnrollForm from './Components/EnrollForm'
// // import Trainer from './Components/Trainers'
// // import TrainerForm from './Components/TrainerForm'
// // import EnrollStatus from './Components/EnrollStatus'
// // import AdminLogin from './Components/Adminlogin'
// // // import Admindashboard from './Components/Admindashboard'
// // import UserView from './Components/UserView'
// // import Adminacademic from './Components/Adminacademic'
// // import Admintrainer from './Components/Admintrainer'
// // import Viewenroll from './Components/Viewenroll'
// // import Scheduleget from './Components/Scheduleget'
// // import Contact from './Components/Contact'
// // import Contactget from './Components/Contactget'
// // import AdminLayout from './Components/Admin/AdminLayout'
// // import CourseEnroll from './Components/CourseEnroll'
// // import LazyComponent from './Components/LazyComponent'
// // import { useSelector } from "react-redux";
// // import UserLayout from './Components/User/UserLayout'
// // const dashboard = lazy(() => import("./Components/Dashboard"));

// // const admindashboard=lazy(()=>import("./Components/Admindashboard"));
// // function App() {
// //   const userRole = useSelector((state) => state.auth.user);
// //   return (   
// //     <div>
      
// //       <Routes>
// //         <Route path="/" element={<Video/>}/>
// //         <Route path="/useradminpanel" element={<UserAdminPanel/>}/>
// //         <Route path="/login" element={<Login/>}/>
// //         <Route path="/signup" element={<SignUp/>}/>
// //         <Route path="/schedule" element={<Schedule/>}/>
// //         <Route path="/academics" element={<Academics/>}/>
// //         <Route path="/classes" element={<Classes/>}/>
// //         <Route path="/enroll" element={<EnrollForm/>}/>
// //         <Route path="/tran" element={<Trainer/>}/>
// //         <Route path="/tranform" element={<TrainerForm/>}/>
// //         <Route path="/enrollstatus" element={<EnrollStatus/>}/>
// //         <Route path="/adminlogin" element={<AdminLogin/>}/>
// //          <Route path="/userview" element={<UserView/>}/>
// //         <Route path="/adminacademic" element={<Adminacademic/>}/>
// //         <Route path="/admintrainer" element={<Admintrainer/>}/>
// //         <Route path="/viewenroll" element={<Viewenroll/>}/>
// //         <Route path="/scheduleget" element={<Scheduleget/>}/>
// //         <Route path="/contact" element={<Contact/>}/>
// //         <Route path="/contactget" element={<Contactget/>}/>
// //         <Route path="/admincourseenroll" element={<CourseEnroll/>}/>
// //         <Route path='/user/*' element={<UserRoutes/>}/>
// //         {userRole?.role === "USER" && (
// //           <Route path="/user/*" element={<UserRoutes />} />
// //          )}
// //         <Route path='/admin/*' element={<AdminRoutes/>}/>
// //         {userRole?.role === "ADMIN" && (
// //          <Route path="/admin/*" element={<AdminRoutes />} />
// //          )}
// //       </Routes> 
            
// //     </div>
// //   )
// // }

// // const UserRoutes = () => {
// //   return (
// //     <UserLayout>
      
// //         <Routes>
// //           <Route
// //             path="/dashboard"
// //             element={<LazyComponent component={dashboard} />}
// //           />
// //         </Routes>
// //     </UserLayout>
// //   );
// // };
// // const AdminRoutes = () => {
// //   return (
// //     <AdminLayout>
      
// //         <Routes>
// //           <Route
// //             path="/admindashboard"
// //             element={<LazyComponent component={admindashboard} />}
// //           />
        
// //         </Routes>
      
// //     </AdminLayout>
// //   );
// // };
// // export default App;



import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import '../src/assets/css/App.css';
import LazyComponent from './Components/LazyComponent';
import AdminLayout from './Pages/Admin/AdminLayout';
import ForgotPasswordPage from './Pages/Auth/ForgotPassword';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/Signup';
import UserLayout from './Pages/User/UserLayout';
// import AdminProfile from './Pages/Admin/AdminProfile';

// Lazy-loaded components
const dashboard = lazy(() => import('./Pages/User/Dashboard'));
const admindashboard = lazy(() => import('./Pages/Admin/Admindashboard'));
const schedule = lazy(() => import('./Pages/User/Schedule'));
const academics = lazy(() => import('./Pages/User/Academics'));
const userAdminPanel = lazy(() => import('./Pages/UserAdminPanel'));
const classes = lazy(() => import('./Pages/User/Classes'));
const enrollForm = lazy(() => import('./Pages/User/EnrollForm'));
const trainer = lazy(() => import('./Pages/User/Trainers'));
const trainerForm = lazy(() => import('./Pages/User/TrainerForm'));
const enrollStatus = lazy(() => import('./Pages/User/EnrollStatus'));
const adminLogin = lazy(() => import('./Components/Adminlogin'));
const userView = lazy(() => import('./Pages/Admin/UserView'));
const adminacademic = lazy(() => import('./Pages/Admin/Adminacademic'));
const admintrainer = lazy(() => import('./Pages/Admin/Admintrainer'));
const viewenroll = lazy(() => import('./Pages/Admin/Viewenroll'));
const scheduleget = lazy(() => import('./Pages/Admin/Scheduleget'));
const contact = lazy(() => import('./Pages/User/Contact'));
const contactget = lazy(() => import('./Pages/Admin/Contactget'));
const courseEnroll = lazy(() => import('./Pages/Admin/CourseEnroll'));
const course= lazy(() => import('./Pages/Admin/Course'));
const adminProfile= lazy(() => import('./Pages/Admin/AdminProfile'));
const userProfile= lazy(() => import('./Pages/User/UserProfile'));
// const ForgotPasswordPage = lazy(() => import('./Page/Auth/ForgotPasswordPage'));
// import AdminProfile from './Pages/Admin/AdminProfile';


const App = () => {
  const userRole = useSelector((state) => state.auth.user);

  return (
    <div>
      <Routes>
        <Route path="/" element={userAdminPanel}/>
        <Route path="/useradminpanel" element={<LazyComponent component={userAdminPanel} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/schedule" element={<LazyComponent component={schedule} />} />
        <Route path="/academics" element={<LazyComponent component={academics} />} />
        <Route path="/classes/:academyId" element={<LazyComponent component={classes} />} />
        <Route path="/enroll/:courseId/:courseName" element={<LazyComponent component={enrollForm} />} />
        <Route path="/tran" element={<LazyComponent component={trainer} />} />
        <Route path="/tranform" element={<LazyComponent component={trainerForm} />} />
        <Route path="/enrollstatus" element={<LazyComponent component={enrollStatus} />} />
        <Route path="/adminlogin" element={<LazyComponent component={adminLogin} />} />
        <Route path="/userview" element={<LazyComponent component={userView} />} />
        <Route path="/adminacademic" element={<LazyComponent component={adminacademic} />} />
        <Route path="/admintrainer" element={<LazyComponent component={admintrainer} />} />
        <Route path="/viewenroll" element={<LazyComponent component={viewenroll} />} />
        <Route path="/scheduleget" element={<LazyComponent component={scheduleget} />} />
        <Route path="/contact" element={<LazyComponent component={contact} />} />
        <Route path="/contactget" element={<LazyComponent component={contactget} />} />
        <Route path="/admincourseenroll" element={<LazyComponent component={courseEnroll} />} />
        <Route path="/dashboard" element={<LazyComponent component={dashboard} />} />
        <Route path="/admindashboard" element={<LazyComponent component={admindashboard} />} />
        <Route path="/adminprofile" element={<LazyComponent component={adminProfile} />} />
        <Route path="/userprofile" element={<LazyComponent component={userProfile} />} />
        <Route path="/course/:academyId" element={<LazyComponent component={course} />} />
        <Route path="/course" element={<LazyComponent component={course} />} />
        <Route path='/user/*' element={<UserRoutes/>}/>
        {userRole?.role === 'USER' && <Route path="/user/*" element={<UserRoutes />} />}
        <Route path='/admin/*' element={<AdminRoutes/>}/>
        {userRole?.role === 'ADMIN' && <Route path="/admin/*" element={<AdminRoutes />} />}
        
      </Routes>
    </div>
  );
};

const UserRoutes = () => (
  <UserLayout>
    <Routes>
      <Route path="/dashboard" element={<LazyComponent component={dashboard} />} />
    </Routes>
  </UserLayout>
);

const AdminRoutes = () => (
  <AdminLayout>
    <Routes>
      <Route path="/admindashboard" element={<LazyComponent component={admindashboard} />} />
    </Routes>
  </AdminLayout>
);

export default App;

// import { lazy } from 'react';
// import { useSelector } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import '../src/assets/css/App.css';
// import LazyComponent from './Components/LazyComponent';
// import Video from './Components/Video';
// import AdminLayout from './Pages/Admin/AdminLayout';
// import ForgotPasswordPage from './Pages/Auth/ForgotPassword';
// import Login from './Pages/Auth/Login';
// import SignUp from './Pages/Auth/Signup';
// import UserLayout from './Pages/User/UserLayout';
// // import AdminProfile from './Pages/Admin/AdminProfile';

// // Lazy-loaded components
// const dashboard = lazy(() => import('./Pages/User/Dashboard'));
// const admindashboard = lazy(() => import('./Pages/Admin/Admindashboard'));
// const schedule = lazy(() => import('./Pages/User/Schedule'));
// const academics = lazy(() => import('./Pages/User/Academics'));
// const userAdminPanel = lazy(() => import('./Pages/UserAdminPanel'));
// const classes = lazy(() => import('./Pages/User/Classes'));
// const enrollForm = lazy(() => import('./Pages/User/EnrollForm'));
// const trainer = lazy(() => import('./Pages/User/Trainers'));
// const trainerForm = lazy(() => import('./Pages/User/TrainerForm'));
// const enrollStatus = lazy(() => import('./Pages/User/EnrollStatus'));
// const adminLogin = lazy(() => import('./Components/Adminlogin'));
// const userView = lazy(() => import('./Pages/Admin/UserView'));
// const adminacademic = lazy(() => import('./Pages/Admin/Adminacademic'));
// const admintrainer = lazy(() => import('./Pages/Admin/Admintrainer'));
// const viewenroll = lazy(() => import('./Pages/Admin/Viewenroll'));
// const scheduleget = lazy(() => import('./Pages/Admin/Scheduleget'));
// const contact = lazy(() => import('./Pages/User/Contact'));
// const contactget = lazy(() => import('./Pages/Admin/Contactget'));
// const courseEnroll = lazy(() => import('./Pages/Admin/CourseEnroll'));
// const course= lazy(() => import('./Pages/Admin/Course'));
// const adminProfile= lazy(() => import('./Pages/Admin/AdminProfile'));
// const userProfile= lazy(() => import('./Pages/User/UserProfile'));
// // const Sidebar= lazy(() => import('./Pages/Admin/Sidebar'));
// // const ForgotPasswordPage = lazy(() => import('./Page/Auth/ForgotPasswordPage'));
// // import AdminProfile from './Pages/Admin/AdminProfile';
//  import Sidebar from './Pages/Admin/Sidebar';


// const App = () => {
//   const userRole = useSelector((state) => state.auth.user);

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Video />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//         <Route path="/useradminpanel" element={<LazyComponent component={userAdminPanel} />} />
//         <Route path="/adminlogin" element={<LazyComponent component={adminLogin} />} />
//         <Route path='/user/*' element={<UserRoutes/>}/>
//         {userRole?.role === 'USER' && <Route path="/user/*" element={<UserRoutes />} />}
//         <Route path='/admin/*' element={<AdminRoutes/>}/>
//         {userRole?.role === 'ADMIN' && <Route path="/admin/*" element={<AdminRoutes />} />}
        
//       </Routes>
//     </div>
//   );
// };

// const UserRoutes = () => (
//   <UserLayout>
//     <Routes>
//       <Route path="/dashboard" element={<LazyComponent component={dashboard} />} />
//       <Route path="/sidebar" element={Sidebar}/>
//       <Route path="/schedule" element={<LazyComponent component={schedule} />} />
//         <Route path="/academics" element={<LazyComponent component={academics} />} />
//         <Route path="/classes/:academyId" element={<LazyComponent component={classes} />} />
//         <Route path="/enroll/:courseId/:courseName" element={<LazyComponent component={enrollForm} />} />
//         <Route path="/tran" element={<LazyComponent component={trainer} />} />
//         <Route path="/tranform" element={<LazyComponent component={trainerForm} />} />
//         <Route path="/scheduleget" element={<LazyComponent component={scheduleget} />} />
//         <Route path="/contact" element={<LazyComponent component={contact} />} />
//         <Route path="/dashboard" element={<LazyComponent component={dashboard} />} />
//         <Route path="/userprofile" element={<LazyComponent component={userProfile} />} />
//         <Route path="/course" element={<LazyComponent component={course} />} />
//     </Routes>
//   </UserLayout>
// );

// const AdminRoutes = () => (
//   <AdminLayout>
//     <Routes>
//       <Route path="/admindashboard" element={<LazyComponent component={admindashboard} />} />
// <Route path="/course/:academyId" element={<LazyComponent component={course} />} />
//      <Route path="/userview" element={<LazyComponent component={userView} />} />
//         <Route path="/enrollstatus" element={<LazyComponent component={enrollStatus} />} />
//         <Route path="/adminacademic" element={<LazyComponent component={adminacademic} />} />
//         <Route path="/viewenroll" element={<LazyComponent component={viewenroll} />} />
//         <Route path="/admintrainer" element={<LazyComponent component={admintrainer} />} />
//         <Route path="/contactget" element={<LazyComponent component={contactget} />} />
//         <Route path="/admincourseenroll" element={<LazyComponent component={courseEnroll} />} />
//         <Route path="/admindashboard" element={<LazyComponent component={admindashboard} />} />
//         <Route path="/adminprofile" element={<LazyComponent component={adminProfile} />} />
        
//     </Routes>
//   </AdminLayout>
// );

// export default App;