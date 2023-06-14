import propTypes from 'prop-types';

function Filter({ filterContact }) {
  return (
    <>
      <label htmlFor="filter" style={{ display: 'flex' }}>
        Find contact by name
      </label>
      <input type="search" id="filter" onChange={filterContact}></input>
    </>
  );
}

Filter.propTypes = {
  filterContact: propTypes.func.isRequired,
};

export default Filter;
