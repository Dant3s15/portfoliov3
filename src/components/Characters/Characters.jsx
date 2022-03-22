import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';
const Characters = props => {
  const charactersRoot = document.getElementById('characters-root');
  return (
    <Fragment>
      {ReactDOM.createPortal(<Character data={0}></Character>, charactersRoot)}
      {ReactDOM.createPortal(<Character data={1}></Character>, charactersRoot)}
      {ReactDOM.createPortal(<Character data={2}></Character>, charactersRoot)}
    </Fragment>
  );
};

export default Characters;
