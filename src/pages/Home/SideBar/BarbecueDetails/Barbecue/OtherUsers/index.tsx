import React from 'react';

import { Container } from './styles';

interface UserDetailsDTO {
  userId: string;
  username: string | undefined;
}

interface Props {
  otherUsers: UserDetailsDTO[];
}

const OtherUsers: React.FC<Props> = ({ otherUsers }) => {
  return (
    <Container>
      <h3>Outros convidados</h3>
      {otherUsers.map(user => {
        return <h5>{user.username}</h5>;
      })}
    </Container>
  );
};

export default OtherUsers;
