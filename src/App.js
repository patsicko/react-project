


import { Fragment } from 'react';
import Users from './components/list-users/list-users';
import Alert from "./components/alert-users/alert"

function App(props) {
  return (
   <Fragment>
  <div className='all'>
  <div className='list'>
    list users
    <Users/>
    <Users/>
    <Users/>
    <Users/>
    </div>
 
  <div className='alert'>
    alert users

    <Alert name="Peter" url="https://random.responsiveimages.io/140/140"/>
    <Alert name="John" url="https://random.responsiveimages.io/140/140"/>
    <Alert name="Danny" url="https://random.responsiveimages.io/140/140"/>
    <Alert name="Smith" url="https://random.responsiveimages.io/140/140"/>
    <Alert name="Dan" url="https://random.responsiveimages.io/140/140"/>
    <Alert name="Sam" url="https://random.responsiveimages.io/140/140"/>
    

  </div>
  </div>
   </Fragment>
  );
}

export default App;
