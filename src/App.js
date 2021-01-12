import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyle = makeStyles({
  root : {
    minHeight: '100vh',
    background: `url("https://images.pexels.com/photos/1316897/pexels-photo-1316897.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1316897.jpg&fm=jpg") center no-repeat`,
    backgroundSize: 'cover',
  }
})

function App() {
  const classes = useStyle({})

  return (
    <div className={classes.root} >
      <Header />
      <PlaceToVisit />
      <CssBaseline />
    </div>
  );
}

export default App;
