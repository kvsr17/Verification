import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const DashboardScreen = () => {
   const [userData, setUserData] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get('/api/user/profile');
         setUserData(response.data);
      };
      fetchData();
   }, []);

   return (
      <View>
         {userData ? (
            <View>
               <Text>Name: {userData.name}</Text>
               <Text>Job Status: {userData.jobStatus}</Text>
               <Text>Education Verified: {userData.educationVerified ? 'Yes' : 'No'}</Text>
            </View>
         ) : (
            <Text>Loading...</Text>
         )}
      </View>
   );
};

export default DashboardScreen;