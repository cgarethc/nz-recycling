import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6dvLJF9WgJ1JuA_i5CTLWKMy7TUetNvI",
  authDomain: "nz-recycling.firebaseapp.com",
  databaseURL: "https://nz-recycling.firebaseio.com",
  projectId: "nz-recycling",
  storageBucket: "nz-recycling.appspot.com",
  messagingSenderId: "310749189183",
  appId: "1:310749189183:web:879f5c863eaab098cd548a",
  measurementId: "G-C65KG384W2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Gareth Cronin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {

  const [loading, setLoading] = React.useState(false);
  const [councils, setCouncils] = React.useState([]);

  React.useEffect(() => {
    if (councils.length === 0 && !loading) {
      setLoading(true);
      db.collection("councils").get().then((querySnapshot) => {
        const allCouncils = [];
        querySnapshot.forEach((doc) => {
          allCouncils.push(doc.data());
        });
        setCouncils(allCouncils);
        console.log(allCouncils);
        setLoading(false);
      });
    }
  },
    [councils.length, loading]
  );

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Recycling in New Zealand
        </Typography>        
        <Copyright />
      </Box>
    </Container>
  );
}
