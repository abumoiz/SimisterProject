// import React, { useState, useEffect } from 'react';
// import styles from './Profile.module.css';
// import { useNavigate } from 'react-router-dom';
// import { getUsers } from '../services/userapi';

// const UserProfile = ({ user }) => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getUserDetails();
//   }, []); // Add an empty dependency array to run useEffect only once

//   const getUserDetails = async () => {
//     const result = await getUsers();
//     console.log(result);
//     setUsers(result); // Set the users state with the fetched data
//   };

//   return (
//     <div className={styles.body}>
//       <div className={styles.Container}>
//         <div className={styles.profile}>
//           <img
//             src="https://cdn.vectorstock.com/i/preview-1x/45/79/male-avatar-profile-picture-silhouette-light-vector-4684579.jpg"
//             alt=""
//             width="170px"
//             style={{ borderRadius: '50%' }}
//           />
//           <h3>Name : <label>{user.name}</label></h3> {/* Use user prop instead of users */}
//           <h3>DOB : <label>{user.dob}</label></h3>
//           <h3>Email : <label>{user.email}</label></h3>
//           <h3>Role: <label>{user.role}</label></h3>
//           <button onClick={() => navigate(-1)}>Back</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
