import React from 'react';
import ProfilPhoto  from './profile/ProfilPhoto';
import FullName from './profile/FullName'
import Address from './profile/Address'
import './Main.css'

function Main() {
  return (
    <div className="Main">
<FullName/>
 <ProfilPhoto/>
<Address/>
    </div>
  );
}

export default Main;
