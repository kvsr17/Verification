import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const RequestVerificationScreen = () => {
   const [companyName, setCompanyName] = useState('');

   const handleSubmit = async () => {
      await axios.post('/api/verification/request', { companyName });
      alert('Verification request sent!');
   };

   return (
      <View>
         <TextInput placeholder="Company Name" value={companyName} onChangeText={setCompanyName} />
         <Button title="Request Verification" onPress={handleSubmit} />
      </View>
   );
};

export default RequestVerificationScreen;