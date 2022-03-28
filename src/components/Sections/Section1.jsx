import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Section1 = props => {
  const skillsRoot = document.getElementById('skills-root');
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptate optio ratione consectetur. Dolores laboriosam commodi,
          nesciunt rem soluta accusamus dignissimos sapiente adipisci tempore
          recusandae aperiam, deserunt enim repellendus cumque?
        </p>,
        skillsRoot
      )}
    </Fragment>
  );
};

export default Section1;
