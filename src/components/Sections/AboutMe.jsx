import { Fragment, useContext } from 'react';
// import ReactDOM from 'react-dom';
import SelectedContext from '../../context/selected-context';

const AboutMe = props => {
  const ctx = useContext(SelectedContext);
  return (
    <Fragment>
      {ctx.isSelected && <h1>CTX is working</h1>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate
        optio ratione consectetur. Dolores laboriosam commodi, nesciunt rem
        soluta accusamus dignissimos sapiente adipisci tempore recusandae
        aperiam, deserunt enim repellendus cumque?
      </p>
    </Fragment>
  );
};

export default AboutMe;
