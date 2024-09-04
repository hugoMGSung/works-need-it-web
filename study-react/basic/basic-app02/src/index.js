import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import CheckButton from './eventTest/CheckButton';
// import MemberPage from './condRendTest/MemberPage';

// import Library from './library/Library';
// import Clock from './clock/Clock';
import CommentList from './comment/CommentList';
import AttendBook from './listTest/AttendBook';
import Register from './formTest/Registger';
import CalcTemp from './shareState/CalcTemp';
import ProfileCard from './compoTest/ProfileCard';
import DarkOrLight from './contextTest/DarkOrLight';
// import Dormitory from './hookTest/Dormitory';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Dormitory />
//   </React.StrictMode>
// );

// root.render(
// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       {/* <Library /> */}
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// }, 1000);
// );

// import ConfirmButton from './eventTest/ConfirmButton';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CheckButton />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <MemberPage />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Register />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CalcTemp />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
