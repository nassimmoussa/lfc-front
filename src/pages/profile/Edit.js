import React from 'react';

import EditProfileForm from './components/EditProfileForm';

import { useStyles } from './styles';

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <EditProfileForm />
    </div>
  );
};

export default Profile;
