import { useState } from 'react';
import Toolbar from './Toolbar';

function LandingPage(props) {
  const [isLoggIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggIn={isLoggIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>리액트 공부중</div>
    </div>
  );
}

export default LandingPage;
